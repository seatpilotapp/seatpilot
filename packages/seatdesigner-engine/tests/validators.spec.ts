import { describe, expect, it } from 'vitest';
import {
  applySeparationFix,
  shouldBlockExport,
  validateAdaNoPlace,
  validateRingClearance
} from '../src/index.js';
import type {
  AdaZone,
  ExportGateOptions,
  PlacementElement,
  RingElement
} from '../src/types.js';

const mm = (value: number) => value;
const center = (x: number, y: number) => ({ x, y });

describe('ring clearance validator', () => {
  const baseRings: RingElement[] = [
    {
      id: 'table-a',
      label: 'Mesa 60"',
      diameterIn: 60,
      center: center(mm(0), mm(0))
    },
    {
      id: 'table-b',
      label: 'Mesa 60" B',
      diameterIn: 60,
      center: center(mm(4000), mm(0))
    }
  ];

  it('detecta distancia insuficiente entre anillos', () => {
    const result = validateRingClearance(baseRings);
    expect(result.violations).toHaveLength(1);
    const violation = result.violations[0];
    expect(violation.code).toBe('ring.clearance');
    expect(violation.ringA).toBe('table-a');
    expect(violation.ringB).toBe('table-b');
    expect(violation.requiredClearanceMm).toBeGreaterThan(
      violation.availableClearanceMm
    );
  });

  it('honra un override personalizado', () => {
    const generous = validateRingClearance(baseRings, {
      clearanceOverrides: { 60: 3 } // clearance más flexible para pruebas
    });
    expect(generous.violations).toHaveLength(0);
  });
});

describe('separation fix', () => {
  it('mueve el elemento móvil para cumplir el gap mínimo', () => {
    const anchor: RingElement = {
      id: 'anchor',
      diameterIn: 72,
      center: center(0, 0)
    };
    const moving: RingElement = {
      id: 'moving',
      diameterIn: 72,
      center: center(1000, 0)
    };

    const result = applySeparationFix(anchor, moving, 800);
    expect(result.delta.x).toBeGreaterThan(0);

    const distance =
      Math.hypot(
        result.target.x - anchor.center.x,
        result.target.y - anchor.center.y
      ) -
      (72 * 25.4) / 2 -
      (72 * 25.4) / 2;
    expect(distance).toBeGreaterThanOrEqual(800);
  });
});

describe('ada validator', () => {
  const elements: PlacementElement[] = [
    {
      id: 'mesa-1',
      bounds: { x: 1000, y: 1000, width: 1200, height: 1200 }
    }
  ];

  const zones: AdaZone[] = [
    {
      id: 'pasillo',
      type: 'ada-aisle',
      bounds: { x: 1500, y: 1000, width: 2500, height: 1200 }
    }
  ];

  it('identifica invasión de zona ADA', () => {
    const result = validateAdaNoPlace(elements, zones);
    expect(result).toHaveLength(1);
    expect(result[0]!.code).toBe('ada.block');
  });
});

describe('export gate', () => {
  it('bloquea cuando hay violaciones y no hay override', () => {
    const options: ExportGateOptions = { hardBlock: false, overrideAccepted: false };
    const gate = shouldBlockExport(
      [
        {
          code: 'ada.block',
          message: 'demo',
          severity: 'block',
          elementId: 'mesa-1',
          zoneId: 'pasillo'
        }
      ],
      options
    );
    expect(gate.blocked).toBe(true);
  });

  it('permite continuar cuando se acepta override', () => {
    const gate = shouldBlockExport(
      [
        {
          code: 'ada.block',
          message: 'demo',
          severity: 'block',
          elementId: 'mesa-1',
          zoneId: 'pasillo'
        }
      ],
      { hardBlock: false, overrideAccepted: true }
    );
    expect(gate.blocked).toBe(false);
  });
});
