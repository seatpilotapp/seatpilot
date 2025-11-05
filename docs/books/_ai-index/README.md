# SeatPilot · Índice IA

Este directorio albergará los artefactos generados por los scripts de indexación (embeddings, prompts y versiones del modelo).

## Convenciones

- `YYYY-MM-DD_index.json` — vector store o payload exportado del script `library:build-index`.  
- `prompts/` — plantillas y ejemplos (`retrieval.md`, `answer.md`).  
- `README.md` — este documento; actúa como changelog sintetizado.

## Próximos pasos

1. Definir proveedor/modelo (OpenAI, Ollama, etc.) y parámetros.  
2. Implementar `scripts/library/build-index.ts` que:  
   - Lee `../_catalog/catalog.v1.json` y los resúmenes en `../_summaries/`.  
   - Genera embeddings + metadatos y los guarda en este directorio.  
3. Versionar cada ejecución y registrar en `../_catalog/ingest.log.md`.
