import type {
  AdaBlockingViolation,
  AdaZone,
  PlacementElement
} from './types.js';

function intersects(
  a: PlacementElement['bounds'],
  b: AdaZone['bounds']
): boolean {
  return !(
    a.x + a.width <= b.x ||
    b.x + b.width <= a.x ||
    a.y + a.height <= b.y ||
    b.y + b.height <= a.y
  );
}

export interface AdaValidatorOptions {
  /** Si es true la penalización será bloqueante, en caso contrario warning. */
  hardBlock?: boolean;
}

export function validateAdaNoPlace(
  elements: PlacementElement[],
  zones: AdaZone[],
  options: AdaValidatorOptions = {}
): AdaBlockingViolation[] {
  const { hardBlock = true } = options;
  const violations: AdaBlockingViolation[] = [];

  for (const zone of zones) {
    for (const element of elements) {
      if (intersects(element.bounds, zone.bounds)) {
        violations.push({
          code: 'ada.block',
          message:
            `El elemento ${element.label ?? element.id} invade la zona ADA ` +
            `${zone.label ?? zone.id}.`,
          severity: hardBlock ? 'block' : 'warn',
          elementId: element.id,
          zoneId: zone.id
        });
      }
    }
  }

  return violations;
}
