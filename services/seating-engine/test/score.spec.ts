import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import { assign } from '../src/lib/assign.js';
import { scoreAssignment } from '../src/lib/score.js';

const loadFixture = <T>(name: string): T =>
  JSON.parse(readFileSync(new URL(`./fixtures/${name}`, import.meta.url), 'utf-8'));

describe('scoreAssignment', () => {
  it('returns 1.0 when there are no guests to seat', () => {
    const result = scoreAssignment({ guests: [], assignments: [], penalties: [] });
    expect(result).toBe(1);
  });

  it('calculates ratio of assignments to guests', () => {
    const result = scoreAssignment({
      guests: [{ id: 'g1' }, { id: 'g2' }] as any,
      assignments: [{ guestId: 'g1', seatId: 's1' }],
      penalties: []
    });
    expect(result).toBe(0.5);
  });

  it('applies penalties but clamps between 0 and 1', () => {
    const result = scoreAssignment({
      guests: [{ id: 'g1' }, { id: 'g2' }] as any,
      assignments: [
        { guestId: 'g1', seatId: 's1' },
        { guestId: 'g2', seatId: 's2' }
      ],
      penalties: [-0.2, -0.3]
    });
    expect(result).toBe(0.5);
  });
});

const acceptance = (result: ReturnType<typeof assign>, input: any) => {
  const assigned = new Set(result.assigned.map((item) => item.guestId));
  const confirmed = input.guests.filter((guest: any) => guest.confirmed !== false).length;
  const autoAssignRate = confirmed > 0 ? assigned.size / confirmed : 1;
  const violations = result.violations ?? [];
  return { autoAssignRate, violations };
};

describe('assign acceptance', () => {
  it('meets demo acceptance criteria', () => {
    const demo = loadFixture<any>('venue_demo.json');
    const outcome = assign(demo, { explain: true });
    const summary = acceptance(outcome, demo);
    expect(summary.autoAssignRate).toBeGreaterThanOrEqual(0.95);
    expect(summary.violations.filter((item: any) => item.severity === 'hard')).toHaveLength(0);
  });

  it('meets stress acceptance criteria', () => {
    const stress = loadFixture<any>('venue_stress.json');
    const outcome = assign(stress, { explain: true });
    const summary = acceptance(outcome, stress);
    expect(summary.autoAssignRate).toBeGreaterThanOrEqual(0.9);
    expect(summary.violations.filter((item: any) => item.severity === 'hard')).toHaveLength(0);
  });
});
