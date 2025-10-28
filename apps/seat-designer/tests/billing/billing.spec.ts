import Stripe from 'stripe';
import {
  type BillingReportRow,
  type BillingRepository,
  type BillingProcessResult,
  processBillingPeriod
} from '../../../../services/billing/src/worker.ts';
import {
  type WebhookRepository,
  handleStripeEvent
} from '../../app/api/billing/webhook/route.ts';

class MockBillingRepo implements BillingRepository {
  private rows: BillingReportRow[];
  private records = new Map<string, { status: string; id: number }>();
  private seq = 1;

  constructor(rows: BillingReportRow[]) {
    this.rows = rows;
  }

  fetchReport(periodKey: string): Promise<BillingReportRow[]> {
    return Promise.resolve(
      this.rows.filter((row) => row.periodKey === periodKey)
    );
  }

  async prepareRecord(
    row: BillingReportRow
  ): Promise<{ status: 'pending' | 'skip'; recordId?: number }> {
    const key = `${row.tenantId}:${row.periodKey}`;
    const existing = this.records.get(key);
    if (!existing) {
      const record = { status: 'pending', id: this.seq++ };
      this.records.set(key, record);
      return { status: 'pending', recordId: record.id };
    }
    if (existing.status === 'error') {
      existing.status = 'pending';
      return { status: 'pending', recordId: existing.id };
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
    for (const record of this.records.values()) {
      if (record.id === recordId) {
        record.status = payload.status;
      }
    }
  }

  async markFailure(
    row: BillingReportRow,
    _error: Error,
    recordId?: number
  ): Promise<void> {
    const key = `${row.tenantId}:${row.periodKey}`;
    if (recordId) {
      this.records.set(key, { status: 'error', id: recordId });
      return;
    }
    const existing = this.records.get(key);
    this.records.set(key, {
      status: 'error',
      id: existing?.id ?? this.seq++
    });
  }

  close(): Promise<void> {
    return Promise.resolve();
  }
}

class MockStripeService {
  public calls: Array<{
    row: BillingReportRow;
    idempotencyKey: string;
  }> = [];

  async createInvoiceForOverage(
    row: BillingReportRow,
    idempotencyKey: string
  ) {
    this.calls.push({ row, idempotencyKey });
    const total =
      row.eventsOverage * 25 +
      row.screensOverage * 150 +
      row.checkinsOverage * 50;
    if (total === 0) {
      return {
        invoiceId: null,
        paymentIntentId: null,
        amountDueCents: 0,
        status: 'no_charge' as const
      };
    }
    return {
      invoiceId: `in_${row.tenantId}`,
      paymentIntentId: `pi_${row.tenantId}`,
      amountDueCents: total,
      status: 'processed' as const
    };
  }
}

class MockWebhookRepo implements WebhookRepository {
  public events = new Map<string, { status: string }>();
  public billing = new Map<string, { invoiceId: string; amountPaid: number }>();

  async beginEvent(
    eventId: string,
    _eventType: string,
    _tenantId: string | null,
    _payload: Record<string, unknown>
  ): Promise<'new' | 'retry' | 'duplicate'> {
    const existing = this.events.get(eventId);
    if (!existing) {
      this.events.set(eventId, { status: 'received' });
      return 'new';
    }
    if (existing.status === 'processed') {
      return 'duplicate';
    }
    existing.status = 'received';
    return 'retry';
  }

  async completeEvent(eventId: string, status: 'processed' | 'error') {
    const existing = this.events.get(eventId);
    if (existing) {
      existing.status = status;
    } else {
      this.events.set(eventId, { status });
    }
  }

  async updateBillingRecord(
    tenantId: string,
    periodKey: string,
    payload: {
      invoiceId: string;
      paymentIntentId: string | null;
      amountPaid: number;
    }
  ) {
    const key = `${tenantId}:${periodKey}`;
    this.billing.set(key, {
      invoiceId: payload.invoiceId,
      amountPaid: payload.amountPaid
    });
  }
}

describe('billing worker', () => {
  const periodKey = '2025-10';
  const baseRow: BillingReportRow = {
    tenantId: 'tenant-123',
    periodKey,
    eventsOverage: 4,
    screensOverage: 0,
    checkinsOverage: 2,
    stripeCustomerId: 'cus_123',
    currency: 'usd'
  };

  it('processes billing rows once and skips duplicates', async () => {
    const repo = new MockBillingRepo([baseRow]);
    const stripeService = new MockStripeService();

    const firstRun: BillingProcessResult = await processBillingPeriod({
      periodKey,
      repository: repo,
      stripe: stripeService
    });

    expect(firstRun.processed).toBe(1);
    expect(firstRun.skipped).toBe(0);
    expect(firstRun.errors).toHaveLength(0);
    expect(stripeService.calls).toHaveLength(1);

    const secondRun = await processBillingPeriod({
      periodKey,
      repository: repo,
      stripe: stripeService
    });

    expect(secondRun.processed).toBe(0);
    expect(secondRun.skipped).toBe(1);
    expect(stripeService.calls).toHaveLength(1);
  });
});

describe('billing webhook handler', () => {
  const invoiceEvent = {
    id: 'evt_001',
    type: 'invoice.payment_succeeded',
    data: {
      object: {
        id: 'in_001',
        amount_paid: 2500,
        payment_intent: 'pi_001',
        metadata: {
          tenant_id: 'tenant-123',
          period_key: '2025-10'
        }
      }
    }
  } as unknown as Stripe.Event;

  it('marks invoice as processed', async () => {
    const repo = new MockWebhookRepo();
    const result = await handleStripeEvent(invoiceEvent, repo);

    expect(result).toBe('processed');
    expect(repo.events.get('evt_001')?.status).toBe('processed');
    expect(repo.billing.get('tenant-123:2025-10')).toEqual({
      invoiceId: 'in_001',
      amountPaid: 2500
    });

    const duplicate = await handleStripeEvent(invoiceEvent, repo);
    expect(duplicate).toBe('duplicate');
  });

  it('ignores unrelated events', async () => {
    const repo = new MockWebhookRepo();
    const ignoredEvent = {
      id: 'evt_ignored',
      type: 'customer.created',
      data: {
        object: {
          id: 'cus_123'
        }
      }
    } as unknown as Stripe.Event;

    const result = await handleStripeEvent(ignoredEvent, repo);
    expect(result).toBe('ignored');
    expect(repo.events.get('evt_ignored')?.status).toBe('processed');
  });
});
