import type {
  RingElement,
  RingClearanceViolation,
  ValidatorViolation
} from './types.js';
import { distanceBetween, feetToMm, inchesToMm } from './utils.js';

export interface RingClearanceOptions {
  /**
   * Overrides por diámetro (en pulgadas) → clearance mínimo en pies.
   * Si no se indica, se usa la tabla ADA por defecto:
   * 48" → 9 ft, 60" → 10 ft, 72" o más → 11 ft.
   */
  clearanceOverrides?: Record<number, number>;
  /** Margen extra (mm) requerido además de la tabla base. */
  extraMarginMm?: number;
  /** Tolerancia que se resta del cálculo para reducir falsos positivos. */
  toleranceMm?: number;
}

const DEFAULT_CLEARANCE_TABLE: Array<{ maxDiameter: number; ft: number }> = [
  { maxDiameter: 48, ft: 9 },
  { maxDiameter: 60, ft: 10 },
  { maxDiameter: Number.POSITIVE_INFINITY, ft: 11 }
];

function clearanceForDiameter(
  diameterIn: number,
  overrides?: Record<number, number>
): number {
  if (overrides && typeof overrides[diameterIn] === 'number') {
    return overrides[diameterIn]!;
  }
  for (const row of DEFAULT_CLEARANCE_TABLE) {
    if (diameterIn <= row.maxDiameter) {
      return row.ft;
    }
  }
  return DEFAULT_CLEARANCE_TABLE[DEFAULT_CLEARANCE_TABLE.length - 1]!.ft;
}

function walkwayRadiusMm(
  element: RingElement,
  overrides?: Record<number, number>,
  extraMarginMm = 0
): number {
  const clearanceFt = clearanceForDiameter(element.diameterIn, overrides);
  const clearanceMm = feetToMm(clearanceFt) + extraMarginMm;
  const radiusMm = inchesToMm(element.diameterIn) / 2;
  return radiusMm + clearanceMm;
}

export interface RingClearanceResult {
  violations: RingClearanceViolation[];
  overlays: Array<{ id: string; radiusMm: number }>;
}

export function validateRingClearance(
  rings: RingElement[],
  options: RingClearanceOptions = {}
): RingClearanceResult {
  const { clearanceOverrides, extraMarginMm = 0, toleranceMm = 0 } = options;
  const overlays = rings.map((ring) => ({
    id: ring.id,
    radiusMm: walkwayRadiusMm(ring, clearanceOverrides, extraMarginMm)
  }));

  const violations: RingClearanceViolation[] = [];

  for (let i = 0; i < rings.length; i += 1) {
    const ringA = rings[i]!;
    const radiusAmm = inchesToMm(ringA.diameterIn) / 2;
    const walkwayAmm =
      walkwayRadiusMm(ringA, clearanceOverrides, extraMarginMm) - radiusAmm;

    for (let j = i + 1; j < rings.length; j += 1) {
      const ringB = rings[j]!;
      const radiusBmm = inchesToMm(ringB.diameterIn) / 2;
      const walkwayBmm =
        walkwayRadiusMm(ringB, clearanceOverrides, extraMarginMm) - radiusBmm;

      const availableGapMm =
        distanceBetween(
          ringA.center.x,
          ringA.center.y,
          ringB.center.x,
          ringB.center.y
        ) -
        (radiusAmm + radiusBmm);

      const requiredGapMm =
        walkwayAmm + walkwayBmm - (toleranceMm > 0 ? toleranceMm : 0);

      if (availableGapMm + toleranceMm < requiredGapMm) {
        const overlapMm = requiredGapMm - availableGapMm;
        violations.push({
          code: 'ring.clearance',
          message:
            `Distancia insuficiente entre ${ringA.label ?? ringA.id} y ` +
            `${ringB.label ?? ringB.id}. Se requieren ${(requiredGapMm / 304.8)
              .toFixed(2)
              .replace(/\.?0+$/, '')} ft entre bordes.`,
          severity: 'block',
          ringA: ringA.id,
          ringB: ringB.id,
          requiredClearanceMm: requiredGapMm,
          availableClearanceMm: availableGapMm,
          overlapMm,
          overlay: {
            center: {
              x: (ringA.center.x + ringB.center.x) / 2,
              y: (ringA.center.y + ringB.center.y) / 2
            },
            radiusMm: Math.max(
              walkwayRadiusMm(ringA, clearanceOverrides, extraMarginMm),
              walkwayRadiusMm(ringB, clearanceOverrides, extraMarginMm)
            )
          }
        });
      }
    }
  }

  return { violations, overlays };
}

export function groupBySeverity(
  violations: ValidatorViolation[]
): { blocking: ValidatorViolation[]; warnings: ValidatorViolation[] } {
  const blocking: ValidatorViolation[] = [];
  const warnings: ValidatorViolation[] = [];
  for (const violation of violations) {
    if (violation.severity === 'block') {
      blocking.push(violation);
    } else {
      warnings.push(violation);
    }
  }
  return { blocking, warnings };
}
