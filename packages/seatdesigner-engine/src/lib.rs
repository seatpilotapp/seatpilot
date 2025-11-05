#![cfg_attr(feature = "wasm", allow(clippy::needless_return))]

use serde::{Deserialize, Serialize};
use thiserror::Error;

#[cfg(feature = "wasm")]
use wasm_bindgen::prelude::*;

const CLEARANCE_LOOKUP: &[(f64, f64)] = &[
    (48.0, 108.0), // 9 ft ring
    (60.0, 120.0), // 10 ft ring
    (72.0, 132.0), // 11 ft ring
];
const RING_MATCH_TOLERANCE_INCHES: f64 = 1.0;
const SEPARATION_FIX_INCHES: f64 = 31.496; // 0.8 m
const DISTANCE_EPSILON: f64 = 1e-6;

/// Result payload returned by the validation engine.
#[derive(Debug, Serialize, Deserialize, PartialEq)]
pub struct ValidationResult {
    pub status: ValidationStatus,
    pub issues: Vec<ValidationIssue>,
}

/// Overall status of the validation report.
#[derive(Debug, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "lowercase")]
pub enum ValidationStatus {
    Ok,
    Warn,
    Error,
}

/// Individual validation issue.
#[derive(Debug, Serialize, Deserialize, PartialEq)]
pub struct ValidationIssue {
    pub level: IssueLevel,
    pub code: String,
    pub message: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub hint: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub fix: Option<SuggestedFix>,
}

/// Severity level of an issue.
#[derive(Debug, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "lowercase")]
pub enum IssueLevel {
    Info,
    Warn,
    Error,
}

