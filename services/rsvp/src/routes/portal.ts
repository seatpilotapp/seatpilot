import type { Request, Response } from 'express';
import { renderPortalPage } from '../templates/portal.js';
import { portalQuerySchema } from '../lib/schema.js';
import { verifyPortalToken } from '../lib/tokens.js';
import { withTenant } from '../lib/db.js';
import { validationError } from '../lib/errors.js';

export function renderPortal(req: Request, res: Response) {
  const { eventId, token } = req.params;
  if (!eventId || !token) {
    return res.status(400).send('Missing event/token.');
  }
  res
    .status(200)
    .type('html')
    .send(renderPortalPage(eventId, token));
}

export async function getPortalData(req: Request, res: Response) {
  const eventIdRaw = Array.isArray(req.query.eventId) ? req.query.eventId[0] : req.query.eventId;
  const tokenRaw = Array.isArray(req.query.token) ? req.query.token[0] : req.query.token;

  const parsed = portalQuerySchema.safeParse({ eventId: eventIdRaw, token: tokenRaw });
  if (!parsed.success) {
    throw validationError(parsed.error.flatten());
  }

  const { eventId, token } = parsed.data;
  const payload = verifyPortalToken(eventId, token);

  const result = await withTenant(payload.tid, async (conn) => {
    const guest = await conn.oneOrNone<{
      id: string;
      full_name: string;
      email: string | null;
      phone: string | null;
      seat_label: string | null;
      status: string;
      dietary: unknown;
      notes: string | null;
      event_name: string;
      event_date: string;
      event_time: string;
      event_locale: string | null;
    }>(
      `
        select
          g.id,
          g.full_name,
          g.email,
          g.phone,
          g.seat_label,
          g.status,
          g.dietary,
          g.notes,
          e.name  as event_name,
          e.event_date::text as event_date,
          e.event_time::text as event_time,
          e.locale as event_locale
        from guests g
        join events e on e.id = g.event_id
       where g.id = $1
         and g.event_id = $2
      `,
      [payload.gid, payload.eid]
    );

    if (!guest) {
      return null;
    }

    const rsvp = await conn.oneOrNone<{
      status: 'yes' | 'no' | 'maybe' | 'waitlist';
      party_size: number;
      preferences: unknown;
      responded_at: string | null;
      notes: string | null;
    }>(
      `
        select status,
               party_size,
               preferences,
               responded_at::text,
               notes
          from rsvps
         where guest_id = $1
           and event_id = $2
      `,
      [payload.gid, payload.eid]
    );

    const channels = await conn.one<{
      email_allowed: boolean;
      sms_allowed: boolean;
    }>(
      `
        select
          coalesce(app.guest_allows_channel($1, 'email'), false) as email_allowed,
          coalesce(app.guest_allows_channel($1, 'sms'), false)   as sms_allowed
      `,
      [payload.gid]
    );

    return {
      guest: {
        id: guest.id,
        full_name: guest.full_name,
        email: guest.email,
        phone: guest.phone,
        seat_label: guest.seat_label,
        status: guest.status,
        dietary: guest.dietary,
        notes: guest.notes,
        email_allowed: channels.email_allowed,
        sms_allowed: channels.sms_allowed
      },
      event: {
        id: payload.eid,
        name: guest.event_name,
        date: guest.event_date,
        time: guest.event_time,
        locale: guest.event_locale
      },
      rsvp,
      token: {
        guest_id: payload.gid,
        expires_at: payload.exp
      }
    };
  });

  if (!result) {
    return res.status(404).json({ ok: false, error: 'invitation_not_found' });
  }

  return res.status(200).json({ ok: true, result });
}
