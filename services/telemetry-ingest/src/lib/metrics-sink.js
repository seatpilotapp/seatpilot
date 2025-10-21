const METRICS_BASE_URL = process.env.METRICS_API_BASE_URL;
const METRICS_API_KEY = process.env.METRICS_API_KEY;
let hasLoggedWarning = false;
async function postMetrics(path, payload) {
    if (!METRICS_BASE_URL)
        return;
    const fetchImpl = globalThis.fetch;
    if (typeof fetchImpl !== 'function') {
        if (!hasLoggedWarning) {
            console.warn('[metrics] fetch API not available; skipping metrics sink calls');
            hasLoggedWarning = true;
        }
        return;
    }
    const url = new URL(path, METRICS_BASE_URL);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const send = async () => {
        const url = new URL(path, METRICS_BASE_URL);
        const headers = { 'content-type': 'application/json' };
        if (METRICS_API_KEY) {
            headers['x-metrics-key'] = METRICS_API_KEY;
        }
        const response = await fetchImpl(url.toString(), {
            method: 'POST',
            headers,
            body: JSON.stringify(payload),
            signal: controller.signal
        });
        return response;
    };
    try {
        const res = await send();
        if (!res.ok && !hasLoggedWarning) {
            hasLoggedWarning = true;
            console.warn('[metrics] sink responded with', res.status);
        }
    }
    catch (error) {
        if (!hasLoggedWarning) {
            hasLoggedWarning = true;
            console.warn('[metrics] failed to post to metrics sink:', error);
        }
    }
    finally {
        clearTimeout(timeout);
    }
}
export function recordIngestAccepted() {
    void postMetrics('/observe/ingest', { outcome: 'accepted' });
}
export function recordIngestRejected(reason) {
    void postMetrics('/observe/ingest', { outcome: 'rejected', reason });
}
export function recordCheckinLatency(latencyMs, channel) {
    if (Number.isFinite(latencyMs) && latencyMs >= 0) {
        void postMetrics('/observe/checkin', { latencyMs, channel });
    }
}
export function recordCheckinStageDuration(stage, seconds, channel) {
    if (!Number.isFinite(seconds) || seconds < 0)
        return;
    void postMetrics('/observe/checkin-stage', { stage, seconds, channel });
}
export function recordDoorToSeat(seconds) {
    if (Number.isFinite(seconds) && seconds >= 0) {
        void postMetrics('/observe/door-to-seat', { seconds });
    }
}
export function recordMvLag(view, lagSeconds) {
    if (view && Number.isFinite(lagSeconds) && lagSeconds >= 0) {
        return postMetrics('/observe/mv-lag', { view, lagSeconds });
    }
    return Promise.resolve();
}
