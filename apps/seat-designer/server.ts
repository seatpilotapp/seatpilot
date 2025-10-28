import express from 'express';
import { POST } from './app/api/billing/webhook/route.ts';

function headersFromExpress(req: express.Request): Headers {
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      headers.append(key, value);
    } else if (Array.isArray(value)) {
      headers.append(key, value.join(','));
    }
  }
  return headers;
}

async function forwardToRoute(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const request = new Request('http://localhost/api/billing/webhook', {
    method: req.method,
    headers: headersFromExpress(req),
    body: req.body as string
  });

  try {
    const response = await POST(request);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    const buffer = Buffer.from(await response.arrayBuffer());
    res.status(response.status).send(buffer);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown_error';
    // eslint-disable-next-line no-console
    console.error('[webhook-dev-server] handler failed', error);
    res.status(500).json({ ok: false, error: message });
  }
}

export async function startWebhookDevServer(): Promise<void> {
  const app = express();
  app.use(
    express.text({
      type: '*/*'
    })
  );

  app.post('/api/billing/webhook', async (req, res) => {
    await forwardToRoute(req, res);
  });

  const port = Number(process.env.PORT ?? 3000);
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`[webhook-dev-server] listening on http://localhost:${port}`);
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  startWebhookDevServer().catch((error) => {
    // eslint-disable-next-line no-console
    console.error('[webhook-dev-server] failed to start', error);
    process.exitCode = 1;
  });
}
