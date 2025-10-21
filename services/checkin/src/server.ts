import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { checkinSuccess } from './routes/checkin.js';

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '10kb' }));

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('ok');
});

app.post('/api/checkin/success', (req: Request, res: Response, next: NextFunction) => {
  void checkinSuccess(req, res).catch(next);
});

const port = Number(process.env.PORT || 3100);
const server = app.listen(port, () => {
  console.log(`[checkin] listening on ${port}`);
});

server.on('error', (error) => {
  console.error('[checkin] server error', error);
});

app.use((error: unknown, _req: Request, res: Response, next: NextFunction) => {
  console.error('[checkin] request failed', error);
  if (res.headersSent) {
    return next(error);
  }
  res.status(500).json({ ok: false, error: 'server_error' });
});

process.on('unhandledRejection', (reason) => {
  console.error('[checkin] unhandled rejection', reason);
});

process.on('uncaughtException', (error) => {
  console.error('[checkin] uncaught exception', error);
});
