import { db } from '../lib/db.js';
const FETCH_SESSION_SQL = 'select ts_checkin_success_ms from ops.checkin_sessions where session_id=$1';
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
            console.warn('[wayfinding] metrics sink response', res.status);
        }
    }
    catch (error) {
        console.warn('[wayfinding] metrics sink failed', error);
    }
    finally {
        clearTimeout(timeout);
    }
}
async function recordDoorToSeat(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0)
        return;
    await postMetric('/observe/door-to-seat', { seconds });
}
export async function arriveTable(req, res) {
    const body = req.body ?? {};
    const sessionId = body.session_id;
    if (!sessionId) {
        return res.status(400).json({ ok: false, error: 'session_id_required' });
    }
    const arriveTsMs = Number.isFinite(Number(body.ts_arrive_ms)) ? Number(body.ts_arrive_ms) : Date.now();
    const session = await db.oneOrNone(FETCH_SESSION_SQL, [sessionId]);
    if (!session) {
        return res.status(404).json({ ok: false, error: 'session_not_found' });
    }
    const doorToSeatSeconds = Math.max(0, (arriveTsMs - Number(session.ts_checkin_success_ms)) / 1000);
    await recordDoorToSeat(doorToSeatSeconds);
    return res.json({ ok: true, door_to_seat_sec: doorToSeatSeconds });
}
