import type { Point, RingElement } from './types.js';
import { distanceBetween, inchesToMm } from './utils.js';

export interface SeparationResult {
  target: Point;
  delta: Point;
  appliedGapMm: number;
}

/**
 * Calcula una posición nueva para `moving` de manera que exista al menos `minEdgeGapMm`
 * entre los bordes de ambos anillos. Devuelve la nueva coordenada y el vector aplicado.
 */
export function applySeparationFix(
  anchor: RingElement,
  moving: RingElement,
  minEdgeGapMm = 800
): SeparationResult {
  const anchorRadiusMm = inchesToMm(anchor.diameterIn) / 2;
  const movingRadiusMm = inchesToMm(moving.diameterIn) / 2;

  const currentDistance = distanceBetween(
    anchor.center.x,
    anchor.center.y,
    moving.center.x,
    moving.center.y
  );
  const minDistance = anchorRadiusMm + movingRadiusMm + minEdgeGapMm;
  const extraNeeded = minDistance - currentDistance;

  if (extraNeeded <= 0) {
    return {
      target: { ...moving.center },
      delta: { x: 0, y: 0 },
      appliedGapMm: minEdgeGapMm
    };
  }

  let directionX = moving.center.x - anchor.center.x;
  let directionY = moving.center.y - anchor.center.y;
  const magnitude = Math.hypot(directionX, directionY);

  if (magnitude === 0) {
    directionX = 1;
    directionY = 0;
  } else {
    directionX /= magnitude;
    directionY /= magnitude;
  }

  const deltaX = directionX * extraNeeded;
  const deltaY = directionY * extraNeeded;

  return {
    target: {
      x: moving.center.x + deltaX,
      y: moving.center.y + deltaY
    },
    delta: {
      x: deltaX,
      y: deltaY
    },
    appliedGapMm: minEdgeGapMm
  };
}
