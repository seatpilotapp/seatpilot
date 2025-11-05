---
title: "SeatPilot · Biblioteca Digital y Consulta Asistida por IA"
status: "v0.1"
owner: "Product Enablement · Edwin Santiago"
last_review: "2025-10-29"
tags: ["knowledge-base", "ai-assist", "documentation"]
---

# 1. Objetivo

Consolidar las 194 referencias técnicas en una biblioteca interna que:

- sea fácil de consultar durante el desarrollo (kiosko, Seat Designer, Ops, SRE);
- exponga metadatos homogéneos (autor, año, disciplinas, prioridad SeatPilot);
- permita búsquedas asistidas por IA sin perder trazabilidad hacia el texto fuente;
- soporte mantenimiento continuo (ingreso, depuración, auditorías trimestrales).

# 2. Estructura de la biblioteca

```
docs/books/
├── _catalog/            # Metadatos canónicos (YAML/JSON) + bitácora de ingestión
├── _summaries/          # Resúmenes curados y notas aplicadas a SeatPilot
├── _ai-index/           # Versiones de embeddings y prompts de consulta
├── library-plan.md      # Este plan de trabajo (vivirá como README maestro)
└── *.md                 # Archivos originales (PDF a Markdown) preservados
```

- `_catalog/catalog.v1.json`: listado maestro (autor, título, año, área, tags SeatPilot, ruta).  
- `_catalog/categories.yaml`: define taxonomías (UX, Seguridad, Eventos, Backend, etc.) y responsables.  
- `_catalog/ingest.log.md`: bitácora de altas/bajas y cambios relevantes (quién, cuándo, motivo).  
- `_summaries/template.md`: plantilla única para resúmenes (carátula, capítulos clave, aplicación SeatPilot, citas).  
- `_ai-index/README.md`: describe cómo se generan embeddings (`library:build-index`) y dónde se almacenan.

# 3. Flujo operativo

| Etapa | Responsable | Descripción |
| --- | --- | --- |
| **1. Registro** | Product Enablement | Alta del título en `catalog.v1.json` + asignación de categoría y prioridad (`critical`, `nice-to-have`). |
| **2. Ingesta** | Técnico asignado (por categoría) | Validar que el archivo `.md` existe, aplicar plantilla de resumen en `_summaries/`, registrar entrada en `ingest.log.md`. |
| **3. Indexación IA** | Data/AI | Ejecutar script `pnpm library:build-index` que genera embeddings y prompts; versionar salida en `_ai-index/YYYY-MM-DD.json`. |
| **4. Consulta** | Todo el equipo | Uso del comando `pnpm library:ask --q "..."` (cuando esté implementado) o lectura directa de `catalog.v1.json` + resúmenes. |
| **5. Auditoría trimestral** | Product Enablement + Tech Leads | Revisar duplicados, actualizaciones, relevancia y deuda de resúmenes. Documentar hallazgos en `ingest.log.md`. |

# 4. Automatizaciones previstas

| Script / Tarea | Descripción | Estado |
| --- | --- | --- |
| `scripts/library/build-catalog.ts` | Parsear `docs/books/*.md` y generar `catalog.v1.json` (hash, título, autor, año). | TODO |
| `scripts/library/build-index.ts` | Consumir el catálogo + resúmenes y producir embeddings (OpenAI, local LLM). | TODO |
| `pnpm library:ask` | CLI que permite consultas naturales (retrieval + respuesta con citación). | TODO |
| CI `library.yml` | Workflow que verifica formato de metadatos y presencia de resúmenes obligatorios. | TODO |

> Mientras los scripts se desarrollan, las operaciones se realizan de forma manual siguiendo este documento.

# 5. Gobernanza y roles

| Área | Responsable primario | Rol |
| --- | --- | --- |
| UX / Contenido | Edwin Santiago | Curaduría de libros de UX, accesibilidad y contenido. |
| Ingeniería (Frontend/Backend) | Tech Leads correspondientes | Validar resúmenes técnicos y tags de arquitectura. |
| SRE / Observabilidad | Equipo SRE | Mantener referencias de observabilidad, seguridad y DevOps. |
| Eventos / Venue Ops | Product Enablement | Priorizar literatura de operaciones y normativas. |
| Data / AI | Data Team | Definir taxonomías analíticas, generar embeddings y mantener prompt library. |

# 6. Hoja de ruta inmediata

1. **Normalizar catálogo**: poblar `catalog.v1.json` con los 194 títulos existentes y completar `categories.yaml` (owner, tags, prioridad).  
2. **Crear resúmenes críticos**: priorizar al menos 20 obras (IBC, Seat Designer, Observabilidad, RSVPs) usando la plantilla.  
3. **Implementar scripts mínimos**: generar catálogo y un índice IA básico (ej. embeddings OpenAI text-embedding-3-large).  
4. **Integrar verificación en CI**: validar que nuevas entradas tengan metadatos y (si son `critical`) resumen asociado.  
5. **Definir métricas de uso**: registrar consultas IA vs. lecturas directas para ajustar curaduría.

# 7. Guía rápida de contribución

1. Añadir libro → editar `catalog.v1.json` + `categories.yaml`.  
2. Crear resumen → copiar `_summaries/template.md`, completar contenido y referenciar el archivo original.  
3. Registrar cambio → agregar entrada en `_catalog/ingest.log.md`.  
4. (Cuando esté disponible) ejecutar `pnpm library:build-index` y `pnpm library:ask` para validar la indexación.  
5. Abrir PR con evidencias (diff del catálogo, nuevo resumen, entrada en el log).

# 8. Próxima revisión

- **Due date**: 2025-12-01 — evaluar avance del backlog (catálogo completo, scripts, consultas IA activas).  
- **Checklist revisión**: ¿Catálogo actualizado? ¿Resúmenes críticos completados? ¿Índice IA funcional? ¿Bitácora al día?

---

> Cualquier ajuste estructural debe reflejarse en este plan y comunicarse en el canal `#seatpilot-knowledge`.
