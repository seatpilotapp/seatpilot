import type { Request, Response } from 'express';
import { recordDoorToSeat } from '../../telemetry-ingest/src/lib/metrics-sink.js';
import { db } from '../lib/db.js';

// TODO: Replace stubbed DB access with production-ready implementation.
export async function arriveTable(req: Request, res: Response) {
  const { session_id: sessionId } = req.body ?? {};
  if (!sessionId) {
    return res.status(400).json({ ok: false, error: 'session_id_required' });
  }

  const arriveTsMs = Date.now();
  const session = await db.oneOrNone(
    'select ts_checkin_success_ms from ops.checkin_sessions where session_id=$1',
    [sessionId]
  );

  if (!session) {
    return res.status(404).json({ ok: false, error: 'session_not_found' });
  }

  const doorToSeatSeconds = Math.max(
    0,
    (arriveTsMs - Number(session.ts_checkin_success_ms)) / 1000
  );

  await recordDoorToSeat(doorToSeatSeconds);

  return res.json({ ok: true, door_to_seat_sec: doorToSeatSeconds });
}
