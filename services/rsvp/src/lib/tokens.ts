import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { HttpError } from './errors.js';

const DEFAULT_SECRET = 'seatpilot-rsvp-dev-secret';
const secret = process.env.RSVP_TOKEN_SECRET || DEFAULT_SECRET;
const ttlSecondsEnv = process.env.RSVP_TOKEN_TTL_SECONDS;
const ttlSeconds = (() => {
  if (!ttlSecondsEnv) return 30 * 24 * 60 * 60; // 30 days
  const parsed = Number.parseInt(ttlSecondsEnv, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 30 * 24 * 60 * 60;
})();

const secretBuffer = Buffer.from(secret, 'utf8');

export interface PortalTokenPayload {
  tid: string; // tenant id
  eid: string; // event id
  gid: string; // guest id
  iat: number;
  exp: number;
  n: string; // nonce
}

function encodePayload(payload: PortalTokenPayload): string {
  return Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
}

function decodePayload(encoded: string): PortalTokenPayload {
  try {
    const json = Buffer.from(encoded, 'base64url').toString('utf8');
    const parsed = JSON.parse(json) as PortalTokenPayload;
    if (
      typeof parsed?.tid !== 'string' ||
      typeof parsed?.eid !== 'string' ||
      typeof parsed?.gid !== 'string' ||
      typeof parsed?.iat !== 'number' ||
      typeof parsed?.exp !== 'number'
    ) {
      throw new Error('invalid structure');
    }
    return parsed;
  } catch (error) {
    throw new HttpError(401, 'invalid_token', 'Unable to decode RSVP token', error);
  }
}

function sign(encodedPayload: string): string {
  return createHmac('sha256', secretBuffer).update(encodedPayload).digest('base64url');
}

export function createPortalToken(tenantId: string, eventId: string, guestId: string) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + ttlSeconds;
  const payload: PortalTokenPayload = {
    tid: tenantId,
    eid: eventId,
    gid: guestId,
    iat,
    exp,
    n: randomBytes(8).toString('base64url')
  };
  const encoded = encodePayload(payload);
  const signature = sign(encoded);
  const token = `${encoded}.${signature}`;
  return { token, expiresAt: exp };
}

export function verifyPortalToken(expectedEventId: string, token: string) {
  if (!token || typeof token !== 'string' || !token.includes('.')) {
    throw new HttpError(401, 'invalid_token', 'Malformed RSVP token');
  }

  const [encoded, receivedSignature] = token.split('.', 2);
  if (!encoded || !receivedSignature) {
    throw new HttpError(401, 'invalid_token', 'Malformed RSVP token');
  }

  const expectedSignature = sign(encoded);
  const expectedBuffer = Buffer.from(expectedSignature, 'base64url');
  const receivedBuffer = Buffer.from(receivedSignature, 'base64url');

  if (expectedBuffer.length !== receivedBuffer.length || !timingSafeEqual(expectedBuffer, receivedBuffer)) {
    throw new HttpError(401, 'invalid_token', 'Invalid RSVP token signature');
  }

  const payload = decodePayload(encoded);
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp < now) {
    throw new HttpError(401, 'token_expired', 'RSVP token expired');
  }
  if (payload.eid !== expectedEventId) {
    throw new HttpError(403, 'event_mismatch', 'Token does not belong to this event');
  }

  return payload;
}
