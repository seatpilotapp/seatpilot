\echo '⏳ Applying core SeatPilot schema (001–003)'
\i /docker-entrypoint-initdb.d/sql/001_schema_core.sql
\i /docker-entrypoint-initdb.d/sql/002_policies_rls.sql
\i /docker-entrypoint-initdb.d/sql/003_views_kpi.sql
\if exists (:"?SUPABASE_EXTRA_SQL")
\i :SUPABASE_EXTRA_SQL
\endif
