import { db } from '../lib/db.js';
const UPSERT_SESSION_SQL = `
  insert into ops.checkin_sessions (session_id, tenant_id, ts_checkin_success_ms)
  values ($1, $2, $3)
  on conflict (session_id) do update
    set tenant_id = excluded.tenant_id,
        ts_checkin_success_ms = excluded.ts_checkin_success_ms
`;
const METRICS_BASE_URL = process.env.METRICS_API_BASE_URL || 'http://metrics-api:8080';
async function postMetric(path, payload) {
    const url = new URL(path, METRICS_BASE_URL);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal
        });
        if (!res.ok) {
            console.warn('[checkin] metrics sink response', res.status);
        }
    }
    catch (error) {
        console.warn('[checkin] metrics sink failed', error);
    }
    finally {
        clearTimeout(timeout);
    }
}
async function recordCheckinLatency(latencyMs, channel) {
    if (!Number.isFinite(latencyMs) || latencyMs < 0)
        return;
    await postMetric('/observe/checkin', { latencyMs, channel });
}
async function recordIngestAccepted() {
    await postMetric('/observe/ingest', { outcome: 'accepted' });
}
function resolveChannel(rawChannel) {
    if (rawChannel === 'ops' || rawChannel === 'guest')
        return rawChannel;
    return 'kiosk';
}
export async function checkinSuccess(req, res) {
    const body = req.body ?? {};
    const sessionId = body.session_id;
    const tenantId = body.tenant_id;
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
