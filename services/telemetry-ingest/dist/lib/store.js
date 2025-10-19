import { createClient } from '@supabase/supabase-js';
let supabase = null;
if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE) {
    supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);
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
const supabaseStore = supabase
    ? {
        async upsertEventsRaw(row) {
            const { error } = await supabase
                .from('telemetry.events_raw')
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
            }, { onConflict: 'tenant_id,event_id' });
            if (error)
                throw error;
        },
        async insertDLQ(reason, raw, headers) {
            const { error } = await supabase.from('telemetry.events_dlq').insert({ reason, raw, headers });
            if (error)
                throw error;
        },
        async trackAliasUse(legacy, canonical, tenant) {
            const { error } = await supabase
                .from('telemetry.event_alias_usage')
                .insert({ legacy_name: legacy, canonical_name: canonical, tenant_id: tenant });
            if (error)
                throw error;
        }
    }
    : null;
let adapter = supabaseStore ?? memoryStore;
export function configureStoreAdapter(override) {
    adapter = override ?? (supabaseStore ?? memoryStore);
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
