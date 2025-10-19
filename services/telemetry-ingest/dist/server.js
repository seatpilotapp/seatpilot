import express from 'express';
import { ingestHandler } from './routes/events.js';
const app = express();
app.use(express.json({ limit: '64kb' }));
app.post('/v1/events', ingestHandler);
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`telemetry-ingest listening on ${port}`);
});
