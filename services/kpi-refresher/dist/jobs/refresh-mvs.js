import { db } from '../lib/db.js';
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
            console.warn('[kpi-refresher] metrics sink response', res.status);
        }
    }
    catch (error) {
        console.warn('[kpi-refresher] metrics sink failed', error);
    }
    finally {
        clearTimeout(timeout);
    }
}
async function recordMvLag(view, lagSeconds) {
    if (!view || !Number.isFinite(lagSeconds) || lagSeconds < 0)
        return;
    await postMetric('/observe/mv-lag', { view, lagSeconds });
}
async function refreshAndReport(view) {
    const startedAt = Date.now();
    await db.none('select telemetry.refresh_mv($1::regclass, true)', [view]);
    const finishedAt = Date.now();
    const row = await db.one('select extract(epoch from (now() - refreshed_at)) as lag from telemetry.mv_metadata where view_name=$1', [view]);
    const lagSeconds = Number(row.lag);
    await recordMvLag(view, lagSeconds);
    const refreshDuration = (finishedAt - startedAt) / 1000;
    console.log(`[refresh-mvs] view=${view} lag=${lagSeconds.toFixed(2)}s duration=${refreshDuration.toFixed(2)}s`);
}
export async function runRefresh() {
    await refreshAndReport('mv_kpi_checkin');
    await refreshAndReport('mv_kpi_door2seat');
}
if (import.meta.url === `file://${process.argv[1]}`) {
    runRefresh()
        .then(() => process.exit(0))
        .catch((error) => {
        console.error('[refresh-mvs] failed', error);
        process.exit(1);
    });
}
