import { Pool } from 'pg';

export interface BillingFilterOptions {
  periods: string[];
}

export interface BillingRow {
  tenant_id: string;
  period_key: string;
  events_included: number;
  events_used: number;
  events_overage: number;
  screens_included: number;
  screens_used: number;
  screens_overage: number;
  checkins_included: number;
  checkins_used: number;
  checkins_overage: number;
}

type FetchOptions = {
  tenantId?: string;
  periodKey?: string;
  limit?: number;
};

let pool: Pool | null = null;

function resolveConnectionString(): string {
  const url = process.env.DATABASE_URL ?? process.env.SUPABASE_DB_URL;
  if (!url) {
    throw new Error(
      'DATABASE_URL / SUPABASE_DB_URL not configured for billing admin endpoint.'
    );
  }
  return url;
}

function getPool(): Pool {
  if (!pool) {
    const connectionString = resolveConnectionString();
    const useSsl =
      !connectionString.includes('localhost') &&
      !connectionString.includes('127.0.0.1');
    pool = new Pool({
      connectionString,
      ssl: useSsl ? { rejectUnauthorized: false } : undefined
    });
  }
  return pool;
}

export async function fetchBillingReport(
  options: FetchOptions
): Promise<BillingRow[]> {
  const { tenantId, periodKey } = options;
  const limit = Math.min(options.limit ?? 200, 1000);

  const clauses: string[] = [];
  const params: Array<string> = [];

  if (tenantId) {
    params.push(tenantId);
    clauses.push(`tenant_id::text = $${params.length}`);
  }
  if (periodKey) {
    params.push(periodKey);
    clauses.push(`period_key = $${params.length}`);
  }

  const where = clauses.length ? `where ${clauses.join(' and ')}` : '';

  const query = `
    select
      tenant_id::text as tenant_id,
      period_key,
      events_included,
      events_used,
      events_overage,
      screens_included,
      screens_used,
      screens_overage,
      checkins_included,
      checkins_used,
      checkins_overage
    from v_tenant_billing_report
    ${where}
    order by period_key desc, tenant_id
    limit ${limit}
  `;

  const result = await getPool().query<BillingRow>(query, params);
  return result.rows;
}

export async function fetchFilterOptions(): Promise<BillingFilterOptions> {
  const result = await getPool().query<{ period_key: string }>(
    `
      select distinct period_key
      from v_tenant_billing_report
      order by period_key desc
      limit 24
    `
  );
  return {
    periods: result.rows.map((row) => row.period_key)
  };
}

export function shutdownBillingPool(): Promise<void> {
  if (!pool) return Promise.resolve();
  const ending = pool.end();
  pool = null;
  return ending;
}

process.on('SIGTERM', () => {
  void shutdownBillingPool();
});

process.on('SIGINT', () => {
  void shutdownBillingPool();
});
