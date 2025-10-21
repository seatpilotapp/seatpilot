import express from 'express';
import { ingestHandler } from './routes/events.js';
import { billingRouter } from './routes/billing.js';
import metricsRegister, { httpRequestsTotal, httpRequestDurationSeconds } from './lib/metrics.js';

const app = express();

app.use(
  express.json({
    limit: '64kb',
    verify: (req: any, _res, buf) => {
      (req as any).rawBody = buf.toString('utf8');
    }
  })
);

app.get('/health', (_req, res) => {
  res.status(200).send('ok');
});

// Metrics middleware: start timer and observe on finish
app.use((req, res, next) => {
  const start = process.hrtime();
  res.once('finish', () => {
    const [s, ns] = process.hrtime(start);
    const seconds = s + ns / 1e9;
    const method = req.method || 'unknown';
    const path = req.route && req.route.path ? req.route.path : req.path || req.url || 'unknown';
    const status_code = String(res.statusCode || 0);
    try {
      httpRequestsTotal.inc({ method, path, status_code }, 1);
      httpRequestDurationSeconds.observe({ method, path, status_code }, seconds);
    } catch (e) {
      // swallow metrics errors
    }
  });
  next();
});
// Expose metrics for Prometheus
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', metricsRegister.contentType);
    const body = await metricsRegister.metrics();
    res.send(body);
  } catch (err) {
    res.status(500).send('error');
  }
});

app.post('/v1/events', ingestHandler);
app.use('/admin/billing', billingRouter);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`telemetry-ingest listening on ${port}`);
});

server.on('error', (err) => {
  console.error('SERVER ERROR', err);
});

app.use((err: any, req: any, res: any, next: any) => {
  console.error('INGEST ERROR', err);
  if (res.headersSent) {
    next(err);
    return;
  }

  const accept: string = req.headers?.accept ?? '';
  if (accept.includes('text/html')) {
    res
      .status(500)
      .set('Content-Type', 'text/html; charset=utf-8')
      .send(
        '<!doctype html><html><body><h1>Error 500</h1><p>No fue posible cargar el reporte.</p></body></html>'
      );
    return;
  }

  res.status(500).json({ error: 'server_error' });
});

process.on('unhandledRejection', (reason) => {
  console.error('UNHANDLED REJECTION', reason);
});

process.on('uncaughtException', (error) => {
  console.error('UNCAUGHT EXCEPTION', error);
});
