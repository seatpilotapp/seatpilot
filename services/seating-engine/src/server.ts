import express from 'express';

import { assignRouter } from './routes/assign.js';

export const createServer = () => {
  const app = express();

  app.use(express.json({ limit: '1mb' }));

  app.get('/health', (_request, response) => {
    response.json({ status: 'ok' });
  });

  app.use(assignRouter);

  return app;
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT ?? 4008);
  const app = createServer();
  app.listen(port, () => {
    console.log(`Seating engine listening on ${port}`);
  });
}
