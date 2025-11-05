# SeatPilot · Venue Structure Editor (alpha)

Primer boceto del editor estructural que se usará para digitalizar venues antes de pasar al Seat Designer. El módulo corre como app React (Vite) y, por ahora, incluye:

- Lienzo SVG con grid, historial básico y snapping (40 px ≈ 1 ft).  
- Herramienta de paredes con modo boceto (click para puntos, `Enter` para terminar, `Esc` para cancelar, `Backspace` retrocede el último punto).  
- Barra de herramientas (Select/Walls) y panel de propiedades editable (ancho, material, fire rating, etiqueta ADA).  
- Status bar con instrucciones + coordenadas actuales.  
- Placeholder para el motor de validaciones (se integrará con las reglas ADA/IBC).

## Scripts

```bash
pnpm --filter @seatpilot/venue-structure dev
pnpm --filter @seatpilot/venue-structure build
pnpm --filter @seatpilot/venue-structure preview
```

### Variables de entorno

El editor ahora consume la API de `@seatpilot/venue-base`. Configura un archivo
`apps/venue-structure/.env` con al menos:

```
VITE_VENUE_BASE_URL=http://localhost:4300
VITE_TENANT_ID=<uuid-del-tenant>
VITE_USER_ID=<uuid-del-usuario-opcional>
```

Si no existe un venue/plan, el editor creará uno de ejemplo automáticamente y
guardará el layout (y los metadatos) usando los endpoints `/api/venues` y
`/api/plans`.

## Próximos pasos

1. Integrar validador geométrico (aisle width, door clear width, pendientes) y mostrar overlays rojo/ámbar.  
2. Añadir herramientas puertas/zonas, mover/eliminar vértices y soporte de arcos.  
3. Permitir importar SVG/DXF calibrado y exportar `venue-pack.json` + reporte de cumplimiento.  
4. Conectar con Supabase para versionado por tenant y handoff al Seat Designer.
