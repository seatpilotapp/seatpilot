import { performance } from 'node:perf_hooks';
import { recordCheckinLatency, recordCheckinStageDuration, recordIngestAccepted } from '../../../telemetry-ingest/src/lib/metrics-sink.js';
import { db, pgpInstance } from '../lib/db.js';
import { getCachedScanTimestamp, rememberScanTimestamp } from '../lib/scan-cache.js';
import { parseCheckinSuccessPayload } from '../lib/validation.js';
const UPSERT_SESSION = new pgpInstance.PreparedStatement({
    name: 'checkin_upsert_session',
    text: `
    insert into ops.checkin_sessions (session_id, tenant_id, ts_checkin_success_ms)
    values ($1, $2, $3)
    on conflict (session_id) do update
      set tenant_id = excluded.tenant_id,
          ts_checkin_success_ms = excluded.ts_checkin_success_ms
  `
});
const FALLBACK_SCAN = new pgpInstance.PreparedStatement({
    name: 'checkin_lookup_scan_start',
    text: `
    select ts_ms
      from telemetry.events_raw
     where tenant_id = $1
       and session_id = $2
       and event_name_canonical = 'checkin.qr_scan_start'
       and to_timestamp(ts_ms / 1000.0) >= now() - interval '10 minutes'
     order by ts_ms desc
     limit 1
  `
});
const MAX_LATENCY_MS = 10 * 60 * 1000; // 10 minutes
function resolveChannel(rawChannel) {
    if (rawChannel === 'ops' || rawChannel === 'guest')
        return rawChannel;
    return 'kiosk';
}
function computeLatency(tsSuccessMs, tsScanMs) {
    if (!Number.isFinite(tsScanMs))
        return undefined;
    const computed = tsSuccessMs - Number(tsScanMs);
    if (computed < 0 || computed > MAX_LATENCY_MS)
        return undefined;
    return computed;
}
export async function checkinSuccess(req, res) {
    const requestStart = performance.now();
    const parseStart = requestStart;
    const payloadResult = parseCheckinSuccessPayload(req.body ?? {});
    const parseEnd = performance.now();
    if (!payloadResult.ok) {
        return res.status(400).json({ ok: false, error: 'invalid_payload', details: payloadResult.errors });
    }
    const payload = payloadResult.value;
    const sessionId = payload.session_id;
    const tenantId = payload.tenant_id;
    const channel = resolveChannel(payload.channel);
    const parseSeconds = (parseEnd - parseStart) / 1000;
    const lookupStart = parseEnd;
    let tsScanStartMs = Number(payload.ts_scan_start_ms);
    let lookupHit = 'miss';
    if (Number.isFinite(tsScanStartMs)) {
        rememberScanTimestamp(sessionId, tsScanStartMs, tenantId);
        lookupHit = 'payload';
    }
    else {
        const cached = getCachedScanTimestamp(sessionId, tenantId);
        if (Number.isFinite(cached)) {
            tsScanStartMs = Number(cached);
            lookupHit = 'cache';
        }
        else if (tenantId) {
            const fallback = await db.oneOrNone(FALLBACK_SCAN, [tenantId, sessionId]);
            if (fallback) {
                tsScanStartMs = Number(fallback.ts_ms);
                rememberScanTimestamp(sessionId, tsScanStartMs, tenantId);
                lookupHit = 'db';
            }
        }
    }
    const lookupEnd = performance.now();
    const tsSuccessMs = Date.now();
    const latencyMs = computeLatency(tsSuccessMs, tsScanStartMs);
    if (typeof latencyMs === 'number') {
        recordCheckinLatency(latencyMs, channel);
    }
    recordIngestAccepted();
    const persistStart = lookupEnd;
    if (tenantId) {
        await db.none(UPSERT_SESSION, [sessionId, tenantId, tsSuccessMs]);
    }
    const persistEnd = performance.now();
    const totalEnd = performance.now();
    const lookupSeconds = (lookupEnd - lookupStart) / 1000;
    const persistSeconds = (persistEnd - persistStart) / 1000;
    const totalSeconds = (totalEnd - requestStart) / 1000;
    recordCheckinStageDuration('parse', parseSeconds, channel);
    recordCheckinStageDuration('lookup', lookupSeconds, channel);
    recordCheckinStageDuration('persist', persistSeconds, channel);
    recordCheckinStageDuration('total', totalSeconds, channel);
    const response = {
        ok: true,
        latency_ms: latencyMs ?? null,
        session_id: sessionId
    };
    if (process.env.NODE_ENV !== 'production') {
        response.lookup_source = lookupHit;
    }
    return res.status(200).json(response);
}
