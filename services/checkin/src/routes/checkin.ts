import type { Request, Response } from 'express';
import { recordCheckinLatency, recordIngestAccepted } from '../../telemetry-ingest/src/lib/metrics-sink.js';
import { db } from '../lib/db.js';

const UPSERT_SESSION_SQL = `
  insert into ops.checkin_sessions (session_id, tenant_id, ts_checkin_success_ms)
  values ($1, $2, $3)
  on conflict (session_id) do update
    set tenant_id = excluded.tenant_id,
        ts_checkin_success_ms = excluded.ts_checkin_success_ms
`;

function resolveChannel(rawChannel: unknown): 'kiosk' | 'ops' | 'guest' {
  if (rawChannel === 'ops' || rawChannel === 'guest') return rawChannel;
  return 'kiosk';
}

export async function checkinSuccess(req: Request, res: Response) {
  const body = req.body ?? {};
  const sessionId = body.session_id as string | undefined;
  const tenantId = body.tenant_id as string | undefined;
  const tsScanStartMs = Number(body.ts_scan_start_ms);
  const channel = resolveChannel(body.channel);

  if (!sessionId) {
    return res.status(400).json({ ok: false, error: 'session_id_required' });
  }
  if (!Number.isFinite(tsScanStartMs)) {
    return res.status(400).json({ ok: false, error: 'ts_scan_start_ms_required' });
  }

  const tsSuccessMs = Date.now();
  const latencyMs = Math.max(0, tsSuccessMs - tsScanStartMs);

  await recordCheckinLatency(latencyMs, channel);
  await recordIngestAccepted();

  if (tenantId) {
    await db.none(UPSERT_SESSION_SQL, [sessionId, tenantId, tsSuccessMs]);
  }

  return res.status(200).json({ ok: true, latency_ms: latencyMs, session_id: sessionId });
}