#[derive(Error, Debug)]
pub enum EngineError {
    #[error("invalid JSON payload: {0}")]
    InvalidJson(#[from] serde_json::Error),
}

#[derive(Debug, Serialize, Deserialize, PartialEq)]
pub struct SuggestedFix {
    pub action: String,
    pub target_id: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub dx_inches: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub dy_inches: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub reference_id: Option<String>,
}

#[derive(Debug, Deserialize, Default)]
struct PlanPayload {
    units: Option<String>,
    #[serde(default)]
    layers: PlanLayers,
    #[serde(default)]
    furniture: Vec<FurnitureItem>,
    #[serde(default)]
    zones: Vec<PlanZone>,
}

#[derive(Debug, Deserialize, Default)]
struct PlanLayers {
    #[serde(default)]
    envelope: Vec<EnvelopeShape>,
}

#[derive(Debug, Deserialize)]
struct EnvelopeShape {
    #[serde(rename = "type")]
    _kind: Option<String>,
    #[serde(default)]
    #[serde(rename = "points")]
    _points: Vec<[f64; 2]>,
}

#[derive(Debug, Deserialize)]
struct FurnitureItem {
    id: String,
    #[serde(default)]
    #[serde(rename = "typeId")]
    type_id: Option<String>,
    #[serde(default)]
    category: Option<String>,
    #[serde(default)]
    #[serde(rename = "widthInches")]
    width_inches: f64,
    #[serde(default)]
    #[serde(rename = "depthInches")]
    depth_inches: f64,
    #[serde(default)]
    #[serde(rename = "rotationDeg")]
    _rotation_deg: f64,
    center: [f64; 2],
}

#[derive(Debug, Deserialize)]
struct PlanZone {
    id: Option<String>,
    name: Option<String>,
    kind: Option<String>,
    polygon: Vec<[f64; 2]>,
}

impl ValidationResult {
    fn new(issues: Vec<ValidationIssue>) -> Self {
        let status = if issues.iter().any(|i| matches!(i.level, IssueLevel::Error)) {
            ValidationStatus::Error
        } else if issues.iter().any(|i| matches!(i.level, IssueLevel::Warn)) {
            ValidationStatus::Warn
        } else {
            ValidationStatus::Ok
        };
        Self { status, issues }
    }
}

/// Core validation routine.
pub fn validate_plan(plan_json: &str) -> Result<ValidationResult, EngineError> {
    let data: PlanPayload = serde_json::from_str(plan_json)?;
    let mut issues: Vec<ValidationIssue> = Vec::new();

    if data.layers.envelope.is_empty() {
        issues.push(ValidationIssue {
            level: IssueLevel::Error,
            code: "MISSING_ENVELOPE".to_string(),
            message: "El plano no contiene la capa 'envelope' (envolvente principal).".into(),
            hint: Some("Agrega al menos un polígono en layers.envelope.".into()),
            fix: None,
        });
    }

    if let Some(units) = data.units.as_deref() {
        if units != "metric" && units != "imperial" {
            issues.push(ValidationIssue {
                level: IssueLevel::Warn,
                code: "UNSUPPORTED_UNITS".to_string(),
                message: format!("Unidad desconocida: {units}"),
                hint: Some(
                    "Usa 'metric' o 'imperial' para garantizar conversiones correctas.".into(),
                ),
                fix: None,
            });
        }
    } else {
        issues.push(ValidationIssue {
            level: IssueLevel::Warn,
            code: "MISSING_UNITS".to_string(),
            message: "El plano no define 'units'. Se asumirá 'metric' por defecto.".into(),
            hint: Some("Incluye units: \"metric\" | \"imperial\" en plan.json.".into()),
            fix: None,
        });
    }

    evaluate_ring_clearance(&data.furniture, &mut issues);
    evaluate_no_place(&data.furniture, &data.zones, &mut issues);

    Ok(ValidationResult::new(issues))
}

#[cfg(feature = "wasm")]
#[wasm_bindgen]
pub fn validate_plan_json(input: &str) -> String {
    console_error_panic_hook::set_once();
    match validate_plan(input) {
        Ok(result) => serde_json::to_string(&result).unwrap_or_else(|_| "{}".into()),
        Err(err) => serde_json::to_string(&serde_json::json!({
            "status": "error",
            "issues": [{
                "level": "error",
                "code": "ENGINE_ERROR",
                "message": err.to_string()
            }]
        }))
        .unwrap_or_else(|_| "{}".into()),
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use pretty_assertions::assert_eq;

    #[test]
    fn detects_missing_envelope() {
        let input = r#"{"units":"metric","layers":{}}"#;
        let result = validate_plan(input).unwrap();
        assert_eq!(result.status, ValidationStatus::Error);
        assert!(result
            .issues
            .iter()
            .any(|i| i.code == "MISSING_ENVELOPE" && matches!(i.level, IssueLevel::Error)));
    }

    #[test]
    fn passes_with_basic_envelope() {
        let input = r#"{
            "units":"metric",
            "layers":{"envelope":[{"type":"polygon","points":[[0,0],[1,0],[1,1],[0,1]]}]}
        }"#;
        let result = validate_plan(input).unwrap();
        assert_eq!(result.status, ValidationStatus::Ok);
        assert!(result.issues.is_empty());
    }

    #[test]
    fn warns_on_unknown_units() {
        let input = r#"{"units":"custom","layers":{"envelope":[{"type":"polygon","points":[[0,0],[1,0],[1,1],[0,1]]}]}}"#;
        let res = validate_plan(input).unwrap();
        assert_eq!(res.status, ValidationStatus::Warn);
        assert!(res.issues.iter().any(|i| i.code == "UNSUPPORTED_UNITS"));
    }

    #[test]
    fn detects_ring_clearance_violation() {
        let input = r#"{
            "units": "imperial",
            "layers": {"envelope":[{"type":"polygon","points":[[0,0],[200,0],[200,200],[0,200]]}]},
            "furniture": [
                {
                    "id":"table-1",
                    "typeId":"table-round",
                    "category":"Dining",
                    "widthInches":60,
                    "depthInches":60,
                    "rotationDeg":0,
                    "center":[100,100]
                },
                {
                    "id":"table-2",
                    "typeId":"table-round",
                    "category":"Dining",
                    "widthInches":48,
                    "depthInches":48,
                    "rotationDeg":0,
                    "center":[120,100]
                }
            ]
        }"#;
        let res = validate_plan(input).unwrap();
        assert_eq!(res.status, ValidationStatus::Error);
        let ring_issue = res
            .issues
            .iter()
            .find(|i| i.code == "RING_CLEARANCE")
            .expect("ring issue");
        assert!(matches!(ring_issue.level, IssueLevel::Error));
        assert!(ring_issue
            .fix
            .as_ref()
            .map(|fix| fix.action == "offset" && fix.target_id == "table-1")
            .unwrap_or(false));
    }

