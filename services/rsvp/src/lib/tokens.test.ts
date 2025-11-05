import { describe, expect, it } from 'vitest';
import { createPortalToken, verifyPortalToken } from './tokens.js';

describe('portal tokens', () => {
  it('creates and verifies a token', () => {
    process.env.RSVP_TOKEN_SECRET = 'test-secret';
    const { token } = createPortalToken('tenant-1', 'event-1', 'guest-1');
    const payload = verifyPortalToken('event-1', token);
    expect(payload.tid).toBe('tenant-1');
    expect(payload.eid).toBe('event-1');
    expect(payload.gid).toBe('guest-1');
  });

  it('rejects wrong event', () => {
    process.env.RSVP_TOKEN_SECRET = 'test-secret';
    const { token } = createPortalToken('tenant-1', 'event-1', 'guest-1');
    expect(() => verifyPortalToken('event-2', token)).toThrowError();
  });
});
