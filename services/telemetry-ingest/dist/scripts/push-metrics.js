import process from 'node:process';
const BASE_URL = process.env.METRICS_API_BASE_URL || 'http://metrics-api:8080';
async function post(path, payload) {
    const url = new URL(path, BASE_URL);
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (!res.ok) {
        throw new Error(`Failed POST ${url} → ${res.status}`);
    }
}
async function main() {
    const tenant = process.env.METRICS_TENANT || 'default';
    const channel = process.env.METRICS_CHANNEL ?? 'kiosk';
    const checkinMs = Number(process.env.CHECKIN_LATENCY_MS ?? 240);
    const doorSeatSec = Number(process.env.DOOR_TO_SEAT_SEC ?? 35);
    const mvLagSec = Number(process.env.MV_LAG_SEC ?? 18);
    const rejectionReason = process.env.REJECTION_REASON ?? 'schema';
    await post('/observe/ingest', { outcome: 'accepted', tenant });
    await post('/observe/ingest', { outcome: 'rejected', reason: rejectionReason, tenant });
    await post('/observe/checkin', { latencyMs: checkinMs, channel, tenant });
    await post('/observe/door-to-seat', { seconds: doorSeatSec, tenant });
    await post('/observe/mv-lag', { view: 'mv_kpi_checkin', lagSeconds: mvLagSec, tenant });
}
main().catch((err) => {
    console.error('[push-metrics] failed:', err);
    process.exitCode = 1;
});
