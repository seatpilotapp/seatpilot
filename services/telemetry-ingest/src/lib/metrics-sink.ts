type IngestRejectionReason = 'signature' | 'schema' | 'replay' | 'ratelimit' | 'other';

interface FetchRequestInit {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  signal?: AbortSignal;
}

type FetchImplementation = (input: string | URL, init?: FetchRequestInit) => Promise<Response>;

const METRICS_BASE_URL = process.env.METRICS_API_BASE_URL;
let hasLoggedWarning = false;

async function postMetrics(path: string, payload: unknown) {
  if (!METRICS_BASE_URL) return;

  const fetchImpl = (globalThis as unknown as { fetch?: FetchImplementation }).fetch;
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
    const response = await fetchImpl(url.toString(), {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
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
  } catch (error) {
    if (!hasLoggedWarning) {
      hasLoggedWarning = true;
      console.warn('[metrics] failed to post to metrics sink:', error);
    }
  } finally {
    clearTimeout(timeout);
  }
}

export function recordIngestAccepted() {
  void postMetrics('/observe/ingest', { outcome: 'accepted' });
}

export function recordIngestRejected(reason: IngestRejectionReason) {
  void postMetrics('/observe/ingest', { outcome: 'rejected', reason });
}

export function recordCheckinLatency(latencyMs: number, channel: 'kiosk' | 'ops' | 'guest') {
  if (Number.isFinite(latencyMs) && latencyMs >= 0) {
    void postMetrics('/observe/checkin', { latencyMs, channel });
  }
}

export function recordDoorToSeat(seconds: number) {
  if (Number.isFinite(seconds) && seconds >= 0) {
    void postMetrics('/observe/door-to-seat', { seconds });
  }
}

export function recordMvLag(view: string, lagSeconds: number) {
  if (view && Number.isFinite(lagSeconds) && lagSeconds >= 0) {
    void postMetrics('/observe/mv-lag', { view, lagSeconds });
  }
}
