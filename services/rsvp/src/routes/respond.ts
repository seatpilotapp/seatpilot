import type { Request, Response } from 'express';
import { respondSchema } from '../lib/schema.js';
import { validationError } from '../lib/errors.js';
import { verifyPortalToken } from '../lib/tokens.js';
import { withTenant } from '../lib/db.js';

export async function submitResponse(req: Request, res: Response) {
  const parsed = respondSchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    throw validationError(parsed.error.flatten());
  }

  const input = parsed.data;
  const payload = verifyPortalToken(input.eventId, input.token);
  const preferences = input.preferences ?? {};
  const notes = input.notes ?? null;

  const result = await withTenant(payload.tid, async (conn) => {
    const exists = await conn.oneOrNone(
      `
        select 1
          from guests
         where id = $1
           and event_id = $2
      `,
      [payload.gid, payload.eid]
    );

    if (!exists) {
      return null;
    }

    await conn.none(
      `
        insert into rsvps (event_id, guest_id, status, party_size, preferences, responded_at, source, notes)
        values ($1, $2, $3, $4, $5::jsonb, timezone('utc', now()), 'portal', $6)
        on conflict (event_id, guest_id) do update
          set status       = excluded.status,
              party_size   = excluded.party_size,
              preferences  = excluded.preferences,
              responded_at = excluded.responded_at,
              source       = excluded.source,
              notes        = excluded.notes
      `,
      [payload.eid, payload.gid, input.status, input.partySize, JSON.stringify(preferences), notes]
    );

    await conn.none(
      `
        update guests
           set status = $3,
               last_rsvp_at = timezone('utc', now())
         where id = $1
           and event_id = $2
      `,
      [payload.gid, payload.eid, guestStatusFor(input.status)]
    );

    return {
      status: input.status,
      party_size: input.partySize,
      preferences,
      notes
    };
  });

  if (!result) {
    return res.status(404).json({ ok: false, error: 'invitation_not_found' });
  }

  return res.status(200).json({ ok: true, result });
}

function guestStatusFor(status: 'yes' | 'no' | 'maybe' | 'waitlist') {
  switch (status) {
    case 'yes':
      return 'CONFIRMED';
    case 'no':
      return 'DECLINED';
    default:
      return 'WAITING';
  }
}
