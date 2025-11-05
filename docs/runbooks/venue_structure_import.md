# SeatPilot · Runbook de importación de estructura (Venue Structure)

Guía operativa para digitalizar un venue existente, importar el plano al editor `apps/venue-structure`, validar cumplimiento normativo y dejar listo el **VenuePack** que consumen Seat-Designer y Ops Live. Está pensada para el equipo de Arquitectura/UX y los leads de operaciones que coordinan la documentación de recintos.

---

## 1. Objetivo del flujo

1. Levantar la información arquitectónica del recinto una sola vez.
2. Calibrar un underlay (imagen/PDF/SVG) con escala y norte verificables.
3. Vectorizar muros, puertas, rutas y fixtures críticos dentro del editor SeatPilot.
4. Ejecutar las validaciones ADA/IBC/NFPA integradas y documentar hallazgos.
5. Publicar el plano en `@seatpilot/venue-base` para reutilizarlo en futuros eventos.

---

## 2. Prerrequisitos

- **Accesos**: credenciales activas para `@seatpilot/venue-base` (headers `x-seatpilot-tenant` y `x-seatpilot-user`) y feature flag del editor.
- **Entorno local**: Node 18+, `pnpm`, Supabase en ejecución si se trabajará contra datos reales.
  ```bash
  pnpm --filter @seatpilot/venue-structure dev
  ```
- **Assets iniciales**:
  - Croquis o planos existentes (PDF/SVG/DXF) del venue.
  - Datos de aforo y uso (occupant load) validados por la sede.
  - Inventario de fixtures críticos: rampas, sanitarios accesibles, extintores, salidas, columnas.
- **Material de apoyo** (consulta obligatoria antes de iniciar):
  - [Floor Plan Drawing Manual](../plan/planos/Floor%20Plan%20Drawing%20Manual.pdf)
  - [Architecture Construction Floor Plan Checklist](../plan/planos/Architecture_Construction_Floor_Plan_Checklist.pdf)
  - [Floor Plan Symbols](../plan/planos/floor-plan-symbols.pdf)
  - [How to Read Plan](../plan/planos/How%20to%20Read%20Plan.pdf)
  - [Designing Better Maps](../books/Designing%20Better%20Maps.md)
  - [Building Codes ILLUSTRATED](../books/Building%20Codes%20ILLUSTRATED.md)
  - [Introduction to Crowd Science](../books/Introduction%20to%20Crowd%20Science%20-%20G%20Keith%20Still.md)

> Tip: Mantén estos documentos abiertos; el Guidance Panel del editor referencia los checklists y atajos relevantes durante la captura.

---

## 3. Paso a paso detallado

### Paso 0 · Planificación y agenda en sitio

1. Coordina con la sede una ventana sin público para medir y fotografiar.
2. Define alcance: qué plantas se cubrirán, altura libre, elementos temporales que deben omitirse.
3. Revisa el **checklist AIA** (`Architecture_Construction_Floor_Plan_Checklist.pdf`) y marca elementos requeridos para cada disciplina (arquitectura, MEP, seguridad).
4. Preasigna roles: mediciones (láser/cinta), registro fotográfico, transcriptor de notas y responsable de QA.

### Paso 1 · Levantamiento en campo

1. Realiza recorrido exterior → interior siguiendo la guía del [Floor Plan Drawing Manual](../plan/planos/Floor%20Plan%20Drawing%20Manual.pdf), sección “Site Walkthrough”.
2. Mide perímetro exterior, ubicando muros de referencia y ejes estructurales; documenta coordenadas relativas.
3. Captura puertas, ventanas y pendientes de rampas (sube y baja) con fotografías y notas claras. Usa la tabla de “Symbols & Conventions” del [Floor Plan Symbols](../plan/planos/floor-plan-symbols.pdf) para etiquetar.
4. Marca rutas accesibles y salidas de emergencia siguiendo la guía de [Introduction to Crowd Science](../books/Introduction%20to%20Crowd%20Science%20-%20G%20Keith%20Still.md) (capítulo “Egress & Flow”).
5. Documenta densidad y aforos parciales: toma notas para occupant load y clasificaciones IBC (ensamblaje, negocio, mercantil, etc.).

### Paso 2 · Normalizar el underlay

1. Consolida el boceto en un plano limpio (PDF/SVG). Si partes de papel, escanéalo a 300 dpi y corrige perspectiva.
2. En software CAD o vectorial, crea capas independientes para muros, puertas, mobiliario y anotaciones. Mantén el origen (0,0) en la esquina inferior izquierda del recinto principal.
3. Ajusta escala: orienta el dibujo a Norte real (usa brújula o datos de GIS) y define escala imperial o métrica según la sede.
4. Limpia elementos no estructurales (personas, ambientación) y conserva únicamente elementos fijos; esto simplifica la detección asistida dentro del editor.

> Referencia: [Designing Better Maps](../books/Designing%20Better%20Maps.md), capítulos “Basemaps” y “Layering”, para controlar jerarquía visual del underlay.

