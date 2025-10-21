import { Router } from 'express';
import { z } from 'zod';

import { seatingEngineFlags } from '../flags.js';
import { assign as runAssign } from '../lib/assign.js';
import { observeAssign } from '../lib/metrics.js';
import type {
  AssignRequest,
  AssignResponse
} from '../types.js';

const guestSchema = z.object({
  id: z.string(),
  group: z.string().optional(),
  accessibility: z.array(z.string()).optional(),
  vip: z.boolean().optional(),
  confirmed: z.boolean().optional()
});

const seatSchema = z.object({
  id: z.string(),
  table: z.string().optional(),
  attrs: z.array(z.string()).optional()
});

const lockSchema = z.object({
  guestId: z.string(),
  seatId: z.string()
});

const constraintsSchema = z.object({
  hard: z.array(z.string()).optional(),
  soft: z.array(z.string()).optional()
});

const assignSchema = z.object({
  guests: z.array(guestSchema).nonempty(),
  seats: z.array(seatSchema).nonempty(),
  locks: z.array(lockSchema).optional(),
  constraints: constraintsSchema.optional()
});

const router = Router();

const normalizeBoolean = (value: unknown): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return ['true', '1', 'yes', 'on'].includes(value.toLowerCase());
  }
  return false;
};

router.post('/assign', (request, response) => {
  if (!seatingEngineFlags.assignApiEnabled) {
    return response.status(503).json({ error: 'Assign API temporarily disabled.' });
  }

  const version = request.query.v ?? '1';
  if (version !== '1') {
    return response.status(400).json({ error: 'Unsupported assign API version.' });
  }

  const parsed = assignSchema.safeParse(request.body);
  if (!parsed.success) {
    return response.status(400).json({ error: parsed.error.flatten() });
  }

  const payload: AssignRequest = parsed.data;
  const startedAt = performance.now();
  const explain = normalizeBoolean(request.query.explain);
  const outcome = runAssign(payload, { explain });
  const durationMs = performance.now() - startedAt;

  if (outcome.hardViolations.length > 0) {
    return response.status(412).json({
      error: 'Hard constraint violations found.',
      violations: outcome.hardViolations
    });
  }

  const body: AssignResponse = {
    assigned: outcome.assigned,
    unassigned: outcome.unassigned,
    score: outcome.score
  };

  if (outcome.explain) {
    body.explain = outcome.explain;
  }

  if (outcome.violations) {
    body.violations = outcome.violations;
  }

  const confirmedCount = payload.guests.filter((guest) => guest.confirmed !== false).length;
  const feasibleRatio =
    confirmedCount > 0 ? outcome.assigned.length / confirmedCount : 1;

  void observeAssign({
    tenant: (request.headers['x-tenant'] as string | undefined) ?? 'demo',
    channel: 'engine',
    duration_ms: durationMs,
    score: outcome.score,
    feasible_ratio: feasibleRatio,
    violations_hard: outcome.hardViolations.length,
    violations_soft: (outcome.violations ?? []).filter((v) => v.severity === 'soft').length
  });

  return response.json(body);
});

export const assignRouter = router;
