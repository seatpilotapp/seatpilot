# ADR-0004: Brand Center Governance (tokens + iconos)

**Status:** Proposed  
**Date:** 2025-10-20  
**Decision drivers:** coherencia AA/AAA, escalabilidad multi-app (web/PWA/kiosco/TV), control de cambios.

## Contexto
Tenemos `brand/tokens.json` v0.1.0 (core/semantic/component) y `brand/icons/` con manifest v0.3.0 y CI de validación. Faltaba formalizar reglas de versionado, puertas de calidad y proceso de rollout.

## Decisión
1) **Estructura tokens**  
   - `core`: color, tipo, espacio, radii, z, motion.  
   - `semantic`: roles (info/success/warn/error), estados (hover/pressed/disabled), surface/elevation.  
   - `component`: presets de Button/Badge/Input (usa solo refs `core`/`semantic`).
2) **SemVer**  
   - **patch**: ajustes no-ruptura (valores). **minor**: agrega tokens/íconos. **major**: borra/renombra.
3) **A11y gates**  
   - Contraste mínimo AA texto 4.5:1, componentes 3:1. Lint en CI con reporte.
4) **Iconos**  
   - SVG 24×24, `stroke=1.5`, `round cap/join`, `fill=none`, `stroke=currentColor`.  
   - `sp-icons.manifest.json`: `name`, `category`, `tags`, `status` (active/pending/deprecated), `variants` opcional.
5) **Proceso PR**  
   - Completar `docs/governance/PR_TEMPLATE.md` + mosaico visual + `npm run brand:icons:lint`.  
   - No borrar íconos/tokens sin consenso (issue + aprobación de diseño y front).
6) **Rollout**  
   - Publicar `brand/tokens.json` y manifest como paquete interno; changelog por versión.  
   - Apps consumen versión pinneada; upgrade via PR con check de AA + screenshots.

## Consecuencias
+ Consistencia y trazabilidad; – Cambios mayores requieren coordinación multi-app.

## Links
- `brand/tokens.json`, `brand/icons/sp-icons.manifest.json`, `.github/workflows/brand.yml`, `docs/governance/PR_TEMPLATE.md`
