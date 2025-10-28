const INCH_TO_MM = 25.4;
const FOOT_TO_MM = 304.8;

export function inchesToMm(value: number): number {
  return value * INCH_TO_MM;
}

export function feetToMm(value: number): number {
  return value * FOOT_TO_MM;
}

export function distanceBetween(
  ax: number,
  ay: number,
  bx: number,
  by: number
): number {
  const dx = ax - bx;
  const dy = ay - by;
  return Math.hypot(dx, dy);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
