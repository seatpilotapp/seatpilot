import pgPromise from 'pg-promise';

const pgp = pgPromise();
pgp.pg.defaults.ssl = { rejectUnauthorized: false };

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL missing for kpi-refresher');
}

export const db = pgp({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
