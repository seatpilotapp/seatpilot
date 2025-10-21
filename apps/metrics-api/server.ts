import express from 'express';
import type { Request, Response } from 'express';
import promClient from 'prom-client';

const app = express();
const port = Number(process.env.PORT || 8080);

const SERVICE = process.env.SERVICE_NAME || 'seatpilot-metrics';
const TENANT = process.env.METRICS_TENANT || 'default';
const INGEST_KEYS = [process.env.METRICS_INGEST_KEY, process.env.NEXT_METRICS_INGEST_KEY].filter(
  (value): value is string => Boolean(value && value.trim())
);

app.use(express.json());

promClient.register.setDefaultLabels({ service: SERVICE });
promClient.collectDefaultMetrics({ prefix: 'seatpilot_process_' });

const checkinLatency = new promClient.Summary({
  name: 'seatpilot_checkin_latency_ms',
  help: 'Check-in latency in milliseconds (UX/TX)',
  labelNames: ['tenant', 'channel'],
  percentiles: [0.5, 0.95, 0.99],
  maxAgeSeconds: 300,
  ageBuckets: 5
});

const checkinLatencyHistogram = new promClient.Histogram({
  name: 'seatpilot_checkin_latency_ms_histogram',
  help: 'Check-in latency histogram in milliseconds',
  labelNames: ['tenant', 'channel'],
  buckets: [100, 200, 300, 400, 500, 600, 800, 1000, 1500, 2000]
});

const checkinStageHistogram = new promClient.Histogram({
  name: 'seatpilot_checkin_stage_seconds',
  help: 'Check-in stage duration in seconds',
  labelNames: ['tenant', 'stage', 'channel'],
  buckets: [0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2]
});

const d2sHistogram = new promClient.Histogram({
  name: 'seatpilot_door_to_seat_seconds',
  help: 'Door-to-seat time in seconds',
  labelNames: ['tenant'],
  buckets: [5, 10, 15, 20, 30, 45, 60, 90, 120]
});

const ingestAccepted = new promClient.Counter({
  name: 'seatpilot_ingest_accepted_total',
  help: 'Accepted ingested events',
  labelNames: ['tenant']
});

const ingestRejected = new promClient.Counter({
  name: 'seatpilot_ingest_rejected_total',
  help: 'Rejected ingest events by reason',
  labelNames: ['tenant', 'reason']
});

const mvLag = new promClient.Gauge({
  name: 'seatpilot_mv_lag_seconds',
  help: 'Materialized view staleness (seconds)',
  labelNames: ['tenant', 'view']
});

const assignDurationHistogram = new promClient.Histogram({
  name: 'seatpilot_assign_duration_ms_histogram',
  help: 'Seating-engine assignment duration in milliseconds',
  labelNames: ['tenant', 'channel'],
  buckets: [25, 50, 75, 100, 150, 200, 300, 500, 800, 1200, 2000]
});

const assignScoreGauge = new promClient.Gauge({
  name: 'seatpilot_assign_score',
  help: 'Assignment score (0-1)',
  labelNames: ['tenant', 'channel']
});

const assignFeasibleRatioGauge = new promClient.Gauge({
  name: 'seatpilot_assign_feasible_ratio',
  help: 'Ratio of confirmed guests auto-assigned',
  labelNames: ['tenant', 'channel']
});

const assignViolationsCounter = new promClient.Counter({
  name: 'seatpilot_assign_violations_total',
  help: 'Assignment constraint violations by severity',
  labelNames: ['tenant', 'channel', 'severity']
});

export function observeCheckinLatency(
  ms: number,
  channel: 'kiosk' | 'ops' | 'guest' = 'kiosk'
) {
  checkinLatency.labels(TENANT, channel).observe(ms);
  checkinLatencyHistogram.labels(TENANT, channel).observe(ms);
}

export function observeCheckinStage(
  stage: 'parse' | 'lookup' | 'persist' | 'total',
  seconds: number,
  channel: 'kiosk' | 'ops' | 'guest' = 'kiosk'
) {
  checkinStageHistogram.labels(TENANT, stage, channel).observe(seconds);
}

export function observeDoorToSeat(seconds: number) {
  d2sHistogram.labels(TENANT).observe(seconds);
}

export function markIngestAccepted() {
  ingestAccepted.labels(TENANT).inc();
}

