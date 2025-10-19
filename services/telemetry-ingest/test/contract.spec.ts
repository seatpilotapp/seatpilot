import http from 'node:http';
import { beforeAll, afterAll, beforeEach, describe, it, expect } from 'vitest';
import { ingestHandler, resetMemoryStoreForTests } from '../src/routes/events.js';
import { computeHmac } from '../src/lib/crypto.js';
import { configureAliasOverrides } from '../src/lib/alias.js';
import { resetNonceStoreForTests } from '../src/lib/nonce.js';
import { resetDlqBufferForTests } from '../src/lib/dlq.js';

const KEY = 'TENANT_SECRET';
process.env.HMAC_TENANT_SECRET = KEY;

let server: http.Server;

beforeAll(() => {
  server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/v1/events') {
      let chunks: Buffer[] = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', () => {
        const bodyStr = Buffer.concat(chunks).toString('utf8') || '{}';
        try {
          (req as any).body = JSON.parse(bodyStr);
        } catch {
          (req as any).body = {};
        }
        const response = {
          status: (status: number) => ({
            json(payload: any) {
              res.statusCode = status;
              res.setHeader('content-type', 'application/json');
              res.end(JSON.stringify(payload));
            }
          })
        };
        ingestHandler(req as any, response as any);
      });
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
  server.listen(0);
});

afterAll(() => {
  server.close();
});

beforeEach(() => {
  configureAliasOverrides({
    qr_scan_start: 'checkin.qr_scan_start'
  });
  resetNonceStoreForTests();
  resetDlqBufferForTests();
  resetMemoryStoreForTests();
});

function makeSig(key: string, ts: number, nonce: string, body: any) {
  return computeHmac(key, 'POST', '/v1/events', JSON.stringify(body), ts, nonce);
}

async function post(body: any, headers: Record<string, string>) {
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : 0;
  return new Promise<{ status: number; body: string }>((resolve) => {
    const req = http.request(
      {
        method: 'POST',
        port,
        path: '/v1/events',
        headers: { 'content-type': 'application/json', ...headers }
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          resolve({
            status: res.statusCode || 0,
            body: Buffer.concat(chunks).toString('utf8')
          });
        });
      }
    );
    req.end(JSON.stringify(body));
  });
}

describe('telemetry ingest contract', () => {
  it('normalizes alias qr_scan_start → checkin.qr_scan_start', async () => {
    const ts = Date.now();
    const nonce = 'nonce-1';
    const body = {
      schema_version: '1.1.0',
      event_id: '11111111-1111-4111-8111-111111111111',
      event_name: 'qr_scan_start',
      ts_ms: ts,
      tenant_id: '11111111-1111-4111-8111-111111111110',
      session_id: 's1',
      event_meta: { app_channel: 'kiosk', platform: 'kiosk', app_version: '1.0.0', sdk_version: '1.0.0' },
      payload: {}
    };
    const sig = makeSig(KEY, ts, nonce, body);
    const response = await post(body, {
      'x-ts': String(ts),
      'x-nonce': nonce,
      'x-key': 'tenant_key_id',
      'x-sig': sig
    });
    expect(response.status).toBe(200);
  });

  it('enum inválido → 422', async () => {
    const ts = Date.now();
    const nonce = 'nonce-2';
    const body = {
      schema_version: '1.1.0',
      event_id: '11111111-1111-4111-8111-111111111112',
      event_name: 'wayfinding.arrive_table',
      ts_ms: ts,
      tenant_id: '11111111-1111-4111-8111-111111111110',
      session_id: 's2',
      event_meta: { app_channel: 'kiosk', platform: 'kiosk', app_version: '1.0.0', sdk_version: '1.0.0' },
      payload: { table_id: 'T1', confirm_mode: 'XXX' }
    };
    const sig = makeSig(KEY, ts, nonce, body);
    const response = await post(body, {
      'x-ts': String(ts),
      'x-nonce': nonce,
      'x-key': 'tenant_key_id',
      'x-sig': sig
    });
    expect(response.status).toBe(422);
  });

  it('replay (nonce repetido) → 401', async () => {
    const ts = Date.now();
    const nonce = 'nonce-3';
    const body = {
      schema_version: '1.1.0',
      event_id: '11111111-1111-4111-8111-111111111113',
      event_name: 'qr_scan_start',
      ts_ms: ts,
      tenant_id: '11111111-1111-4111-8111-111111111110',
      session_id: 's3',
      event_meta: { app_channel: 'kiosk', platform: 'kiosk', app_version: '1.0.0', sdk_version: '1.0.0' },
      payload: {}
    };
    const sig = makeSig(KEY, ts, nonce, body);
    const first = await post(body, {
      'x-ts': String(ts),
      'x-nonce': nonce,
      'x-key': 'tenant_key_id',
      'x-sig': sig
    });
    const second = await post(body, {
      'x-ts': String(ts),
      'x-nonce': nonce,
      'x-key': 'tenant_key_id',
      'x-sig': sig
    });
    expect(first.status).toBe(200);
    expect(second.status).toBe(401);
  });
});
