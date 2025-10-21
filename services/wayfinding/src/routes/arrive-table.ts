import type { Request, Response } from 'express';
import { recordDoorToSeat } from '../../../telemetry-ingest/src/lib/metrics-sink.js';
import { db } from '../lib/db.js';

const FETCH_SESSION_SQL = 'select ts_checkin_success_ms from ops.checkin_sessions where session_id=$1';

export async function arriveTable(req: Request, res: Response) {
  const body = req.body ?? {};
  const sessionId = body.session_id as string | undefined;
  if (!sessionId) {
    return res.status(400).json({ ok: false, error: 'session_id_required' });
  }

  const arriveTsMs = Number.isFinite(Number(body.ts_arrive_ms)) ? Number(body.ts_arrive_ms) : Date.now();
  const session = await db.oneOrNone(FETCH_SESSION_SQL, [sessionId]);

  if (!session) {
    return res.status(404).json({ ok: false, error: 'session_not_found' });
  }

  // TODO: obtener ts_checkin_success_ms real
  const doorToSeatSeconds = Math.max(0, (arriveTsMs - Number(session.ts_checkin_success_ms)) / 1000);
  await recordDoorToSeat(doorToSeatSeconds);

  return res.json({ ok: true, door_to_seat_sec: doorToSeatSeconds });
}