export function markIngestRejected(
  reason: 'signature' | 'schema' | 'replay' | 'ratelimit' | 'other'
) {
  ingestRejected.labels(TENANT, reason).inc();
}

export function setMvLag(view: string, lagSec: number) {
  mvLag.labels(TENANT, view).set(lagSec);
}

if (INGEST_KEYS.length > 0) {
  app.use('/observe', (req: Request, res: Response, next) => {
    const provided = req.get('x-metrics-key') ?? (req.query.key as string | undefined);
    if (!provided || !INGEST_KEYS.includes(provided)) {
      return res.status(401).json({ ok: false, error: 'unauthorized' });
    }
    return next();
  });
} else {
  console.warn('[metrics-api] METRICS_INGEST_KEY not set; /observe endpoints are unprotected');
}

app.get('/metrics', async (_req: Request, res: Response) => {
  try {
    res.set('Content-Type', promClient.register.contentType);
    res.end(await promClient.register.metrics());
  } catch (err) {
    const error = err as Error;
    res.status(500).send(error.message);
  }
});

app.get('/healthz', (_req: Request, res: Response) => {
  res.status(200).send('ok');
});

app.post('/observe/checkin', (req: Request, res: Response) => {
  const latencyMs = Number(req.body?.latencyMs);
  const channel = (req.body?.channel as 'kiosk' | 'ops' | 'guest' | undefined) ?? 'kiosk';

  if (!Number.isFinite(latencyMs) || latencyMs < 0) {
    return res.status(400).json({ ok: false, error: 'invalid_latency' });
  }
  if (!['kiosk', 'ops', 'guest'].includes(channel)) {
    return res.status(400).json({ ok: false, error: 'invalid_channel' });
  }

  observeCheckinLatency(latencyMs, channel);
  return res.status(202).json({ ok: true });
});

app.post('/observe/checkin-stage', (req: Request, res: Response) => {
  const stage = req.body?.stage as 'parse' | 'lookup' | 'persist' | 'total' | undefined;
  const seconds = Number(req.body?.seconds);
  const channel = (req.body?.channel as 'kiosk' | 'ops' | 'guest' | undefined) ?? 'kiosk';

  if (!stage || !['parse', 'lookup', 'persist', 'total'].includes(stage)) {
    return res.status(400).json({ ok: false, error: 'invalid_stage' });
  }
  if (!Number.isFinite(seconds) || seconds < 0) {
    return res.status(400).json({ ok: false, error: 'invalid_seconds' });
  }
  if (!['kiosk', 'ops', 'guest'].includes(channel)) {
    return res.status(400).json({ ok: false, error: 'invalid_channel' });
  }

  observeCheckinStage(stage, seconds, channel);
  return res.status(202).json({ ok: true });
});

app.post('/observe/door-to-seat', (req: Request, res: Response) => {
  const seconds = Number(req.body?.seconds);
  if (!Number.isFinite(seconds) || seconds < 0) {
    return res.status(400).json({ ok: false, error: 'invalid_seconds' });
  }

  observeDoorToSeat(seconds);
  return res.status(202).json({ ok: true });
});

app.post('/observe/ingest', (req: Request, res: Response) => {
  const outcome = req.body?.outcome as 'accepted' | 'rejected' | undefined;
  if (outcome === 'accepted') {
    markIngestAccepted();
    return res.status(202).json({ ok: true });
  }

  if (outcome === 'rejected') {
    const reason = req.body?.reason as 'signature' | 'schema' | 'replay' | 'ratelimit' | 'other' | undefined;
    if (!reason || !['signature', 'schema', 'replay', 'ratelimit', 'other'].includes(reason)) {
      return res.status(400).json({ ok: false, error: 'invalid_reason' });
    }
    markIngestRejected(reason);
    return res.status(202).json({ ok: true });
  }

  return res.status(400).json({ ok: false, error: 'invalid_outcome' });
});

app.post('/observe/mv-lag', (req: Request, res: Response) => {
  const view = req.body?.view;
  const lagSeconds = Number(req.body?.lagSeconds);
  if (typeof view !== 'string' || !view.trim()) {
    return res.status(400).json({ ok: false, error: 'invalid_view' });
  }
  if (!Number.isFinite(lagSeconds) || lagSeconds < 0) {
    return res.status(400).json({ ok: false, error: 'invalid_lag' });
  }

  setMvLag(view, lagSeconds);
  return res.status(202).json({ ok: true });
});

