import type {
  ExportGateOptions,
  ExportGateResult,
  ValidatorViolation
} from './types.js';

export function shouldBlockExport(
  violations: ValidatorViolation[],
  options: ExportGateOptions
): ExportGateResult {
  const blocking = violations.filter((violation) => violation.severity === 'block');
  const reasonCodes = Array.from(new Set(blocking.map((violation) => violation.code)));

  if (blocking.length === 0) {
    return { blocked: false, reasonCodes: [] };
  }

  if (options.hardBlock) {
    return { blocked: true, reasonCodes };
  }

  if (options.overrideAccepted) {
    return { blocked: false, reasonCodes };
  }

  return { blocked: true, reasonCodes };
}
