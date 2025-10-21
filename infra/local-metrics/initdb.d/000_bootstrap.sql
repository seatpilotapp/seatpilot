\echo '⏳ Preparing roles required by SeatPilot SQL'
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'postgres') THEN
    CREATE ROLE postgres WITH LOGIN SUPERUSER PASSWORD 'postgres';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
    CREATE ROLE anon NOLOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
    CREATE ROLE authenticated NOLOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'service_role') THEN
    CREATE ROLE service_role NOLOGIN;
  END IF;
END $$;

\echo '⏳ Applying core SeatPilot schema (001–003)'
\i /docker-entrypoint-initdb.d/sql/001_schema_core.sql
\i /docker-entrypoint-initdb.d/sql/002_policies_rls.sql
\i /docker-entrypoint-initdb.d/sql/003_views_kpi.sql
\if exists (:"?SUPABASE_EXTRA_SQL")
\i :SUPABASE_EXTRA_SQL
\endif