app.post('/observe/assign', (req: Request, res: Response) => {
  const tenant = typeof req.body?.tenant === 'string' && req.body?.tenant.trim() ? req.body.tenant.trim() : TENANT;
  const channel = typeof req.body?.channel === 'string' && req.body?.channel.trim() ? req.body.channel.trim() : 'engine';
  const durationMs = Number(req.body?.duration_ms ?? req.body?.durationMs);
  const score = Number(req.body?.score);
  const feasibleRatio = Number(req.body?.feasible_ratio ?? req.body?.feasibleRatio);
  const violationsHard = Number(req.body?.violations_hard ?? req.body?.hardViolations ?? 0);
  const violationsSoft = Number(req.body?.violations_soft ?? req.body?.softViolations ?? 0);

  if (!Number.isFinite(durationMs) || durationMs < 0) {
    return res.status(400).json({ ok: false, error: 'invalid_duration' });
  }
  if (!Number.isFinite(score) || score < 0 || score > 1) {
    return res.status(400).json({ ok: false, error: 'invalid_score' });
  }
  if (!Number.isFinite(feasibleRatio) || feasibleRatio < 0) {
    return res.status(400).json({ ok: false, error: 'invalid_feasible_ratio' });
  }
  if (!Number.isFinite(violationsHard) || violationsHard < 0) {
    return res.status(400).json({ ok: false, error: 'invalid_violations_hard' });
  }
  if (!Number.isFinite(violationsSoft) || violationsSoft < 0) {
    return res.status(400).json({ ok: false, error: 'invalid_violations_soft' });
  }

  assignDurationHistogram.labels(tenant, channel).observe(durationMs);
  assignScoreGauge.labels(tenant, channel).set(score);
  assignFeasibleRatioGauge.labels(tenant, channel).set(Math.min(Math.max(feasibleRatio, 0), 1));
  if (violationsHard > 0) {
    assignViolationsCounter.labels(tenant, channel, 'hard').inc(violationsHard);
  }
  if (violationsSoft > 0) {
    assignViolationsCounter.labels(tenant, channel, 'soft').inc(violationsSoft);
  }

  return res.status(202).json({ ok: true });
});

if (process.env.NODE_ENV !== 'production') {
  app.post('/demo/checkin/:ms', (req: Request<{ ms: string }>, res: Response) => {
    const ms = Number(req.params.ms);
    if (!Number.isFinite(ms)) {
      res.status(400).json({ ok: false, error: 'invalid_ms' });
      return;
    }
    observeCheckinLatency(ms);
    res.json({ ok: true, ms });
  });

  app.post('/demo/d2s/:sec', (req: Request<{ sec: string }>, res: Response) => {
    const sec = Number(req.params.sec);
    if (!Number.isFinite(sec)) {
      res.status(400).json({ ok: false, error: 'invalid_sec' });
      return;
    }
    observeDoorToSeat(sec);
    res.json({ ok: true, sec });
  });

  app.post('/demo/reject/:reason', (req: Request<{ reason: string }>, res: Response) => {
    const allowed = new Set(['signature', 'schema', 'replay', 'ratelimit', 'other'] as const);
    const reason = req.params.reason;
    if (!allowed.has(reason as any)) {
      res.status(400).json({ ok: false, error: 'invalid_reason' });
      return;
    }
    markIngestRejected(reason as 'signature' | 'schema' | 'replay' | 'ratelimit' | 'other');
    res.json({ ok: true, reason });
  });

  app.post('/demo/mvlag/:view/:sec', (req: Request<{ view: string; sec: string }>, res: Response) => {
    const { view, sec } = req.params;
    const lag = Number(sec);
    if (!view) {
      res.status(400).json({ ok: false, error: 'invalid_view' });
      return;
    }
    if (!Number.isFinite(lag)) {
      res.status(400).json({ ok: false, error: 'invalid_sec' });
      return;
    }
    setMvLag(view, lag);
    res.json({ ok: true, view, lag });
  });
}

app.listen(port, () => {
  console.log(`[${SERVICE}] metrics on :${port}/metrics tenant=${TENANT}`);
});
