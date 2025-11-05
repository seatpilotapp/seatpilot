import express, { type NextFunction, type Request, type Response } from 'express';
import { sendInvitations } from './routes/send.js';
import { sendReminders } from './routes/remind.js';
import { getStats } from './routes/stats.js';
import { renderPortal, getPortalData } from './routes/portal.js';
import { renderDashboard } from './routes/dashboard.js';
import { submitResponse } from './routes/respond.js';
import { HttpError } from './lib/errors.js';
import { startOutboxWorker } from './lib/outbox.js';

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '20kb' }));

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('ok');
});

app.post('/api/rsvp/send', (req: Request, res: Response, next: NextFunction) => {
  void sendInvitations(req, res).catch(next);
});

app.post('/api/rsvp/remind', (req: Request, res: Response, next: NextFunction) => {
  void sendReminders(req, res).catch(next);
});

app.get('/api/rsvp/stats', (req: Request, res: Response, next: NextFunction) => {
  void getStats(req, res).catch(next);
});

app.get('/api/rsvp/portal', (req: Request, res: Response, next: NextFunction) => {
  void getPortalData(req, res).catch(next);
});

app.post('/api/rsvp/respond', (req: Request, res: Response, next: NextFunction) => {
  void submitResponse(req, res).catch(next);
});

app.get('/g/:eventId/:token', renderPortal);
app.get('/ops/rsvp', renderDashboard);

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

  console.error('[rsvp] unexpected error', err);
  return res.status(500).json({ ok: false, error: 'internal_error' });
});

const port = Number.parseInt(process.env.PORT ?? '3200', 10);
const server = app.listen(port, () => {
  console.log(`[rsvp] listening on ${port}`);
});

startOutboxWorker();

server.on('error', (error) => {
  console.error('[rsvp] server error', error);
});

process.on('unhandledRejection', (reason) => {
  console.error('[rsvp] unhandled rejection', reason);
});

process.on('uncaughtException', (error) => {
  console.error('[rsvp] uncaught exception', error);
});
