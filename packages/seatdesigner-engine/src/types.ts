export type LengthUnit = 'mm' | 'm' | 'ft' | 'in';

export interface Point {
  x: number;
  y: number;
}

export interface RingElement {
  id: string;
  label?: string;
  /** Diámetro del círculo en pulgadas */
  diameterIn: number;
  center: Point;
}

export interface PlacementElement {
  id: string;
  label?: string;
  /** Bounding box axis aligned en milímetros */
  bounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface AdaZone {
  id: string;
  label?: string;
  bounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  type: 'ada-aisle' | 'ada-stage' | 'ada-entry';
}

export interface ViolationBase {
  code: string;
  message: string;
  severity: 'warn' | 'block';
}

export interface RingClearanceViolation extends ViolationBase {
  code: 'ring.clearance';
  ringA: string;
  ringB: string;
  requiredClearanceMm: number;
  availableClearanceMm: number;
  overlapMm: number;
  overlay: {
    center: Point;
    radiusMm: number;
  };
}

export interface AdaBlockingViolation extends ViolationBase {
  code: 'ada.block';
  elementId: string;
  zoneId: string;
}

export type ValidatorViolation = RingClearanceViolation | AdaBlockingViolation;

export interface ValidationSummary {
  violations: ValidatorViolation[];
  warnings: ValidatorViolation[];
}

export interface ExportGateOptions {
  /** true → bloquear siempre; false → permitir override */
  hardBlock: boolean;
  overrideAccepted?: boolean;
}

export interface ExportGateResult {
  blocked: boolean;
  reasonCodes: string[];
}