### Paso 3 · Crear o recuperar el plano en SeatPilot

1. Ejecuta el editor:
   ```bash
   pnpm --filter @seatpilot/venue-structure dev
   ```
2. Revisa si el venue ya existe en la biblioteca:
   - Desde la app, abre **Plan Library** y busca por nombre, tags o estado.
   - Si encuentras la versión adecuada, selecciónala y continúa con calibración.
3. Si no existe, crea un venue nuevo:
   - Completa nombre, dirección, tags y occupant load en el modal inicial.
   - Se generará un plan borrador con el underlay vacío listo para carga.

### Paso 4 · Calibrar escala, norte y metadatos

1. Importa el underlay (SVG, PDF en páginas vectorizadas o PNG calibrado) usando la opción **Importar underlay**.
2. Define dos puntos conocidos (ej. entre columnas estructurales) y registra la medida real; el grid del editor (40 px ≈ 1 ft) se ajustará automáticamente.
3. Ajusta la orientación al norte con el control correspondiente y registra el azimut en la ficha “Referencia norte”.
4. Completa metadatos en el **Guidance Panel**:
   - Título del plano (ej. “Sala Principal · Nivel 01”).
   - Número de dibujo (A-101), escala, notas y checkboxes de cotas, hatches, joists.
   - Asegúrate de marcar “Flecha de norte colocada” y “Dimensiones verificadas” al finalizar la calibración.

> Fuente normativa: [Building Codes ILLUSTRATED](../books/Building%20Codes%20ILLUSTRATED.md), capítulos 10 y 11 para referencias de egreso y accesibilidad que se documentan en metadatos.

### Paso 5 · Vectorizar la arquitectura básica

1. Dibuja la envolvente con la herramienta **Muros** (snap activo). Valida grosores y materiales en el inspector.
2. Inserta puertas, ventanas y aberturas; registra el swing y el clear width siguiendo ADA §404 (consulta el Guidance Panel).
3. Etiqueta salas y closets con nombres legibles y área prevista. Usa la ficha de sala para registrar ocupación y uso.
4. Añade rampas, sanitarios accesibles, extintores y rutas principales. Cada elemento debe portarse con propiedades completas (pendiente, tipo de extintor, etc.).
5. Si dispones de geometría vectorial del underlay, usa la herramienta “Detectar contornos” para convertir líneas en muros automáticamente y ajusta manualmente donde sea necesario.

### Paso 6 · Completar datos operativos

1. Pasa a la pestaña **Notas** del Guidance Panel y agrega observaciones (restricciones municipales, techos bajos, zonas con alfombra elevada).
2. En el inspector de venue, registra occupant load global y por zona (se usa en validación de anchos de corredor).
3. Adjunta fotografías clave (entradas, obstáculos permanentes) en el campo de enlaces de referencia si aplica.

### Paso 7 · Ejecutar validaciones y documentar resultados

1. Pulsa **Validar seguridad** para correr los validadores:
   - Puertas accesibles (ADA §404).
   - Ruta accesible (ADA Capítulo 4).
   - Giros de 1.52 m (ADA §304).
   - Rampas (ADA §405).
   - Corredores y egreso (IBC §1020, §1029).
   - Cobertura de extintores (OSHA 1910.157 / NFPA 10).
2. Revisa la lista de hallazgos; los errores se muestran en rojo, warnings en ámbar. Corrige la geometría o anota mitigaciones.
3. Guarda una captura (PDF o export JSON) con el overlay activo para anexarlo al expediente del venue.

> Complementa el análisis con [Introduction to Crowd Science](../books/Introduction%20to%20Crowd%20Science%20-%20G%20Keith%20Still.md) para estimar densidades seguras y justificar ajustes.

### Paso 8 · Publicar y versionar

1. Guarda el layout (`Guardar` para sobreescribir, `Guardar como…` para ramificar versiones).
2. Usa **Imprimir** para generar el paquete PDF:
   - Página 1: plano limpio multi-idioma (ES/EN).
   - Página 2: resumen técnico, checklist y métricas clave.
3. Cambia el estado del plan a `published` una vez revisado; el registro se envía a `@seatpilot/venue-base` con metadatos completos.
4. Documenta el release en `docs/history/` (añade entrada mencionando ID del plan y fecha) y adjunta el JSON exportado si se requiere auditoría.

---

## 4. Checklists rápidos

### 4.1 Antes de abandonar el sitio
- [ ] Todas las dimensiones claves capturadas (perímetro, puertas, rampas).
- [ ] Fotografías etiquetadas (entrada, ruta accesible, tablero eléctrico, backstage).
- [ ] Croquis con norte y escala anotados.
- [ ] Aforo preliminar validado con la administración.

