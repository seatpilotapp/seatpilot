# ADR-0003 — Gobernanza de Design Tokens (core/semantic/component)

- Estado: Accepted
- Fecha: 2025-10-20
- Decisores: Brand Steward · UX Lead · Eng Lead
- Relacionados: ADR-0001 (HMAC), ADR-0002 (RLS), `brand/tokens.json` v0.1.0, `docs/handoff/SeatPilot_Master_v1.0.md`

## Contexto
SeatPilot adopta un Brand Center único (`brand/tokens.json`) para Admin, Web, Signage y futuras PWA/Desk. El handoff maestro ya establece la necesidad de tokens, iconografía 24×24 y gates AA/AAA, pero faltaba formalizar la gobernanza para evitar divergencias entre diseño y código.

## Decisión
1. **Estructura canónica**
   - `core.*` = valores físicos (colores hex, spacing, radius, motion, tipografía).
   - `semantic.*` = alias con intención (`color.intent.success`, `surface.elevated`, `text.primary`) referenciando solo `core.*`.
   - `component.*` = mapas por componente/estado (`button.primary.bg.default`, `badge.warning.border`) referenciando solo `semantic.*`.
2. **Versionado (SemVer)**
   - `MAJOR`: cambia significado/semántica o remueve tokens.
   - `MINOR`: agrega tokens o estados adicionales.
   - `PATCH`: corrige valores en `core` sin romper contrastes mínimos AA.
3. **Accesibilidad (gates obligatorios)**
   - Todos los tokens que afecten UI deben cumplir **WCAG 2.1 AA** (texto normal ≥ 4.5:1; texto grande ≥ 3:1; focus ring ≥ 3:1).
   - Estados `:hover`, `:pressed`, `:disabled` deben respetar el contraste mínimo.
   - Tokens `motion.*` respetan `prefers-reduced-motion`.
4. **Build & entrega**
   - Compilar tokens vía *style-dictionary* (o equivalente) a: `dist/css/variables.css` (`--sp-*`), `dist/ts/tokens.ts`, `dist/json/tokens.json`.
   - Publicar paquete `@seatpilot/tokens` versionado con SemVer.
   - CI valida `brand/tokens.json` con JSON Schema + reporte de contraste sobre `component.*`.
5. **Tematización**
   - `themes/default.json` se considera base; temas por tenant solo pueden sobrescribir `semantic.*` y deben pasar los mismos gates AA.
6. **Control de cambios**
   - PRs con cambios de tokens adoptan etiqueta `[tokens]`, adjuntan captura “antes/después” y reporte de contraste (`contrast-report.md`).
   - `SeatPilot_Master_v1.0` debe reflejar la versión vigente y cambios relevantes.
7. **Deprecación**
   - Tokens deprecados mantienen alias 1 versión `MINOR` con warning en `tokens.ts`.
   - Se elimina en la siguiente `MAJOR`.

## Consecuencias
- Builds FE/Signage reciben variables estables y pasan gates de accesibilidad.
- Permite introducir temas (dark/high contrast) sin reescribir componentes.
- Cualquier degradación de contraste bloquea el pipeline.

## Alternativas consideradas
- Variables CSS manuales en cada app → alto riesgo de desalineación.
- Solo niveles `core` + `semantic` → pierde trazabilidad de estados y dificulta lint QA.

## Medición
- Lighthouse/Axe ≥ 95 en vistas clave.
- Regresiones visuales críticas < 1 por release (visual diff).

## Implementación
1. Mantener `brand/tokens.json` actualizado (SemVer).
2. Ejecutar `pnpm tokens:build` (o comando equivalente) y publicar paquete.
3. Incluir `tokens:contrast-check` en CI (falla si `< 4.5:1`).
4. Actualizar handoff maestro y changelog del Brand Center con cada cambio.
