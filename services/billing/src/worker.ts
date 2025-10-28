import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { Pool } from 'pg';
import Stripe from 'stripe';

export interface BillingReportRow {
  tenantId: string;
  periodKey: string;
  eventsOverage: number;
  screensOverage: number;
  checkinsOverage: number;
  stripeCustomerId: string;
  currency: string;
}

export interface BillingProcessResult {
  processed: number;
  skipped: number;
  errors: Array<{
    tenantId: string;
    periodKey: string;
    message: string;
  }>;
}

export interface BillingRepository {
  fetchReport(periodKey: string): Promise<BillingReportRow[]>;
  prepareRecord(row: BillingReportRow, idempotencyKey: string): Promise<{
    status: 'pending' | 'skip';
    recordId?: number;
  }>;
  finalizeSuccess(
    recordId: number,
    payload: {
      invoiceId: string | null;
      paymentIntentId: string | null;
      amountDueCents: number;
      status: 'processed' | 'no_charge';
    }
  ): Promise<void>;
  markFailure(
    row: BillingReportRow,
    error: Error,
    recordId?: number
  ): Promise<void>;
  close(): Promise<void>;
}

export interface StripeChargeResult {
  invoiceId: string | null;
  paymentIntentId: string | null;
  amountDueCents: number;
  status: 'processed' | 'no_charge';
}

export interface StripeService {
  createInvoiceForOverage(
    row: BillingReportRow,
    idempotencyKey: string
  ): Promise<StripeChargeResult>;
}

export interface ProcessOptions {
  periodKey: string;
  repository: BillingRepository;
  stripe: StripeService;
}

