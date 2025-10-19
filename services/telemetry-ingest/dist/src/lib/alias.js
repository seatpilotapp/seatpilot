import { createClient } from '@supabase/supabase-js';
import { withTimeout } from './timeout.js';
let supabase = null;
if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE) {
    supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);
}
let aliasOverrides = null;
export async function canonicalEventNameDB(name) {
    if (aliasOverrides) {
        return aliasOverrides.get(name) ?? name;
    }
    if (!supabase) {
        return name;
    }
    const { data, error } = await withTimeout(supabase.rpc('canonical_event_name', { _name: name }));
    if (error)
        throw error;
    return data ?? name;
}
export function configureAliasOverrides(map) {
    aliasOverrides = map ? new Map(Object.entries(map)) : null;
}
