import AjvModule from 'ajv';
import addFormatsModule from 'ajv-formats';
import {
  APP_CHANNEL,
  PLATFORM,
  CONFIRM_MODE,
  STATUS_EXIT,
  REASON_REASSIGN,
  assertEnum
} from '../lib/domain-enums.js';
import { computeHmac, timingSafeEqualHex } from '../lib/crypto.js';
import { isUniqueNonce } from '../lib/nonce.js';
import { canonicalEventNameDB } from '../lib/alias.js';
import { rejectToDLQ } from '../lib/dlq.js';
import { ingestedEventsTotal } from '../lib/metrics.js';
import { recordIngestAccepted, recordIngestRejected } from '../lib/metrics-sink.js';
import { loadSchema } from '../lib/registry.js';
import { upsertEventsRaw, trackAliasUse, resetStoreForTests } from '../lib/store.js';

const AjvCtor =
  ((AjvModule as unknown as { default?: typeof import('ajv').default }).default ??
    (AjvModule as unknown as typeof import('ajv').default)) as typeof import('ajv').default;
const addFormats = ((addFormatsModule as unknown as { default?: (ajv: unknown) => void }).default ??
  addFormatsModule) as (ajv: unknown) => void;

const ajv = new AjvCtor({ allErrors: true, removeAdditional: true, strict: false });
addFormats(ajv);

const TS_SKEW_MS = 300_000;
const PAYLOAD_LIMIT = 16 * 1024;

function getKeyForTenant(keyId: string): string {
  const key = process.env.HMAC_TENANT_SECRET || '';
  if (!key) {
    throw new Error('HMAC key missing');
  }
  return key;
}

export async function ingestHandler(req: any, res: any) {
  try {
    const method = req.method;
    const url = req.url;

    const bodyRaw =
      (req as any).rawBody ??
      (typeof req.body === 'string' ? req.body : JSON.stringify(req.body));
    if (Buffer.byteLength(bodyRaw) > PAYLOAD_LIMIT) {
      ingestedEventsTotal.inc({ status: 'payload_too_large' });
      recordIngestRejected('other');
      return res.status(413).json({ error: 'payload_too_large' });
    }

    const ts = Number(req.headers['x-ts'] || 0);
    const nonce = String(req.headers['x-nonce'] || '');
    if (!Number.isFinite(ts) || Math.abs(Date.now() - ts) > TS_SKEW_MS) {
      ingestedEventsTotal.inc({ status: 'timestamp_skew' });
      recordIngestRejected('other');
      return res.status(401).json({ error: 'timestamp_skew' });
    }
    if (!nonce || !(await isUniqueNonce(nonce))) {
      ingestedEventsTotal.inc({ status: 'replay_detected' });
      recordIngestRejected('replay');
      return res.status(401).json({ error: 'replay_detected' });
    }

    const sigHeader = String(req.headers['x-sig'] || '');
    const keyId = String(req.headers['x-key'] || '');
    const key = getKeyForTenant(keyId);
    const expectedSig = computeHmac(key, method, url, bodyRaw, ts, nonce);
    if (!timingSafeEqualHex(sigHeader, expectedSig)) {
      await rejectToDLQ('signature_invalid', req.body, req.headers as any);
      ingestedEventsTotal.inc({ status: 'signature_invalid' });
      recordIngestRejected('signature');
      return res.status(401).json({ error: 'signature_invalid' });
    }

    type TelemetryEnvelope = {
      schema_version: string;
      event_id: string;
      event_name: string;
      ts_ms: number;
      tenant_id: string;
      session_id: string;
      guest_id_hash?: string | null;
      event_meta: Record<string, any>;
      payload?: Record<string, any>;
      [key: string]: unknown;
    };

    const body = JSON.parse(bodyRaw) as TelemetryEnvelope;
    const originalEventName = String(body.event_name || '');
    body.event_name = await canonicalEventNameDB(originalEventName);

    const required = ['schema_version', 'event_id', 'tenant_id', 'session_id', 'ts_ms', 'event_meta'];
    for (const k of required) {
      if (body[k] === undefined) {
        await rejectToDLQ('envelope_missing', body, req.headers as any);
        ingestedEventsTotal.inc({ status: 'envelope_missing' });
        recordIngestRejected('schema');
        return res.status(422).json({ error: 'envelope_missing', field: k });
      }
    }

    const handleInvalidEnum = async (error: any) => {
      const field = error?.field ?? 'unknown';
      await rejectToDLQ('invalid_enum', { error: error?.message, field, body }, req.headers as any);
      return res.status(422).json({ error: 'invalid_enum', field });
    };

    try {
      assertEnum(body.event_meta.app_channel, APP_CHANNEL, 'event_meta.app_channel');
      assertEnum(body.event_meta.platform, PLATFORM, 'event_meta.platform');
    } catch (error) {
      ingestedEventsTotal.inc({ status: 'invalid_enum' });
      recordIngestRejected('schema');
      return await handleInvalidEnum(error);
    }

    try {
      if (body.event_name === 'wayfinding.arrive_table' && body.payload?.confirm_mode) {
        assertEnum(body.payload.confirm_mode, CONFIRM_MODE, 'payload.confirm_mode');
      }
      if (body.event_name === 'safety.exit_status_update' && body.payload?.status) {
        assertEnum(body.payload.status, STATUS_EXIT, 'payload.status');
      }
      if (body.event_name === 'seating.reassign' && body.payload?.reason_code) {
        assertEnum(body.payload.reason_code, REASON_REASSIGN, 'payload.reason_code');
      }
    } catch (error) {
      ingestedEventsTotal.inc({ status: 'invalid_enum' });
      recordIngestRejected('schema');
      return await handleInvalidEnum(error);
    }

    const schema = await loadSchema(body.event_name);
    const validate = ajv.compile(schema);
    if (!validate(body)) {
      await rejectToDLQ('schema_mismatch', { errors: validate.errors, body }, req.headers as any);
      ingestedEventsTotal.inc({ status: 'schema_mismatch' });
      recordIngestRejected('schema');
      return res.status(422).json({ error: 'schema_mismatch', details: validate.errors });
    }

    if (originalEventName && originalEventName !== body.event_name && body.tenant_id) {
      await trackAliasUse(originalEventName, body.event_name, body.tenant_id);
    }

    await upsertEventsRaw({
      tenant_id: body.tenant_id,
      schema_version: body.schema_version,
      event_id: body.event_id,
      event_name: body.event_name,
      ts_ms: body.ts_ms,
      session_id: body.session_id,
      guest_id_hash: body.guest_id_hash ?? null,
      event_meta: body.event_meta ?? {},
      payload: body.payload ?? {},
      sig_ok: true
    });

    ingestedEventsTotal.inc({ status: 'accepted' });
    recordIngestAccepted();
    return res.status(200).json({ status: 'ok' });
  } catch (e: any) {
    console.error('INGEST HANDLER ERROR', e);
    await rejectToDLQ('server_error', { err: e?.message }, req.headers as any);
    ingestedEventsTotal.inc({ status: 'server_error' });
    recordIngestRejected('other');
    return res.status(500).json({ error: 'server_error' });
  }
}

export function resetMemoryStoreForTests() {
  resetStoreForTests();
}
