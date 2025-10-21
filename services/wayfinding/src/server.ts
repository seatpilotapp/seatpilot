import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { arriveTable } from './routes/arrive-table.js';

const app = express();

app.use(express.json({ limit: '32kb' }));

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('ok');
});

app.post('/api/wayfinding/arrive-table', (req: Request, res: Response, next: NextFunction) => {
  void arriveTable(req, res).catch(next);
});

const port = Number(process.env.PORT || 3200);
const server = app.listen(port, () => {
  console.log(`[wayfinding] listening on ${port}`);
});

server.on('error', (error) => {
  console.error('[wayfinding] server error', error);
});

app.use((error: unknown, _req: Request, res: Response, next: NextFunction) => {
  console.error('[wayfinding] request failed', error);
  if (res.headersSent) {
    return next(error);
  }
  res.status(500).json({ ok: false, error: 'server_error' });
});

process.on('unhandledRejection', (reason) => {
  console.error('[wayfinding] unhandled rejection', reason);
});

process.on('uncaughtException', (error) => {
  console.error('[wayfinding] uncaught exception', error);
});
