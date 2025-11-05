import type { ITask } from 'pg-promise';
import { pgpInstance } from './db.js';
import { createPortalToken } from './tokens.js';
import { HttpError, notFound } from './errors.js';

const invitationColumns = new pgpInstance.helpers.ColumnSet(
  [
    { name: 'event_id', prop: 'eventId' },
    { name: 'guest_id', prop: 'guestId' },
    { name: 'channel' },
    { name: 'template_id', prop: 'templateId' },
    { name: 'subject' },
    { name: 'payload', prop: 'payload', mod: ':json' },
    { name: 'status' },
    { name: 'scheduled_at', prop: 'scheduledAt' }
  ],
  { table: 'invitations' }
);

const outboxColumns = new pgpInstance.helpers.ColumnSet(
  [
    { name: 'event_id', prop: 'eventId' },
    { name: 'invitation_id', prop: 'invitationId' },
    { name: 'guest_id', prop: 'guestId' },
    { name: 'channel' },
    { name: 'provider', prop: 'provider' },
    { name: 'status' },
    { name: 'attempt', prop: 'attempt' },
    { name: 'idempotency_key', prop: 'idempotencyKey' },
    { name: 'payload', prop: 'payload', mod: ':json' },
    { name: 'scheduled_at', prop: 'scheduledAt' }
  ],
  { table: 'messages_outbox' }
);

export interface QueueOptions {
  tenantId: string;
  eventId: string;
  channel: 'email' | 'sms';
  operation: 'send' | 'remind';
  guestIds?: string[];
  segment?: string;
  templateId?: string | null;
  subject?: string | null;
  scheduledAt?: Date;
  batchKey?: string;
  excludeResponded?: boolean;
}

export interface QueueResult {
  event: {
    id: string;
    name: string;
    eventDate: string;
    eventTime: string;
  };
  batchKey: string;
  channel: 'email' | 'sms';
  templateId: string | null;
  subject: string;
  recipients: number;
  queued: number;
  skipped: number;
  scheduledAt: string | null;
}

interface GuestRow {
  id: string;
  full_name: string;
  email: string | null;
  phone: string | null;
  locale: string | null;
}

