import fs from 'node:fs';
import pgPromise, {
  type IDatabase,
  type IInitOptions,
  type IMain,
  type ITask
} from 'pg-promise';
import { missingTenant } from './errors.js';

const initOptions: IInitOptions = {
  capSQL: true,
  error(error: unknown) {
    console.error('[venue-base] pg-promise error', error);
  }
};

const pgp: IMain = pgPromise(initOptions);

const poolMaxEnv = process.env.PG_POOL_MAX;
const poolIdleEnv = process.env.PG_IDLE_TIMEOUT_MS;
const poolMax = poolMaxEnv ? Number.parseInt(poolMaxEnv, 10) : Number.NaN;
const idleTimeout = poolIdleEnv ? Number.parseInt(poolIdleEnv, 10) : Number.NaN;

const defaults = pgp.pg.defaults as unknown as { max?: number; idleTimeoutMillis?: number };
defaults.max = Number.isFinite(poolMax) && poolMax > 0 ? poolMax : 10;
defaults.idleTimeoutMillis = Number.isFinite(idleTimeout) && idleTimeout > 0 ? idleTimeout : 30_000;

const DATABASE_URL = process.env.DATABASE_URL ?? process.env.SUPABASE_DB_URL ?? process.env.SUPABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required for @seatpilot/venue-base');
}

const sslMode = (process.env.PG_SSL_MODE ?? process.env.PG_SSLMODE ?? '').toLowerCase();
const sslCaPath = process.env.PG_SSL_CA_PATH;

let ssl: Record<string, unknown> | null = null;

if (sslMode !== 'disable') {
  if (sslCaPath) {
    try {
      const ca = fs.readFileSync(sslCaPath, 'utf8');
      ssl = { ca, rejectUnauthorized: true };
    } catch (error) {
      console.warn(`[venue-base] Unable to read PG_SSL_CA_PATH=${sslCaPath}:`, error);
      ssl = { rejectUnauthorized: false };
    }
  } else if (sslMode === 'require') {
    ssl = { rejectUnauthorized: true };
  } else {
    // Default for local/self-signed: accept connection but keep TLS on.
    ssl = { rejectUnauthorized: false };
  }
}

const connection: Record<string, unknown> = {
  connectionString: DATABASE_URL,
  application_name: process.env.PG_APP_NAME || '@seatpilot/venue-base'
};

if (ssl !== null) {
  connection.ssl = ssl;
}

export const db: IDatabase<unknown> = pgp(connection);
export const pgpInstance = pgp;

export async function withTenant<T>(tenantId: string | undefined, fn: (conn: ITask<unknown>) => Promise<T>) {
  if (!tenantId) {
    throw missingTenant();
  }

  return db.tx(async (task) => {
    await task.query("select set_config('app.tenant_id', $1, true)", [tenantId]);
    return fn(task);
  });
}
