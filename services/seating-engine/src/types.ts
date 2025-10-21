export interface Guest {
  id: string;
  group?: string;
  accessibility?: string[];
  vip?: boolean;
  confirmed?: boolean;
}

export interface Seat {
  id: string;
  table?: string;
  attrs?: string[];
}

export interface Lock {
  guestId: string;
  seatId: string;
}

export interface ConstraintSet {
  hard?: string[];
  soft?: string[];
}

export interface AssignRequest {
  guests: Guest[];
  seats: Seat[];
  locks?: Lock[];
  constraints?: ConstraintSet;
}

export interface Assignment {
  guestId: string;
  seatId: string;
}

export interface ExplanationReason {
  rule: string;
  delta: number;
  message?: string;
  severity?: 'hard' | 'soft';
}

export interface AssignmentExplanation {
  guestId: string;
  seatId: string;
  reasons: ExplanationReason[];
}

export interface AssignResponse {
  assigned: Assignment[];
  unassigned: string[];
  score: number;
  explain?: AssignmentExplanation[];
  violations?: ExplanationReason[];
}

export interface ConstraintContext {
  guests: Guest[];
  seats: Seat[];
  locks: Lock[];
  assignments: Assignment[];
  constraints: ConstraintSet;
}

export interface ConstraintEvaluation {
  hardViolations: ExplanationReason[];
  softSignals: ExplanationReason[];
}

export interface AssignResult extends AssignResponse {
  hardViolations: ExplanationReason[];
}
