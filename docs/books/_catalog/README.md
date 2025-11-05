# SeatPilot · Catálogo de Biblioteca

Este directorio centraliza los metadatos de cada título presente en `docs/books/`.

## Archivos

- `catalog.v1.json` — listado maestro (hash, título, autor, año, área, prioridad, ruta).  
- `categories.yaml` — taxonomías oficiales y responsables.  
- `ingest.log.md` — bitácora de altas/bajas y auditorías.

## Lineamientos

1. Toda obra debe tener registro en `catalog.v1.json` antes de publicar resúmenes o generar embeddings.  
2. Los cambios deben acompañarse de una entrada en `ingest.log.md` (fecha, autor, motivo).  
3. Mantener consistencia de campos: usar ISO-8601 para fechas, `snake_case` para tags, `critical|standard|legacy` para prioridad.

Consulta la guía completa en `../library-plan.md`.
