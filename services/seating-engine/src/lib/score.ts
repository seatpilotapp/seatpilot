import type { Assignment, Guest } from '../types.js';

interface ScoreInput {
  guests: Guest[];
  assignments: Assignment[];
  penalties: number[];
}

export const scoreAssignment = ({
  guests,
  assignments,
  penalties
}: ScoreInput): number => {
  if (guests.length === 0) {
    return 1;
  }

  const baseScore = assignments.length / guests.length;
  const penalty = penalties.reduce((acc, value) => acc + value, 0);
  const adjusted = Math.max(0, Math.min(1, baseScore + penalty));

  return Math.round(adjusted * 100) / 100;
};
