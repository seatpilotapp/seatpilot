# SeatPilot · Design Tokens v0.1

El archivo `tokens.v0.1.json` expone la primera versión de tokens de diseño que deben consumirse desde los clientes web (kiosco, TV, Ops Live y Seat Designer). Los valores se basan en los lineamientos definidos en la Fase 0: tono **Sage + Caregiver**, contraste AA/AAA, targets grandes y microcopy claro.

## Estructura

- `seatpilot.brand` — Colores primarios/secundarios y estados.
- `seatpilot.surface` — Fondos y overlays para paneles/elevación.
- `seatpilot.text` — Jerarquía tipográfica (primario, secundario, muted).
- `seatpilot.spacing` / `radius` — Escalas modulares de 4 px.
- `seatpilot.typography` — Familias y tamaños base para kioscos/TV.
- `seatpilot.motion` — Duraciones/curvas para interacciones clave (`pinArrival`).
- `seatpilot.elevation` — Sombras para distintos niveles.
- `seatpilot.component` — Mappings para botones y tarjetas de KPIs.

## Uso recomendado

1. Consumir el JSON desde la carpeta `docs/product/` y generar variables CSS (`:root { --sp-color-brand-primary: … }`) o tokens de Tailwind.
2. Verificar contraste AA mínimo (`brand.primary` sobre `surface.panel` ≥ 4.5:1).
3. Mantener los valores en sincronía con el Design System (cuando se promueva a Fase 2, migrar a una pipeline automatizada).
4. Documentar cambios en `docs/history/<fecha>_tokens-changelog.md`.

> Nota: Estos valores sirven como punto de partida. Ajusta según pruebas de accesibilidad y feedback de pilotos antes de congelar la versión 1.0.
