export type {
  RingElement,
  PlacementElement,
  AdaZone,
  RingClearanceViolation,
  AdaBlockingViolation,
  ValidatorViolation,
  ExportGateOptions,
  ExportGateResult
} from './types.js';

export {
  validateRingClearance,
  type RingClearanceOptions,
  type RingClearanceResult
} from './ringClearance.js';

export {
  validateAdaNoPlace,
  type AdaValidatorOptions
} from './adaValidator.js';

export { applySeparationFix, type SeparationResult } from './fixes.js';
export { shouldBlockExport } from './exportGate.js';
