import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { withTimeout } from './timeout.js';

let supabase: SupabaseClient | null = null;
if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE) {
  supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);
}

let aliasOverrides: Map<string, string> | null = null;

export async function canonicalEventNameDB(name: string): Promise<string> {
  if (aliasOverrides) {
    return aliasOverrides.get(name) ?? name;
  }

  if (!supabase) {
    return name;
  }

  const { data, error } = await withTimeout(
    supabase.rpc('canonical_event_name', { _name: name })
  );
  if (error) throw error;
  return data ?? name;
}

export function configureAliasOverrides(map: Record<string, string> | null) {
  aliasOverrides = map ? new Map(Object.entries(map)) : null;
}
