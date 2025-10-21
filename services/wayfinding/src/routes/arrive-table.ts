import type { Request, Response } from 'express';
import { recordDoorToSeat } from '../../../telemetry-ingest/src/lib/metrics-sink.js';
import { db } from '../lib/db.js';

const FETCH_SESSION_SQL = `
  select ts_checkin_success_ms
    from ops.checkin_sessions
   where session_id = $1
     and ($2::text is null or tenant_id::text = $2::text)
   order by created_at desc
   limit 1
`;

const MAX_DOOR_TO_SEAT_SECONDS = 15 * 60; // 15 minutes

export async function arriveTable(req: Request, res: Response) {
  const body = req.body ?? {};
  const sessionId = body.session_id as string | undefined;
  const tenantId = body.tenant_id as string | undefined;
  if (!sessionId) {
    return res.status(400).json({ ok: false, error: 'session_id_required' });
  }

  const arriveTsMs = Number.isFinite(Number(body.ts_arrive_ms)) ? Number(body.ts_arrive_ms) : Date.now();
  const session = await db.oneOrNone(FETCH_SESSION_SQL, [sessionId, tenantId ?? null]);

  if (!session) {
    return res.status(404).json({ ok: false, error: 'session_not_found' });
  }

  const doorToSeatSeconds = Math.max(0, (arriveTsMs - Number(session.ts_checkin_success_ms)) / 1000);
  if (doorToSeatSeconds <= MAX_DOOR_TO_SEAT_SECONDS) {
    await recordDoorToSeat(doorToSeatSeconds);
  }

  return res.json({ ok: true, door_to_seat_sec: doorToSeatSeconds });
}
