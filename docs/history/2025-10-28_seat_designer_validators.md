# 2025-10-28 · Seat-Designer · Validadores mínimos

## Cambios clave
- Se creó el paquete `@seatpilot/seatdesigner-engine` con validadores geométricos y utilidades:
  - `validateRingClearance` con tabla ADA (48"→9 ft, 60"→10 ft, 72"→11 ft) y radio de pasillo configurable.
  - `validateAdaNoPlace` para zonas ADA (aisles, stage, entry).
  - `applySeparationFix` (separación 0.8 m) y `shouldBlockExport` con override opcional.
- Soporte para overlays (radio del pasillo) y gating configurable (`hardBlock`/`overrideAccepted`).
- Pruebas unitarias Vitest (`pnpm --filter @seatpilot/seatdesigner-engine test`) cubren:
  - Detección de clearance insuficiente.
  - Overrides personalizados y tolerancias.
  - Fix de separación ≥0.8 m.
  - Bloqueo ADA y política de override.

## Evidencia
- `pnpm --filter @seatpilot/seatdesigner-engine test`
  ```
  ✓ tests/validators.spec.ts  (6 tests)
  ```
- `pnpm -r run build` compila el paquete y dependencias.
- Tabla `billing_processed` sin errores posteriores a la prueba Stripe (ver runbook).

## Consideraciones
- El gate de exportación es opcional: `hardBlock=false` + `overrideAccepted=true` permite continuar mostrando resumen de códigos.
- Los overlays devuelven el radio sugerido en milímetros para renderizar en SeatDesigner.
- Futuras iteraciones: mover reglas a WASM (`seatpilot-geo`) y compartir con server export.
