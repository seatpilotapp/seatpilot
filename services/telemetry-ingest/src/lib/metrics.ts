import { Registry, Counter, Histogram, Gauge, collectDefaultMetrics } from 'prom-client';
import { getDlqCount } from './store.js';

export const register = new Registry();

// Node default metrics with prefix
collectDefaultMetrics({ register, prefix: 'seatpilot_ingest_' });

export const httpRequestsTotal = new Counter({
  name: 'seatpilot_ingest_http_requests_total',
  help: 'Total number of HTTP requests received',
  labelNames: ['method', 'path', 'status_code'],
  registers: [register]
});

export const httpRequestDurationSeconds = new Histogram({
  name: 'seatpilot_ingest_http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'path', 'status_code'],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
  registers: [register]
});

export const ingestedEventsTotal = new Counter({
  name: 'seatpilot_ingest_events_total',
  help: 'Total number of telemetry events processed',
  labelNames: ['status'],
  registers: [register]
});

export const dlqSize = new Gauge({
  name: 'seatpilot_ingest_dlq_size',
  help: 'Number of events currently in the Dead Letter Queue',
  registers: [register],
  async collect() {
    try {
      const n = await getDlqCount();
      this.set(n);
    } catch (e) {
      // if metrics collection fails, do not throw
    }
  }
});

export default register;
