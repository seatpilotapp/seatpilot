import { Pool } from 'pg';
import Stripe from 'stripe';

export const runtime = 'nodejs';

interface WebhookRepository {
  beginEvent(
    eventId: string,
    eventType: string,
    tenantId: string | null,
    payload: Record<string, unknown>
  ): Promise<'new' | 'retry' | 'duplicate'>;
  completeEvent(
    eventId: string,
    status: 'processed' | 'error'
  ): Promise<void>;
  updateBillingRecord(
    tenantId: string,
    periodKey: string,
    payload: {
      invoiceId: string;
      paymentIntentId: string | null;
      amountPaid: number;
    }
  ): Promise<void>;
}

function resolveDatabaseUrl(): string {
  const url = process.env.DATABASE_URL ?? process.env.SUPABASE_DB_URL;
  if (!url) {
    throw new Error(
      'DATABASE_URL or SUPABASE_DB_URL must be configured for the Stripe webhook.'
    );
  }
  return url;
}

function shouldUseSsl(connectionString: string): boolean {
  return (
    !connectionString.includes('localhost') &&
    !connectionString.includes('127.0.0.1')
  );
}

function buildPoolConfig(rawConnection: string): {
  connectionString: string;
  ssl: { rejectUnauthorized: false } | undefined;
} {
  const url = new URL(rawConnection);
  const params = url.searchParams;

  const sslMode =
    params.get('sslmode') ??
    params.get('ssl_mode') ??
    process.env.PGSSLMODE ??
    undefined;

  if (params.has('sslmode')) params.delete('sslmode');
  if (params.has('ssl_mode')) params.delete('ssl_mode');
  url.search = params.toString();

  const connectionString = url.toString();
  const useSsl = sslMode ? sslMode !== 'disable' : shouldUseSsl(connectionString);

  return {
    connectionString,
    ssl: useSsl ? { rejectUnauthorized: false } : undefined
  };
}

class PostgresWebhookRepository implements WebhookRepository {
  private pool: Pool;

  constructor(pool?: Pool) {
    const config = buildPoolConfig(resolveDatabaseUrl());
    this.pool =
      pool ??
      new Pool({
        connectionString: config.connectionString,
        ssl: config.ssl
      });
  }

  async beginEvent(
    eventId: string,
    eventType: string,
    tenantId: string | null,
    payload: Record<string, unknown>
  ): Promise<'new' | 'retry' | 'duplicate'> {
    const jsonPayload = JSON.stringify(payload);
    const inserted = await this.pool.query(
      `
        insert into billing_webhook_audit (
          event_id,
          event_type,
          tenant_id,
          status,
          payload
        )
        values ($1, $2, $3, 'received', $4::jsonb)
        on conflict (event_id) do nothing
        returning id
      `,
      [eventId, eventType, tenantId, jsonPayload]
    );

    if (inserted.rowCount > 0) {
      return 'new';
    }

    const existing = await this.pool.query<{
      status: string;
    }>(`select status from billing_webhook_audit where event_id = $1`, [
      eventId
    ]);

    if (!existing.rowCount) {
      await this.pool.query(
        `
          insert into billing_webhook_audit (
            event_id,
            event_type,
            tenant_id,
            status,
            payload
          )
          values ($1, $2, $3, 'received', $4::jsonb)
        `,
        [eventId, eventType, tenantId, jsonPayload]
      );
      return 'new';
    }

    const currentStatus = existing.rows[0].status;
    if (currentStatus === 'processed') {
      return 'duplicate';
    }

    await this.pool.query(
      `
        update billing_webhook_audit
        set payload = $2,
            tenant_id = coalesce(billing_webhook_audit.tenant_id, $3),
            status = 'received',
            processed_at = null
        where event_id = $1
      `,
      [eventId, jsonPayload, tenantId]
    );
    return 'retry';
  }

  async completeEvent(
    eventId: string,
    status: 'processed' | 'error'
  ): Promise<void> {
    await this.pool.query(
      `
        update billing_webhook_audit
        set status = $2,
            processed_at = now()
        where event_id = $1
      `,
      [eventId, status]
    );
  }

  async updateBillingRecord(
    tenantId: string,
    periodKey: string,
    payload: {
      invoiceId: string;
      paymentIntentId: string | null;
      amountPaid: number;
    }
  ): Promise<void> {
    await this.pool.query(
      `
        update billing_processed
        set status = 'processed',
            stripe_invoice_id = $3,
            stripe_payment_intent_id = $4,
            amount_due_cents = case
              when $5 is null then amount_due_cents
              else $5
            end,
            processed_at = now(),
            error_details = null
        where tenant_id::text = $1
          and period_key = $2
      `,
      [
        tenantId,
        periodKey,
        payload.invoiceId,
        payload.paymentIntentId,
        payload.amountPaid ?? null
      ]
    );
  }
}

function createStripeClient(): Stripe {
  const apiKey = process.env.STRIPE_API_KEY;
  if (!apiKey) {
    throw new Error('STRIPE_API_KEY must be configured for Stripe webhooks.');
  }
  return new Stripe(apiKey, {
    apiVersion: '2023-10-16'
  });
}

let sharedRepository: PostgresWebhookRepository | null = null;
let sharedStripeClient: Stripe | null = null;

function getRepository(): PostgresWebhookRepository {
  if (!sharedRepository) {
    sharedRepository = new PostgresWebhookRepository();
  }
  return sharedRepository;
}

function getStripe(): Stripe {
  if (!sharedStripeClient) {
    sharedStripeClient = createStripeClient();
  }
  return sharedStripeClient;
}

export async function handleStripeEvent(
  event: Stripe.Event,
  repository: WebhookRepository
): Promise<'processed' | 'duplicate' | 'ignored'> {
  const object = event.data.object as Stripe.Invoice | undefined;
  const tenantFromMetadata =
    (object && 'metadata' in object && object.metadata?.tenant_id) || null;

  const result = await repository.beginEvent(
    event.id,
    event.type,
    tenantFromMetadata,
    event as unknown as Record<string, unknown>
  );

  if (result === 'duplicate') {
    return 'duplicate';
  }

  if (event.type !== 'invoice.payment_succeeded') {
    await repository.completeEvent(event.id, 'processed');
    return 'ignored';
  }

  const invoice = event.data.object as Stripe.Invoice;
  const tenantId = invoice.metadata?.tenant_id ?? tenantFromMetadata;
  const periodKey = invoice.metadata?.period_key;
  const amountPaid = invoice.amount_paid ?? invoice.amount_due ?? 0;
  const paymentIntent = invoice.payment_intent;
  const paymentIntentId =
    typeof paymentIntent === 'string'
      ? paymentIntent
      : paymentIntent?.id ?? null;

  if (tenantId && periodKey) {
    await repository.updateBillingRecord(tenantId, periodKey, {
      invoiceId: invoice.id,
      paymentIntentId,
      amountPaid
    });
  }

  await repository.completeEvent(event.id, 'processed');
  return 'processed';
}

export async function POST(request: Request): Promise<Response> {
  const stripeClient = getStripe();
  const repository = getRepository();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: 'missing_webhook_secret'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return new Response(
      JSON.stringify({ ok: false, error: 'missing_signature' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const rawBody = await request.text();
  let event: Stripe.Event;
  try {
    event = stripeClient.webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'invalid_signature';
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const outcome = await handleStripeEvent(event, repository);
    return new Response(JSON.stringify({ ok: true, result: outcome }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown_error';
    await repository.completeEvent(event.id, 'error');
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export { PostgresWebhookRepository, type WebhookRepository };