    #[test]
    fn detects_ada_no_place_violation() {
        let input = r#"{
            "units": "imperial",
            "layers": {"envelope":[{"type":"polygon","points":[[0,0],[400,0],[400,400],[0,400]]}]},
            "zones": [
                {
                    "id":"zone-ada",
                    "name":"ADA no-place",
                    "kind":"ada_no_place",
                    "polygon":[[100,100],[200,100],[200,200],[100,200]]
                }
            ],
            "furniture": [
                {
                    "id":"table-3",
                    "typeId":"table-round",
                    "category":"Dining",
                    "widthInches":48,
                    "depthInches":48,
                    "rotationDeg":0,
                    "center":[150,150]
                }
            ]
        }"#;
        let res = validate_plan(input).unwrap();
        assert_eq!(res.status, ValidationStatus::Error);
        assert!(res.issues.iter().any(|i| i.code == "ADA_NO_PLACE"));
    }
}

fn evaluate_ring_clearance(furniture: &[FurnitureItem], issues: &mut Vec<ValidationIssue>) {
    for table in furniture.iter() {
        if !is_round_dining_table(table) {
            continue;
        }

        let Some(required_ring_diameter) = required_ring_diameter(table.width_inches) else {
            continue;
        };

        let clearance_radius = required_ring_diameter / 2.0;

        for other in furniture.iter() {
            if std::ptr::eq(table, other) {
                continue;
            }

            let distance = distance_between(&table.center, &other.center);
            if distance < DISTANCE_EPSILON {
                continue;
            }

            let other_radius = bounding_radius(other);
            let required_distance = clearance_radius + other_radius;

            if distance + DISTANCE_EPSILON >= required_distance {
                continue;
            }

            let distance_ft = distance / 12.0;
            let ring_ft = required_ring_diameter / 12.0;
            let message = format!(
                "Mesa {} requiere un disco de {} ft libre de obstáculos; {} está a {:.2} ft del centro.",
                table.id,
                ring_ft,
                other.id,
                distance_ft
            );
            let hint = format!(
                "Reubica la mesa {} o {} para liberar el disco de servicio ({} ft).",
                table.id, other.id, ring_ft
            );
            let fix = compute_offset_fix(table, other);
            issues.push(ValidationIssue {
                level: IssueLevel::Error,
                code: "RING_CLEARANCE".to_string(),
                message,
                hint: Some(hint),
                fix,
            });

            // Solo registrar la primera infracción por mesa para evitar ruido excesivo
            break;
        }
    }
}

fn evaluate_no_place(
    furniture: &[FurnitureItem],
    zones: &[PlanZone],
    issues: &mut Vec<ValidationIssue>,
) {
    let ada_zones: Vec<&PlanZone> = zones
        .iter()
        .filter(|zone| matches!(zone.kind.as_deref(), Some("ada_no_place")))
        .collect();

    if ada_zones.is_empty() {
        return;
    }

    for item in furniture {
        for zone in &ada_zones {
            if point_in_polygon(&item.center, &zone.polygon) {
                let zone_label = zone
                    .name
                    .as_ref()
                    .or(zone.id.as_ref())
                    .cloned()
                    .unwrap_or_else(|| "zona ADA".to_string());
                let message = format!(
                    "El elemento {} se ubica dentro de la zona restringida {}.",
                    item.id, zone_label
                );
                let hint = "Reubica la mesa fuera de la franja ADA/no-place.".to_string();
                let fix = compute_zone_fix(item, zone);
                issues.push(ValidationIssue {
                    level: IssueLevel::Error,
                    code: "ADA_NO_PLACE".to_string(),
                    message,
                    hint: Some(hint),
                    fix,
                });
                break;
            }
        }
    }
}

