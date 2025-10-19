import { createClient } from '@supabase/supabase-js';
import { Pool } from 'pg';
import { withTimeout } from './timeout.js';
let supabase = null;
let supabaseTelemetry = null;
if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE) {
    supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);
    supabaseTelemetry = supabase.schema('telemetry');
}
let pgPool = null;
if (process.env.SUPABASE_DB_URL) {
    pgPool = new Pool({
        connectionString: process.env.SUPABASE_DB_URL,
        ssl: { rejectUnauthorized: false }
    });
}
const memoryStore = (() => {
    const events = new Map();
    const dlq = [];
    const aliasUsage = [];
    const adapter = {
        async upsertEventsRaw(row) {
            const key = row.event_id
                ? `${row.tenant_id}:${row.event_id}`
                : `${row.tenant_id}:${row.session_id}:${row.event_name}:${row.ts_ms}`;
            events.set(key, row);
        },
        async insertDLQ(reason, raw, headers) {
            dlq.push({ reason, raw, headers });
        },
        async trackAliasUse(legacy, canonical, tenant) {
            aliasUsage.push({ legacy, canonical, tenant });
        },
        resetEvents() {
            events.clear();
        },
        resetDlq() {
            dlq.length = 0;
        },
        resetAliasUsage() {
            aliasUsage.length = 0;
        },
        getEvents() {
            return Array.from(events.values());
        },
        getDlq() {
            return [...dlq];
        },
        getAliasUsage() {
            return [...aliasUsage];
        }
    };
    return adapter;
})();
const pgStore = pgPool
    ? {
        async upsertEventsRaw(row) {
            const query = `
          insert into telemetry.events_raw
            (tenant_id, schema_version, event_id, event_name, ts_ms, session_id, guest_id_hash, event_meta, payload, sig_ok)
          values
            ($1, $2, $3, $4, $5, $6, $7, $8::jsonb, $9::jsonb, $10)
          on conflict (tenant_id, event_id) do update
          set schema_version = excluded.schema_version,
              event_name = excluded.event_name,
              ts_ms = excluded.ts_ms,
              session_id = excluded.session_id,
              guest_id_hash = excluded.guest_id_hash,
              event_meta = excluded.event_meta,
              payload = excluded.payload,
              sig_ok = excluded.sig_ok
        `;
            await withTimeout(pgPool.query(query, [
                row.tenant_id,
                row.schema_version,
                row.event_id,
                row.event_name,
                row.ts_ms,
                row.session_id,
                row.guest_id_hash ?? null,
                JSON.stringify(row.event_meta ?? {}),
                JSON.stringify(row.payload ?? {}),
                row.sig_ok ?? false
            ]), 3000);
        },
        async insertDLQ(reason, raw, headers) {
            const query = `
          insert into telemetry.events_dlq (reason, raw, headers)
          values ($1, $2::jsonb, $3::jsonb)
        `;
            await withTimeout(pgPool.query(query, [
                reason,
                JSON.stringify(raw ?? {}),
                JSON.stringify(headers ?? {})
            ]), 3000);
        },
        async trackAliasUse(legacy, canonical, tenant) {
            const query = `
          insert into telemetry.event_alias_usage (legacy_name, canonical_name, tenant_id)
          values ($1, $2, $3)
        `;
            await withTimeout(pgPool.query(query, [legacy, canonical, tenant ?? null]), 3000);
        }
    }
    : null;
const supabaseStore = supabaseTelemetry
    ? {
        async upsertEventsRaw(row) {
            const { error } = await withTimeout(supabaseTelemetry
                .from('events_raw')
                .upsert({
                tenant_id: row.tenant_id,
                schema_version: row.schema_version,
                event_id: row.event_id,
                event_name: row.event_name,
                ts_ms: row.ts_ms,
                session_id: row.session_id,
                guest_id_hash: row.guest_id_hash ?? null,
                event_meta: row.event_meta ?? {},
                payload: row.payload ?? {},
                sig_ok: true
            }, { onConflict: 'tenant_id,event_id' }), 3000);
            if (error)
                throw error;
        },
        async insertDLQ(reason, raw, headers) {
            const { error } = await withTimeout(supabaseTelemetry.from('events_dlq').insert({ reason, raw, headers }), 3000);
            if (error)
                throw error;
        },
        async trackAliasUse(legacy, canonical, tenant) {
            const { error } = await withTimeout(supabaseTelemetry
                .from('event_alias_usage')
                .insert({ legacy_name: legacy, canonical_name: canonical, tenant_id: tenant }), 3000);
            if (error)
                throw error;
        }
    }
    : null;
let adapter = pgStore ?? supabaseStore ?? memoryStore;
export function configureStoreAdapter(override) {
    adapter = override ?? (pgStore ?? supabaseStore ?? memoryStore);
}
export async function upsertEventsRaw(row) {
    await adapter.upsertEventsRaw(row);
}
export async function insertDLQ(reason, raw, headers) {
    await adapter.insertDLQ(reason, raw, headers);
}
export async function trackAliasUse(legacy, canonical, tenant) {
    if (adapter.trackAliasUse) {
        await adapter.trackAliasUse(legacy, canonical, tenant);
    }
}
export function resetStoreForTests() {
    adapter = memoryStore;
    adapter.resetEvents && adapter.resetEvents();
    adapter.resetDlq && adapter.resetDlq();
    adapter.resetAliasUsage && adapter.resetAliasUsage();
}
export function getEventsForTests() {
    return adapter.getEvents ? adapter.getEvents() : memoryStore.getEvents();
}
export function getDlqForTests() {
    return adapter.getDlq ? adapter.getDlq() : memoryStore.getDlq();
}
export function getAliasUsageForTests() {
    return adapter.getAliasUsage ? adapter.getAliasUsage() : memoryStore.getAliasUsage();
}
// Returns current DLQ count. If adapter exposes getDlq, use it; otherwise
// fall back to querying Postgres pool directly if available. This keeps a
// single exported helper for metrics collectors.
export async function getDlqCount() {
    try {
        if (adapter.getDlq) {
            const rows = adapter.getDlq();
            return Array.isArray(rows) ? rows.length : 0;
        }
    }
    catch (e) {
        // ignore and try pgPool
    }
    if (pgPool) {
        const res = await withTimeout(pgPool.query('select count(*)::int as n from telemetry.events_dlq'), 2000);
        return res.rows?.[0]?.n ?? 0;
    }
    // last resort: no adapter support and no pool -> 0
    return 0;
}
