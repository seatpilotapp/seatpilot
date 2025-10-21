# QA Iconografía 24×24 — SeatPilot

- [ ] `viewBox="0 0 24 24"` y tamaño final 24×24 px.
- [ ] `stroke-width="1.5"`, `stroke-linecap="round"`, `stroke-linejoin="round"`.
- [ ] Sin `fill` fijo: usar `fill="none"` y `stroke="currentColor"`.
- [ ] Padding interno uniforme (mínimo 2 px); nada queda recortado.
- [ ] Nombre de archivo `sp-<nombre-kebab>.svg`, coincide con `sp-icons.manifest.json`.
- [ ] Optimizado con SVGO (`--enable=removeTitle,cleanupAttrs,convertPathData`).
- [ ] Prueba visual en 16 px, 20 px y 24 px sobre fondos claro/oscuro (contraste ≥ 3:1).
- [ ] Commit/PR referencia tokens o componentes afectados y adjunta preview.