export async function queueInvitations(conn: ITask<unknown>, options: QueueOptions): Promise<QueueResult> {
  const event = await conn.oneOrNone<{
    id: string;
    tenant_id: string;
    name: string;
    event_date: string;
    event_time: string;
    locale: string | null;
  }>(
    `
      select id, tenant_id, name, event_date::text, event_time::text, locale
        from events
       where id = $1
    `,
    [options.eventId]
  );

  if (!event) {
    throw notFound('event');
  }

  if (event.tenant_id !== options.tenantId) {
    throw new HttpError(403, 'forbidden', 'Event does not belong to tenant');
  }

  if (options.channel === 'email' && !process.env.RSVP_EMAIL_FROM) {
    console.warn('[rsvp] RSVP_EMAIL_FROM not set – emails will use fallback sender');
  }

  const conditions: string[] = ['g.event_id = $1'];
  const values: unknown[] = [options.eventId];
  let paramIndex = 2;

  if (options.guestIds && options.guestIds.length > 0) {
    conditions.push(`g.id = any($${paramIndex}::uuid[])`);
    values.push(options.guestIds);
    paramIndex += 1;
  } else if (options.segment) {
    conditions.push(`g.segment = $${paramIndex}`);
    values.push(options.segment);
    paramIndex += 1;
  }

  if (options.channel === 'email') {
    conditions.push(`g.email is not null and length(trim(g.email)) > 0`);
  }
  if (options.channel === 'sms') {
    conditions.push(`g.phone is not null and length(trim(g.phone)) > 0`);
  }

  conditions.push(`coalesce(app.guest_allows_channel(g.id, $${paramIndex}), true) = true`);
  values.push(options.channel);
  paramIndex += 1;

  if (options.excludeResponded) {
    conditions.push(`not exists (
      select 1
        from rsvps r
       where r.event_id = g.event_id
         and r.guest_id = g.id
         and r.status = 'yes'
    )`);
  }

  const recipients = await conn.manyOrNone<GuestRow>(
    `
      select g.id, g.full_name, g.email, g.phone, g.locale
        from guests g
       where ${conditions.join(' and ')}
       order by g.full_name asc
    `,
    values
  );

  if (recipients.length === 0) {
    return {
      event: {
        id: event.id,
        name: event.name,
        eventDate: event.event_date,
        eventTime: event.event_time
      },
      batchKey: options.batchKey ?? `${options.operation}:${new Date().toISOString().replace(/[:.]/g, '')}`,
      channel: options.channel,
      templateId: options.templateId ?? null,
      subject: options.subject ?? defaultSubject(event.name),
      recipients: 0,
      queued: 0,
      skipped: 0,
      scheduledAt: options.scheduledAt ? options.scheduledAt.toISOString() : null
    };
  }

  const guestMap = new Map(recipients.map((guest) => [guest.id, guest]));
  const tokenMap = new Map<
    string,
    {
      token: string;
      expiresAt: number;
      portalPath: string;
      portalUrl: string;
    }
  >();

  const portalBase = (process.env.RSVP_PORTAL_BASE_URL || '').trim().replace(/\/$/, '');
  const baseUrl = portalBase.length > 0 ? portalBase : '';

  const templateId = options.templateId ?? null;
  const subject = options.subject ?? defaultSubject(event.name);
  const scheduledAt = options.scheduledAt ?? null;
  const normalizedTemplate = templateId ?? 'default';
  const defaultBatchKey = `${options.operation}:${normalizedTemplate}:${new Date()
    .toISOString()
    .replace(/[:.]/g, '')}`;
  const batchKey = (options.batchKey ?? defaultBatchKey).slice(0, 64);

  for (const guest of recipients) {
    const { token, expiresAt } = createPortalToken(options.tenantId, event.id, guest.id);
    const portalPath = `/g/${event.id}/${token}`;
    tokenMap.set(guest.id, {
      token,
      expiresAt,
      portalPath,
      portalUrl: baseUrl ? `${baseUrl}${portalPath}` : portalPath
    });
  }

  const invitationRows = recipients.map((guest) => {
    const entry = tokenMap.get(guest.id)!;
    const locale = guest.locale ?? event.locale ?? 'es-PR';
    return {
      eventId: event.id,
      guestId: guest.id,
      channel: options.channel,
      templateId,
      subject,
      payload: {
        batch_key: batchKey,
        channel: options.channel,
        template_id: templateId,
        guest: {
          id: guest.id,
          name: guest.full_name,
          email: guest.email,
          phone: guest.phone,
          locale
        },
        token: entry.token,
        portal_path: entry.portalPath,
        portal_url: entry.portalUrl,
        expires_at: entry.expiresAt
      },
      status: 'scheduled',
      scheduledAt
    };
  });

  const insertInvitationsSql =
    pgpInstance.helpers.insert(invitationRows, invitationColumns) +
    `
      on conflict (event_id, guest_id, channel) do update
      set template_id  = excluded.template_id,
          subject      = excluded.subject,
          payload      = excluded.payload,
          status       = excluded.status,
          scheduled_at = excluded.scheduled_at,
          updated_at   = timezone('utc', now())
      returning id, guest_id
    `;

  const invitationResult = await conn.manyOrNone<{ id: string; guest_id: string }>(insertInvitationsSql);

  const outboxRows = invitationResult.map(({ id, guest_id }) => {
    const guest = guestMap.get(guest_id)!;
    const tokenEntry = tokenMap.get(guest_id)!;
    return {
      eventId: event.id,
      invitationId: id,
      guestId: guest_id,
      channel: options.channel,
      provider: process.env.RSVP_PROVIDER || 'stub',
      status: 'pending',
      attempt: 0,
      idempotencyKey: `${batchKey}:${guest_id}`,
      payload: {
        batch_key: batchKey,
        template_id: templateId,
        subject,
        guest: {
          id: guest_id,
          name: guest.full_name,
          email: guest.email,
          phone: guest.phone
        },
        channel: options.channel,
        token: tokenEntry.token,
        portal_path: tokenEntry.portalPath,
        portal_url: tokenEntry.portalUrl,
        expires_at: tokenEntry.expiresAt
      },
      scheduledAt
    };
  });

  const insertOutboxSql =
    pgpInstance.helpers.insert(outboxRows, outboxColumns) +
    `
      on conflict (event_id, idempotency_key) do nothing
      returning id, guest_id
    `;

  const outboxResult = await conn.manyOrNone<{ id: string; guest_id: string }>(insertOutboxSql);

  const queued = outboxResult.length;
  const skipped = invitationResult.length - queued;

  return {
    event: {
      id: event.id,
      name: event.name,
      eventDate: event.event_date,
      eventTime: event.event_time
    },
    batchKey,
    channel: options.channel,
    templateId,
    subject,
    recipients: recipients.length,
    queued,
    skipped,
    scheduledAt: scheduledAt ? scheduledAt.toISOString() : null
  };
}

function defaultSubject(eventName: string) {
  return `Confirmación RSVP · ${eventName}`;
}