function currentPeriodKey(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

export async function processBillingPeriod(
  options: ProcessOptions
): Promise<BillingProcessResult> {
  const { periodKey, repository, stripe } = options;
  const rows = await repository.fetchReport(periodKey);
  const summary: BillingProcessResult = {
    processed: 0,
    skipped: 0,
    errors: []
  };

  for (const row of rows) {
    const idempotencyKey = `tenant:${row.tenantId}:period:${row.periodKey}`;
    let recordId: number | undefined;
    try {
      const prep = await repository.prepareRecord(row, idempotencyKey);
      if (prep.status === 'skip' || !prep.recordId) {
        summary.skipped += 1;
        continue;
      }

      recordId = prep.recordId;
      const chargeResult = await stripe.createInvoiceForOverage(
        row,
        idempotencyKey
      );

      await repository.finalizeSuccess(recordId, chargeResult);
      summary.processed += 1;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      summary.errors.push({
        tenantId: row.tenantId,
        periodKey: row.periodKey,
        message: err.message
      });
      await repository.markFailure(row, err, recordId);
    }
  }

  return summary;
}

function resolveDatabaseUrl(): string {
  const url = process.env.DATABASE_URL ?? process.env.SUPABASE_DB_URL;
  if (!url) {
    throw new Error(
      'DATABASE_URL or SUPABASE_DB_URL must be configured for the billing worker.'
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

class PostgresBillingRepository implements BillingRepository {
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

  async fetchReport(periodKey: string): Promise<BillingReportRow[]> {
    const query = `
      select
        report.tenant_id::text as tenant_id,
        report.period_key,
        report.events_overage,
        report.screens_overage,
        report.checkins_overage,
        settings.stripe_customer_id,
        settings.default_currency
      from v_tenant_billing_report report
      join tenant_billing_settings settings
        on settings.tenant_id = report.tenant_id
      where report.period_key = $1
      order by report.tenant_id
    `;

    const result = await this.pool.query<{
      tenant_id: string;
      period_key: string;
      events_overage: number;
      screens_overage: number;
      checkins_overage: number;
      stripe_customer_id: string;
      default_currency: string;
    }>(query, [periodKey]);

    return result.rows.map(
      (row: {
        tenant_id: string;
        period_key: string;
        events_overage: number;
        screens_overage: number;
        checkins_overage: number;
        stripe_customer_id: string;
        default_currency: string;
      }) => ({
        tenantId: row.tenant_id,
        periodKey: row.period_key,
        eventsOverage: Number(row.events_overage ?? 0),
        screensOverage: Number(row.screens_overage ?? 0),
        checkinsOverage: Number(row.checkins_overage ?? 0),
        stripeCustomerId: row.stripe_customer_id,
        currency: row.default_currency ?? 'usd'
      })
    );
  }

  async prepareRecord(
    row: BillingReportRow,
    idempotencyKey: string
  ): Promise<{ status: 'pending' | 'skip'; recordId?: number }> {
    const result = await this.pool.query<{
      id: number;
      status: string;
    }>(
      `
        insert into billing_processed (
          tenant_id,
          period_key,
          status,
          idempotency_key,
          amount_due_cents,
          currency,
          processed_at
        )
        values ($1, $2, 'pending', $3, 0, $4, now())
        on conflict (tenant_id, period_key) do update
          set idempotency_key = excluded.idempotency_key,
              currency = excluded.currency,
              processed_at = case
                when billing_processed.status = 'error' then now()
                else billing_processed.processed_at
              end,
              status = case
                when billing_processed.status = 'error' then 'pending'
                else billing_processed.status
              end
        returning id, status
      `,
      [row.tenantId, row.periodKey, idempotencyKey, row.currency]
    );

    const record = result.rows[0];
    if (!record) {
      return { status: 'skip' };
    }

    if (record.status === 'pending') {
      return { status: 'pending', recordId: record.id };
    }

    return { status: 'skip' };
  }

  async finalizeSuccess(
    recordId: number,
    payload: {
      invoiceId: string | null;
      paymentIntentId: string | null;
      amountDueCents: number;
      status: 'processed' | 'no_charge';
    }
  ): Promise<void> {
    await this.pool.query(
      `
        update billing_processed
        set status = $2,
            stripe_invoice_id = $3,
            stripe_payment_intent_id = $4,
            amount_due_cents = $5,
            processed_at = now(),
            error_details = null
        where id = $1
      `,
      [
        recordId,
        payload.status,
        payload.invoiceId,
        payload.paymentIntentId,
        payload.amountDueCents
      ]
    );
  }

  async markFailure(
    row: BillingReportRow,
    error: Error,
    recordId?: number
  ): Promise<void> {
    if (recordId) {
      await this.pool.query(
        `
          update billing_processed
          set status = 'error',
              error_details = $2,
              processed_at = now()
          where id = $1
        `,
        [recordId, error.message]
      );
      return;
    }

    await this.pool.query(
      `
        insert into billing_processed (
          tenant_id,
          period_key,
          status,
          idempotency_key,
          amount_due_cents,
          currency,
          error_details,
          processed_at
        )
        values ($1, $2, 'error', $3, 0, $4, $5, now())
        on conflict (tenant_id, period_key) do update
          set status = 'error',
              error_details = excluded.error_details,
              processed_at = now()
      `,
      [
        row.tenantId,
        row.periodKey,
        `tenant:${row.tenantId}:period:${row.periodKey}`,
        row.currency,
        error.message
      ]
    );
  }

  async close(): Promise<void> {
    await this.pool.end();
  }
}

function parseUnitAmount(
  envName: string,
  fallback: number
): number {
  const raw = process.env[envName];
  if (!raw) return fallback;
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

class StripeBillingService implements StripeService {
  private client: Stripe;
  private unitPrices: {
    events: number;
    screens: number;
    checkins: number;
  };

  constructor(client?: Stripe) {
    const apiKey = process.env.STRIPE_API_KEY;
    if (!apiKey && !client) {
      throw new Error(
        'STRIPE_API_KEY must be configured for the billing worker.'
      );
    }
    this.client =
      client ??
      new Stripe(apiKey!, {
        apiVersion: '2023-10-16'
      });

    this.unitPrices = {
      events: parseUnitAmount('BILLING_EVENTS_OVERAGE_UNIT_CENTS', 25),
      screens: parseUnitAmount('BILLING_SCREENS_OVERAGE_UNIT_CENTS', 150),
      checkins: parseUnitAmount('BILLING_CHECKINS_OVERAGE_UNIT_CENTS', 50)
    };
  }

  async createInvoiceForOverage(
    row: BillingReportRow,
    idempotencyKey: string
  ): Promise<StripeChargeResult> {
    const components: Array<{
      metric: 'events' | 'screens' | 'checkins';
      quantity: number;
      unitPrice: number;
      description: string;
    }> = [];

    if (row.eventsOverage > 0 && this.unitPrices.events > 0) {
      components.push({
        metric: 'events',
        quantity: row.eventsOverage,
        unitPrice: this.unitPrices.events,
        description: `Eventos excedidos (${row.eventsOverage}) · ${row.periodKey}`
      });
    }

    if (row.screensOverage > 0 && this.unitPrices.screens > 0) {
      components.push({
        metric: 'screens',
        quantity: row.screensOverage,
        unitPrice: this.unitPrices.screens,
        description: `Pantallas excedidas (${row.screensOverage}) · ${row.periodKey}`
      });
    }

    if (row.checkinsOverage > 0 && this.unitPrices.checkins > 0) {
      components.push({
        metric: 'checkins',
        quantity: row.checkinsOverage,
        unitPrice: this.unitPrices.checkins,
        description: `Check-ins excedidos (${row.checkinsOverage}) · ${row.periodKey}`
      });
    }

    if (!components.length) {
      return {
        invoiceId: null,
        paymentIntentId: null,
        amountDueCents: 0,
        status: 'no_charge'
      };
    }

    let total = 0;
    for (const component of components) {
      const amount = component.quantity * component.unitPrice;
      total += amount;
      await this.client.invoiceItems.create(
        {
          customer: row.stripeCustomerId,
          currency: row.currency,
          amount,
          description: component.description
        },
        {
          idempotencyKey: `${idempotencyKey}:${component.metric}`
        }
      );
    }

    const invoice = await this.client.invoices.create(
      {
        customer: row.stripeCustomerId,
        auto_advance: true,
        collection_method: 'charge_automatically',
        metadata: {
          tenant_id: row.tenantId,
          period_key: row.periodKey
        }
      },
      {
        idempotencyKey: `${idempotencyKey}:invoice`
      }
    );

    try {
      if (!invoice.status || invoice.status !== 'paid') {
        await this.client.invoices.finalizeInvoice(invoice.id, {
          idempotencyKey: `${idempotencyKey}:finalize`
        });
      }
    } catch (error) {
      // Finalizing twice or when already paid throws an error; log and continue.
      const err = error as Stripe.StripeRawError;
      if (err && err.code !== 'invoice_finalization_failed') {
        // eslint-disable-next-line no-console
        console.warn('[billing] finalizeInvoice warning', err.message);
      }
    }

    const paymentIntent = invoice.payment_intent;
    const paymentIntentId =
      typeof paymentIntent === 'string'
        ? paymentIntent
        : paymentIntent?.id ?? null;

    return {
      invoiceId: invoice.id,
      paymentIntentId,
      amountDueCents: total,
      status: 'processed'
    };
  }
}

async function runCli(): Promise<void> {
  const periodKey = process.env.BILLING_PERIOD_KEY ?? currentPeriodKey();
  const repository = new PostgresBillingRepository();
  const stripeService = new StripeBillingService();

  try {
    const summary = await processBillingPeriod({
      periodKey,
      repository,
      stripe: stripeService
    });

    // eslint-disable-next-line no-console
    console.log(
      `[billing] period=${periodKey} processed=${summary.processed} skipped=${summary.skipped} errors=${summary.errors.length}`
    );
    if (summary.errors.length) {
      // eslint-disable-next-line no-console
      console.error('[billing] errors', summary.errors);
    }
  } finally {
    await repository.close();
  }
}

const isCliExecution =
  process.argv[1] &&
  fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isCliExecution) {
  runCli().catch((error) => {
    // eslint-disable-next-line no-console
    console.error('[billing] worker failed', error);
    process.exitCode = 1;
  });
}

export { PostgresBillingRepository, StripeBillingService, currentPeriodKey };