fn compute_offset_fix(table: &FurnitureItem, other: &FurnitureItem) -> Option<SuggestedFix> {
    let dx = table.center[0] - other.center[0];
    let dy = table.center[1] - other.center[1];
    let length = (dx * dx + dy * dy).sqrt();
    if length < DISTANCE_EPSILON {
        return None;
    }
    let scale = SEPARATION_FIX_INCHES / length;
    Some(SuggestedFix {
        action: "offset".to_string(),
        target_id: table.id.clone(),
        description: Some("Separar 0.8 m del obstáculo más cercano.".to_string()),
        dx_inches: Some(dx * scale),
        dy_inches: Some(dy * scale),
        reference_id: Some(other.id.clone()),
    })
}

fn compute_zone_fix(item: &FurnitureItem, zone: &PlanZone) -> Option<SuggestedFix> {
    let centroid = polygon_centroid(&zone.polygon)?;
    let dx = item.center[0] - centroid[0];
    let dy = item.center[1] - centroid[1];
    let length = (dx * dx + dy * dy).sqrt();
    if length < DISTANCE_EPSILON {
        return None;
    }
    let scale = SEPARATION_FIX_INCHES / length;
    Some(SuggestedFix {
        action: "offset".to_string(),
        target_id: item.id.clone(),
        description: Some("Mover 0.8 m fuera de la franja ADA/no-place.".to_string()),
        dx_inches: Some(dx * scale),
        dy_inches: Some(dy * scale),
        reference_id: zone.id.clone(),
    })
}

fn distance_between(a: &[f64; 2], b: &[f64; 2]) -> f64 {
    ((a[0] - b[0]).powi(2) + (a[1] - b[1]).powi(2)).sqrt()
}

fn bounding_radius(item: &FurnitureItem) -> f64 {
    0.5 * item.width_inches.max(item.depth_inches)
}

fn required_ring_diameter(width_inches: f64) -> Option<f64> {
    for (diameter, ring) in CLEARANCE_LOOKUP {
        if (width_inches - diameter).abs() <= RING_MATCH_TOLERANCE_INCHES {
            return Some(*ring);
        }
    }
    None
}

fn is_round_dining_table(item: &FurnitureItem) -> bool {
    let category_ok = item
        .category
        .as_ref()
        .map(|category| category.eq_ignore_ascii_case("Dining"))
        .unwrap_or(true);
    if !category_ok {
        return false;
    }
    let type_hint_ok = item
        .type_id
        .as_ref()
        .map(|type_id| type_id.to_lowercase().contains("table"))
        .unwrap_or(true);
    type_hint_ok
        && item.width_inches > 0.0
        && (item.width_inches - item.depth_inches).abs() <= RING_MATCH_TOLERANCE_INCHES
}

fn point_in_polygon(point: &[f64; 2], polygon: &[[f64; 2]]) -> bool {
    if polygon.len() < 3 {
        return false;
    }
    let mut inside = false;
    let mut j = polygon.len() - 1;
    for i in 0..polygon.len() {
        let xi = polygon[i][0];
        let yi = polygon[i][1];
        let xj = polygon[j][0];
        let yj = polygon[j][1];

        let denom = (yj - yi).abs().max(DISTANCE_EPSILON);
        let intersect = ((yi > point[1]) != (yj > point[1]))
            && (point[0] < (xj - xi) * (point[1] - yi) / denom + xi);
        if intersect {
            inside = !inside;
        }
        j = i;
    }
    inside
}

fn polygon_centroid(polygon: &[[f64; 2]]) -> Option<[f64; 2]> {
    if polygon.is_empty() {
        return None;
    }
    let mut x_sum = 0.0;
    let mut y_sum = 0.0;
    for point in polygon {
        x_sum += point[0];
        y_sum += point[1];
    }
    let count = polygon.len() as f64;
    Some([x_sum / count, y_sum / count])
}
