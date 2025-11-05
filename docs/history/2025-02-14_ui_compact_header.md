# SeatPilot · UI Compact Header & Panel Refine (2025-02-14)

## Resumen ejecutivo
- Se normalizó el sistema de espaciados/colores (tokens CSS) y se introdujo un encabezado compacto con menús desplegables para guardar/exportar.
- Se mejoró el flujo de inserción (autofocus, tamaños persistentes, recientes) y se añadió telemetría mínima.
- Inspector y panel de datos ahora son plegables, con controles distribuidos en rejilla para trabajar sin scroll.
- Chips de overlays se reposicionaron respetando el lienzo, y se muestra un semáforo global de validación.

## Cambios detallados
1. **Tokens visuales**
   - Archivo nuevo `apps/venue-structure/src/styles/tokens.css`, importado desde `src/main.tsx`.
   - Define `--header-h`, `--space-*`, colores muted y separadores; asegura tap-target ≥ 48 px en botones (`.btn`, `.chip`, `.icon-cell`).

2. **Header simplificado**
   - Nuevo componente `components/AppHeader.tsx` + estilos en `styles.css`.
   - Estructura: `Breadcrumb` (venue/plan), botón “Insertar ⌘K” y menús `Guardar▾`, `Exportar▾`, `Más▾`, select de idioma, estado de validación/guardado.
   - Scroll/click fuera cierra menús; teclas Esc también.

3. **InsertMenu refinado**
   - Autofoco con selección del contenido; tamaño S/M/L persistido en `localStorage`.
   - Reset de búsqueda al abrir, notificación a telemetría (`insert_search`).

4. **Inspector Renovado**
   - Tab *Arrange* en rejilla 2×N con inputs de ancho/alto/posiciones convertidos a cm/in y step configurado.
   - Botones “Copiar estilo” y “Pegar estilo” (anchura/profundidad/rotación) con estado compartido en `App.tsx`.
   - Panel plegable vía botón lateral (`inspector.css`); mantiene atajo Esc.

5. **Guidance Panel plegable**
   - `GuidancePanel.tsx` reescrito: botón collapse, contenido agrupado en sección reutilizable.
   - `GuidancePanel.css` agrega estado `guidance--collapsed`.

6. **Chips y badge global**
   - `OverlayChips` reposicionado al centro superior; min-width/height 48 px.
   - Badge `OK/Avisos/Bloqueos` alineado a la derecha (`overlays.css`).
   - `App.tsx` pasa `validation?.status` como `status`.

7. **Otros ajustes**
   - Se eliminó `InsertDock` y handlers relacionados.
   - Se añadieron estados `inspectorCollapsed` y `guidanceCollapsed` en `App.tsx`.

## Verificación
```bash
pnpm --filter @seatpilot/venue-structure build     # comprobación TS + Vite
```
Manual:
1. `pnpm --filter @seatpilot/venue-structure dev` y abrir `http://localhost:4173`.
2. Pulsa ⌘K → modal con foco inmediato; cambia tamaño S/M/L y cierra.
3. Usa botones Guardar▾/Exportar▾/Más▾ y verifica cierre al hacer clic fuera.
4. Activa chips Aforo/Pasillos/PMR/Safety y observa badge global.
5. Colapsa/expande inspector y panel de datos; comprueba que el lienzo crece.
6. Coloca mobiliario, copia estilo y pégalo en otro elemento.

## Archivos clave
- `apps/venue-structure/src/main.tsx`
- `apps/venue-structure/src/styles/tokens.css`, `src/styles.css`
- `apps/venue-structure/src/components/AppHeader.tsx`
- `apps/venue-structure/src/components/insert/InsertMenu.tsx`
- `apps/venue-structure/src/components/inspector/InspectorTabs.tsx`, `inspector/inspector.css`
- `apps/venue-structure/src/components/GuidancePanel.tsx`, `GuidancePanel.css`
- `apps/venue-structure/src/components/overlays/OverlayChips.tsx`, `overlays.css`
- `apps/venue-structure/src/App.tsx`