### 4.2 Antes de publicar en SeatPilot
- [ ] Guidance Panel sin pendientes (todos los badges en “OK”).
- [ ] Validaciones de seguridad sin bloqueos rojos; warnings documentados.
- [ ] Metadata ocupacional (Load, uso IBC) completada.
- [ ] Overlay de egreso revisado y exportado.
- [ ] Revisión cruzada con [Building Codes ILLUSTRATED](../books/Building%20Codes%20ILLUSTRATED.md) y [Architecture Construction Floor Plan Checklist](../plan/planos/Architecture_Construction_Floor_Plan_Checklist.pdf).

---

## 5. Referencias complementarias

- [Designing Better Maps](../books/Designing%20Better%20Maps.md) — jerarquía visual y simbología para mapas y señalética digital.
- [Floor Plan Drawing Manual](../plan/planos/Floor%20Plan%20Drawing%20Manual.pdf) — metodología completa para levantamientos.
- [How to Read Plan](../plan/planos/How%20to%20Read%20Plan.pdf) — convenciones de lectura bidimensional y cortes.
- [Floor Plan Symbols](../plan/planos/floor-plan-symbols.pdf) — biblioteca de símbolos estandarizados que el editor replica.
- [Building Codes ILLUSTRATED](../books/Building%20Codes%20ILLUSTRATED.md) — interpretación práctica del IBC aplicado a rutas de egreso y accesibilidad.
- [Introduction to Crowd Science](../books/Introduction%20to%20Crowd%20Science%20-%20G%20Keith%20Still.md) — modelado de flujos y densidades para calibrar Door→Seat.
- [Designing Data-Intensive Applications](../books/Designing%20Data-Intensive%20Applications%20%28for%20%29.md) — referencia para versionado de VenuePacks y sincronización con Supabase.

---

## 6. Diccionario SeatPilot del Venue Structure

| Término | Definición práctica | Referencia |
| --- | --- | --- |
| **Underlay** | Imagen o vector de referencia calibrado (PDF/SVG/PNG) que se alinea en el editor para copiar geometría con escala real. | Paso 2 del runbook; [Designing Better Maps](../books/Designing%20Better%20Maps.md) |
| **VenuePack** | Paquete JSON publicado por `@seatpilot/venue-base` que incluye geometría, metadatos, ocupación y estado del plano para reutilizar en eventos futuros. | Paso 8; `services/venue-base` |
| **Plan Library** | Módulo del editor que lista planos existentes por tenant, permitiendo buscar y versionar (`draft`, `published`, `archived`). | Paso 3; `apps/venue-structure/src/components/PlanLibrary.tsx` |
| **Guidance Panel** | Panel lateral con checklist de carátula, metadatos y flujo de levantamiento, alimentado por los documentos de planos (`docs/plan/planos/`). | Paso 4; `apps/venue-structure/src/components/GuidancePanel.tsx` |
| **Occupant Load** | Capacidad máxima permitida de personas por zona/venue según código (IBC); se usa para validar anchos de corredor y salidas. | Paso 1 y 6; [Building Codes ILLUSTRATED](../books/Building%20Codes%20ILLUSTRATED.md) |
| **Ruta accesible** | Trayecto continuo libre de obstáculos con ancho ≥ 36″ (914 mm) y radios de giro ≥ 60″, exigido por ADA. | Paso 7; ADA Cap. 4 · [A Web for Everyone](../books/A%20Web%20for%20Everyone%20Designing%20Accessible%20User%20Experiences%20%282014%29%20-%20Sarah%20Horton,%20Whitney%20Quesenbery,%20Aaron%20Gustafson.md) |
| **Overlay de egreso** | Capa visual que colorea rutas y corredores según cumplimiento (verde, ámbar, rojo) para auditorías de seguridad. | Paso 7; `apps/venue-structure` validador |
| **Extintor (Clase A/B)** | Dispositivo de supresión de incendios; la distancia de viaje máxima (75 ft / 50 ft) define círculos de cobertura en el editor. | Paso 7; OSHA 1910.157 |
| **Ramp slope** | Relación pendiente altura/longitud (1:12 máximo aceptable en ADA); el inspector exige documentar `rise` y `run`. | Paso 7; ADA §405 |
| **Seat Designer** | Módulo que usa el VenuePack para generar layouts de sillas/mesas con validaciones de seguridad e informes imprimibles. | Objetivo general; `apps/seat-designer` |
| **Door→Seat** | Métrica operativa SeatPilot que mide tiempo desde check-in hasta asiento asignado; depende de rutas y layouts validados. | Sección 1; `apps/metrics-api` |
| **Tenant** | Cliente (venue o promotor) identificado por UUID; define aislamiento de datos en Supabase (RLS). | Prerrequisitos; `supabase/sql/002_policies_rls.sql` |

> Usa este diccionario en handoffs con nuevos miembros del equipo o proveedores externos para garantizar lenguaje común.

---

## 7. Historial

| Fecha | Autor | Notas |
| --- | --- | --- |
| 2025-10-30 | Equipo Plataforma SeatPilot | Documento inicial basado en la consolidación del blueprint del Venue Structure Editor e integración del Guidance Panel bilingüe. |
