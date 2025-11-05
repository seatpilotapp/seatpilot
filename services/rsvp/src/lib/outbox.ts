import { setTimeout as delay } from 'node:timers/promises';
import type { ITask } from 'pg-promise';
import { db, withTenant } from './db.js';

interface PendingMessage {
  id: string;
  event_id: string;
  invitation_id: string | null;
  guest_id: string | null;
  channel: 'email' | 'sms' | 'whatsapp';
  provider: string | null;
  status: string;
  attempt: number;
  idempotency_key: string;
  payload: any;
  tenant_id: string;
  email: string | null;
  phone: string | null;
  full_name: string | null;
}

const BATCH_SIZE = Number.parseInt(process.env.RSVP_OUTBOX_BATCH_SIZE ?? '15', 10);
const POLL_INTERVAL_MS = Number.parseInt(process.env.RSVP_OUTBOX_INTERVAL_MS ?? '4000', 10);

let processing = false;

export function startOutboxWorker() {
  const interval = setInterval(() => {
    void processOutboxBatch().catch((error) => {
      console.error('[rsvp] outbox worker error', error);
    });
  }, POLL_INTERVAL_MS);
  if (typeof interval.unref === 'function') {
    interval.unref();
  }
}

export async function processOutboxBatch(limit = BATCH_SIZE) {
  if (processing) {
    return;
  }
  processing = true;
  try {
    const messages = await claimPendingMessages(limit);
    for (const message of messages) {
      await handleMessage(message);
    }
  } finally {
    processing = false;
  }
}

async function claimPendingMessages(limit: number) {
  return db.tx(async (trx: ITask<unknown>) => {
    return trx.manyOrNone<PendingMessage>(
      `
        with claimed as (
          select m.id
            from messages_outbox m
            join events e on e.id = m.event_id
           where m.status = 'pending'
           order by m.created_at
           for update skip locked
           limit $1
        ),
        updated as (
          update messages_outbox m
             set status = 'sending',
                 attempt = m.attempt + 1,
                 updated_at = timezone('utc', now())
           where m.id in (select id from claimed)
          returning m.*
        )
        select
          u.*,
          e.tenant_id,
          g.email,
          g.phone,
          g.full_name
        from updated u
        join events e on e.id = u.event_id
        left join guests g on g.id = u.guest_id
      `,
      [limit]
    );
  });
}

async function handleMessage(message: PendingMessage) {
  try {
    const delivery = await simulateDelivery(message);
    await withTenant(message.tenant_id, async (conn) => {
      await conn.none(
        `
          update messages_outbox
             set status = $2,
                 provider = $3,
                 provider_message_id = $4,
                 sent_at = timezone('utc', now()),
                 last_error = null
           where id = $1
        `,
        [message.id, delivery.finalStatus, delivery.provider, delivery.providerMessageId]
      );

      if (message.invitation_id) {
        await conn.none(
          `
            update invitations
               set status = $2,
                   sent_at = coalesce(sent_at, timezone('utc', now())),
                   delivered_at = case when $2 = 'delivered'
                                        then coalesce(delivered_at, timezone('utc', now()))
                                        else delivered_at
                                   end
             where id = $1
          `,
          [message.invitation_id, delivery.finalStatus === 'delivered' ? 'delivered' : 'sent']
        );
      }
    });
  } catch (error) {
    console.error('[rsvp] delivery failed', {
      id: message.id,
      channel: message.channel,
      guest: message.guest_id,
      error
    });

    await withTenant(message.tenant_id, async (conn) => {
      await conn.none(
        `
          update messages_outbox
             set status = 'failed',
                 last_error = left($2::text, 200),
                 updated_at = timezone('utc', now())
           where id = $1
        `,
        [message.id, (error as Error).message ?? 'unknown_error']
      );
    });
  }
}

async function simulateDelivery(message: PendingMessage) {
  await delay(150);
  if (message.channel === 'email' && !message.email) {
    throw new Error('missing_email');
  }
  if (message.channel === 'sms' && !message.phone) {
    throw new Error('missing_phone');
  }

  const provider = process.env.RSVP_PROVIDER || 'stub';
  const providerMessageId = `${provider}-${message.id}-${Date.now()}`;
  const finalStatus = message.channel === 'email' ? 'delivered' : 'sent';

  return {
    provider,
    providerMessageId,
    finalStatus
  };
}
