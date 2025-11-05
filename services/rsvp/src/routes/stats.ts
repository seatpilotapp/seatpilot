import type { Request, Response } from 'express';
import { withTenant } from '../lib/db.js';
import { extractTenantId } from '../lib/request.js';
import { statsQuerySchema } from '../lib/schema.js';
import { missingTenant, notFound, validationError } from '../lib/errors.js';

export async function getStats(req: Request, res: Response) {
  const tenantId = extractTenantId(req);
  if (!tenantId) {
    throw missingTenant();
  }

  const eventIdRaw = Array.isArray(req.query.eventId) ? req.query.eventId[0] : req.query.eventId;
  const parsed = statsQuerySchema.safeParse({ eventId: eventIdRaw });
  if (!parsed.success) {
    throw validationError(parsed.error.flatten());
  }

  const { eventId } = parsed.data;

  const result = await withTenant(tenantId, async (conn) => {
    const event = await conn.oneOrNone<{
      id: string;
      name: string;
      event_date: string;
      event_time: string;
    }>(
      `
        select id, name, event_date::text, event_time::text
          from events
         where id = $1
      `,
      [eventId]
    );

    if (!event) {
      throw notFound('event');
    }

    const [invitationStats, rsvpStats, outboxStats, guestStats] = await Promise.all([
      conn.oneOrNone<{
        total: number;
        sent_or_scheduled: number;
        sent: number;
        delivered: number;
        bounced: number;
        flagged_spam: number;
        last_sent_at: string | null;
      }>(
        `
          select total,
                 sent_or_scheduled,
                 sent,
                 delivered,
                 bounced,
                 flagged_spam,
                 last_sent_at::text
            from invitations_stats
           where event_id = $1
        `,
        [eventId]
      ),
      conn.oneOrNone<{
          confirmed: number;
          declined: number;
          maybe: number;
          waitlist: number;
          confirmed_guests: number;
          last_response_at: string | null;
        }>(
        `
          select confirmed,
                 declined,
                 maybe,
                 waitlist,
                 confirmed_guests,
                 last_response_at::text
            from rsvps_stats
           where event_id = $1
        `,
        [eventId]
      ),
      conn.one<{
        pending: number;
        sending: number;
        failed: number;
      }>(
        `
          select
            count(*) filter (where status = 'pending') as pending,
            count(*) filter (where status = 'sending') as sending,
            count(*) filter (where status = 'failed') as failed
          from messages_outbox
         where event_id = $1
        `,
        [eventId]
      ),
      conn.one<{
        total: number;
        confirmed: number;
        waiting: number;
        declined: number;
      }>(
        `
          select
            count(*)                                     as total,
            count(*) filter (where status = 'CONFIRMED') as confirmed,
            count(*) filter (where status = 'WAITING')   as waiting,
            count(*) filter (where status = 'DECLINED')  as declined
          from guests
         where event_id = $1
        `,
        [eventId]
      )
    ]);

    return {
      event,
      invitations: invitationStats ?? {
        total: 0,
        sent_or_scheduled: 0,
        sent: 0,
        delivered: 0,
        bounced: 0,
        flagged_spam: 0,
        last_sent_at: null
      },
      rsvps: rsvpStats ?? {
        confirmed: 0,
        declined: 0,
        maybe: 0,
        waitlist: 0,
        confirmed_guests: 0,
        last_response_at: null
      },
      outbox: outboxStats,
      guests: guestStats
    };
  });

  return res.status(200).json({ ok: true, result });
}
