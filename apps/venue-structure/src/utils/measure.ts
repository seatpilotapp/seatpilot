import type { DisplayUnits } from "../types";
import { GRID_SIZE } from "./constants";

const INCHES_PER_FOOT = 12;
const CENTIMETERS_PER_INCH = 2.54;

export function formatLengthInches(valueInches: number, units: DisplayUnits): string {
  if (!Number.isFinite(valueInches)) {
    return "-";
  }
  const sign = valueInches < 0 ? "-" : "";
  const absInches = Math.abs(valueInches);
  if (units === "metric") {
    const cm = absInches * CENTIMETERS_PER_INCH;
    if (cm >= 100) {
      const meters = cm / 100;
      return `${sign}${meters.toFixed(2)} m`;
    }
    return `${sign}${cm.toFixed(1)} cm`;
  }
  const feet = Math.floor(absInches / INCHES_PER_FOOT);
  const inches = absInches % INCHES_PER_FOOT;
  if (feet === 0) {
    return `${sign}${inches.toFixed(0)}"`;
  }
  return `${sign}${feet}' ${inches.toFixed(0)}"`;
}

export function parseLengthToInches(value: string, units: DisplayUnits, fallback: number): number {
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return fallback;
  }
  const signMatch = trimmed.match(/^([+-])/);
  const sign = signMatch?.[1] === "-" ? -1 : 1;
  const unsignedValue = signMatch ? trimmed.slice(1).trim() : trimmed;
  if (unsignedValue.length === 0) {
    return fallback;
  }

  const applySign = (inches: number): number => (sign < 0 ? -inches : inches);

  if (units === "metric") {
    const metersMatch = unsignedValue.match(/([0-9]+(?:\.[0-9]+)?)\s*m/);
    if (metersMatch) {
      const meters = parseFloat(metersMatch[1]);
      if (Number.isFinite(meters)) {
        return applySign((meters * 100) / CENTIMETERS_PER_INCH);
      }
    }
    const cmMatch = unsignedValue.match(/([0-9]+(?:\.[0-9]+)?)\s*cm/);
    if (cmMatch) {
      const cm = parseFloat(cmMatch[1]);
      if (Number.isFinite(cm)) {
        return applySign(cm / CENTIMETERS_PER_INCH);
      }
    }
    const num = Number(unsignedValue);
    if (Number.isFinite(num)) {
      return applySign(num / CENTIMETERS_PER_INCH);
    }
    return fallback;
  }

  const normalizedImperial = unsignedValue.replace(/'/g, "ft ").replace(/"/g, " in");
  const imperial = normalizedImperial.match(
    /(?:(\d+(?:\.\d+)?)\s*ft)?\s*(\d+(?:\.\d+)?)?\s*(?:in|"|$)/i
  );
  if (imperial) {
    const feet = imperial[1] ? parseFloat(imperial[1]) : 0;
    const inches = imperial[2] ? parseFloat(imperial[2]) : 0;
    if (Number.isFinite(feet) && Number.isFinite(inches)) {
      return applySign(feet * INCHES_PER_FOOT + inches);
    }
  }
  const num = Number(unsignedValue.replace(/['"]/g, ""));
  if (Number.isFinite(num)) {
    return applySign(num);
  }
  return fallback;
}

export function formatPosition(value: number, units: DisplayUnits, pixelsPerFoot = 40): string {
  if (units === "metric") {
    const meters = (value / pixelsPerFoot) * 0.3048;
    return `${meters.toFixed(2)} m`;
  }
  const feet = value / pixelsPerFoot;
  return `${feet.toFixed(2)} ft`;
}

export function canvasUnitsToInches(units: number): number {
  return (units / GRID_SIZE) * 12;
}

export function inchesToCanvasUnits(inches: number): number {
  return (inches / 12) * GRID_SIZE;
}
