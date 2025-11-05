use seatdesigner_engine::{validate_plan, ValidationStatus};

#[test]
fn basic_validation_ok() {
    let input = r#"{
        "units":"metric",
        "layers":{"envelope":[{"type":"polygon","points":[[0,0],[5,0],[5,5],[0,5]]}]}
    }"#;
    let result = validate_plan(input).expect("validation result");
    assert_eq!(ValidationStatus::Ok, result.status);
}

#[test]
fn fails_without_envelope() {
    let input = r#"{"units":"metric","layers":{}}"#;
    let result = validate_plan(input).expect("validation result");
    assert_eq!(ValidationStatus::Error, result.status);
    assert!(result.issues.iter().any(|i| i.code == "MISSING_ENVELOPE"));
}
