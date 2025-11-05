import 'dotenv/config';
import express, { type NextFunction, type Request, type Response } from 'express';
import {
  createPlan,
  createSnapshot,
  getPlan,
  listPlans,
  listSnapshots,
  publishPlan,
  updatePlan
} from './routes/plans.js';
import { listLibraryPlans } from './routes/library.js';
import { createVenue, getVenue, listVenues, updateVenue } from './routes/venues.js';
import { HttpError } from './lib/errors.js';

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));

const allowedOrigin = process.env.CORS_ORIGIN ?? 'http://localhost:4274';
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowedOrigin === '*' ? '*' : allowedOrigin);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-seatpilot-tenant, x-seatpilot-user'
  );
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }
  next();
});

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('ok');
});

app.get('/api/venues', (req, res, next) => {
  void listVenues(req, res).catch(next);
});

app.post('/api/venues', (req, res, next) => {
  void createVenue(req, res).catch(next);
});

app.get('/api/venues/:venueId', (req, res, next) => {
  void getVenue(req, res).catch(next);
});

app.patch('/api/venues/:venueId', (req, res, next) => {
  void updateVenue(req, res).catch(next);
});

app.get('/api/venue-plans', (req, res, next) => {
  void listLibraryPlans(req, res).catch(next);
});

app.get('/api/venues/:venueId/plans', (req, res, next) => {
  void listPlans(req, res).catch(next);
});

app.post('/api/venues/:venueId/plans', (req, res, next) => {
  void createPlan(req, res).catch(next);
});

app.get('/api/plans/:planId', (req, res, next) => {
  void getPlan(req, res).catch(next);
});

app.put('/api/plans/:planId', (req, res, next) => {
  void updatePlan(req, res).catch(next);
});

app.post('/api/plans/:planId/publish', (req, res, next) => {
  void publishPlan(req, res).catch(next);
});

app.get('/api/plans/:planId/snapshots', (req, res, next) => {
  void listSnapshots(req, res).catch(next);
});

app.post('/api/plans/:planId/snapshots', (req, res, next) => {
  void createSnapshot(req, res).catch(next);
});

app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err instanceof HttpError) {
    const body: Record<string, unknown> = {
      ok: false,
      error: err.code
    };
    if (err.details) {
      body.details = err.details;
    }
    return res.status(err.status).json(body);
  }

  console.error('[venue-base] unexpected error', err);
  return res.status(500).json({ ok: false, error: 'internal_error' });
});

const port = Number.parseInt(process.env.PORT ?? '4300', 10);
const server = app.listen(port, () => {
  console.log(`[venue-base] listening on ${port}`);
});

server.on('error', (error) => {
  console.error('[venue-base] server error', error);
});

process.on('unhandledRejection', (reason) => {
  console.error('[venue-base] unhandled rejection', reason);
});

process.on('uncaughtException', (error) => {
  console.error('[venue-base] uncaught exception', error);
});
