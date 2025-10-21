import { evaluateConstraints } from './constraints.js';
import { buildExplanations } from './explain.js';
import { scoreAssignment } from './score.js';
import type {
  AssignRequest,
  AssignResponse,
  AssignResult,
  Assignment,
  ConstraintContext
} from '../types.js';

interface AssignOptions {
  explain?: boolean;
}

export const planAssignments = (payload: AssignRequest): Assignment[] => {
  const assignments: Assignment[] = [];
  const seatById = new Map(payload.seats.map((seat) => [seat.id, seat]));
  const lockedGuests = new Set<string>();
  const usedSeats = new Set<string>();

  for (const lock of payload.locks ?? []) {
    if (!seatById.has(lock.seatId)) continue;
    if (lockedGuests.has(lock.guestId)) continue;
    if (usedSeats.has(lock.seatId)) continue;
    assignments.push({ guestId: lock.guestId, seatId: lock.seatId });
    lockedGuests.add(lock.guestId);
    usedSeats.add(lock.seatId);
  }

  const availableSeats = payload.seats.filter((seat) => !usedSeats.has(seat.id));

  for (const guest of payload.guests) {
    if (lockedGuests.has(guest.id)) continue;
    const seat = availableSeats.shift();
    if (!seat) continue;
    assignments.push({ guestId: guest.id, seatId: seat.id });
    usedSeats.add(seat.id);
  }

  return assignments;
};

export const assign = (payload: AssignRequest, options: AssignOptions = {}): AssignResult => {
  const assignments = planAssignments(payload);

  const context: ConstraintContext = {
    guests: payload.guests,
    seats: payload.seats,
    locks: payload.locks ?? [],
    constraints: payload.constraints ?? {},
    assignments
  };

  const { hardViolations, softSignals } = evaluateConstraints(context);
  const penalties = softSignals.map((item) => item.delta ?? 0);
  const score = scoreAssignment({
    guests: payload.guests,
    assignments,
    penalties
  });

  const assignedGuests = new Set(assignments.map((item) => item.guestId));
  const unassigned = payload.guests
    .map((guest) => guest.id)
    .filter((id) => !assignedGuests.has(id));

  const violations = [...hardViolations, ...softSignals];

  const response: AssignResponse = {
    assigned: assignments,
    unassigned,
    score,
    violations: violations.length > 0 ? violations : undefined
  };

  if (options.explain) {
    response.explain = buildExplanations({
      guests: payload.guests,
      seats: payload.seats,
      assignments
    });
  }

  return {
    ...response,
    hardViolations
  };
};
