# Iconografía SeatPilot (24×24)

- Grid base: 24 px.
- Stroke: 1.5 px (alineado con `brand/tokens.json`).
- Exportar en SVG sin atributos de relleno inline; usar `fill="none"` y `stroke="currentColor"`.
- Nomenclatura `sp-<nombre>.svg` (ej. `sp-check.svg`, `sp-alert.svg`).
- Mantener padding uniforme (≥ 2 px) para evitar recortes en kioscos/TV.
- Lista mínima de íconos y cobertura en `sp-icons.manifest.json`.
- Checklist de QA disponible en `QA_ICON_CHECKLIST.md`.

### Cobertura actual (v0.2.0)
| Icono | Uso principal |
| --- | --- |
| `sp-dancefloor-panels` | Plano de pista / montaje |
| `sp-stage-4x4`, `sp-stage-4x8` | Escenarios modulares |
| `sp-tent` | Carpas / estructuras temporales |
| `sp-dj`, `sp-band` | Zonas técnicas de sonido/música |
| `sp-cake-table`, `sp-gift-table` | Mesas especiales (tarta/regalos) |
| `sp-chair-row` | Seating tipo teatro/ceremonia |
