import type {
  ConstraintContext,
  ConstraintEvaluation,
  ExplanationReason
} from '../types.js';

const toReason = (
  rule: string,
  message: string,
  delta = 0,
  severity: 'hard' | 'soft' = 'soft'
): ExplanationReason => ({
  rule,
  message,
  delta,
  severity
});

export const evaluateConstraints = (
  context: ConstraintContext
): ConstraintEvaluation => {
  const hardViolations: ExplanationReason[] = [];
  const softSignals: ExplanationReason[] = [];

  for (const rule of context.constraints.hard ?? []) {
    if (rule === 'pmr_must_near_access') {
      const pmrGuests = context.guests.filter((guest) =>
        (guest.accessibility ?? []).includes('pmr')
      );

      for (const guest of pmrGuests) {
        const assignment = context.assignments.find(
          (item) => item.guestId === guest.id
        );

        if (!assignment) {
          hardViolations.push(toReason(rule, `Guest ${guest.id} flagged for PMR lacks an assignment.`, 0, 'hard'));
          continue;
        }

        const seat = context.seats.find((item) => item.id === assignment.seatId);
        const tags = seat?.attrs ?? [];

        if (!tags.includes('near_access') && !tags.includes('pmr_ready')) {
          hardViolations.push(
            toReason(
              rule,
              `Seat ${assignment.seatId} does not meet PMR requirements for guest ${guest.id}.`,
              0,
              'hard'
            )
          );
        }
      }
    }
  }

  for (const rule of context.constraints.soft ?? []) {
    if (rule === 'group_together') {
      const groups = new Map<string, Set<string>>();
      for (const assignment of context.assignments) {
        const guest = context.guests.find((item) => item.id === assignment.guestId);
        if (!guest?.group) continue;
        if (!groups.has(guest.group)) {
          groups.set(guest.group, new Set());
        }
        groups.get(guest.group)!.add(
          context.seats.find((seat) => seat.id === assignment.seatId)?.table ??
            'unassigned'
        );
      }

      for (const [group, tables] of groups.entries()) {
        if (tables.size > 1) {
          softSignals.push(
            toReason(
              rule,
              `Group ${group} is split across ${tables.size} tables.`,
              -0.05,
              'soft'
            )
          );
        }
      }
    }
  }

  return { hardViolations, softSignals };
};
