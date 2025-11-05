# TypeScript: Modern JavaScript Development — Plan Operativo

Este documento resume los puntos accionables extraídos del libro *TypeScript: Modern JavaScript Development* y cómo se conectan con la plataforma SeatPilot.

## 1. Fundamentos (Módulos 1–10 · pp. 10–318)

- **Automatización TypeScript**  
  - Consolidar `tsconfig.base.json` en la raíz con `strictNullChecks`, `noImplicitAny`, `noEmitOnError`, `sourceMap`, `experimentalDecorators` y `emitDecoratorMetadata`.  
  - Hacer que cada app/paquete (`apps/*`, `packages/seatdesigner-engine`, `services/*`) extienda este archivo y solo defina `outDir`, `module`, y entradas locales.  
  - Documentar el flujo `pnpm tsc -w` en la guía de contribución.

- **Runtime & Performance**  
  - Activar `inlineSourceMap` en builds de desarrollo para depurar zoom y render del editor.  
  - Utilizar `perf_hooks` de Node y perfiles V8 para medir latencia en servicios (`metrics`, `kiosk-pwa`).  
  - Registrar métricas P95/P99 después de cada release (integra con Prometheus).

- **Testing & Decorators**  
  - Añadir Mocha + Chai + NYC a `packages/seatdesigner-engine` y replicar preset en servicios.  
  - Usar `reflect-metadata` para decorar modelos y ejecutar validaciones centralizadas (DI ligero).

- **Arquitectura SPA**  
  - Separar controller/canvas/inspector en el editor aplicando patrón Mediator (event bus).  
  - Kiosko PWA: organizar rutas y componentes siguiendo patrones de controladores ligeros.

## 2. Design Patterns (Módulo 2 · pp. 350–580)

- **Herramientas y flujo**  
  - Normalizar comandos npm (`pnpm lint`, `pnpm test`, `pnpm build`) en todos los paquetes.  
  - Incluir Karma o Vitest para tests en navegador cuando haya UI pura.

- **Factories & Builders**  
  - Crear `WallFactory`, `DoorFactory` y `FurnitureBuilder` para instanciar geometrías en el editor sin constructores ad-hoc.  
  - Facilitar seed y fixtures para telemetría y pruebas.

- **Decorator Pattern**  
  - Extender paredes con características opcionales (pared curva, aislamiento, tags de accesibilidad) sin duplicar clases.

- **Mediator / Observer**  
  - Implementar un event bus central (`EditorEventBus`) que comunique canvas, inspector, guidance panel y barra de herramientas.  
  - Reutilizar patrón Observer en telemetría para activar notificaciones cuando cambien métricas P95.

- **SOLID / Arquitecturas JS/TS**  
  - Servicios `rsvp` y `metrics`: reorganizar controladores Express con `facade`/`proxy` para Slack, Prometheus y Supabase.  
  - Garantizar promesas tipadas y repositorios separados para cada fuente de datos.

## 3. Blueprints (Módulo 3 · pp. 582–720+)

- **Angular 2 Widget**  
  - Tomar el ejemplo de pronóstico del tiempo para construir widgets de kiosko (estado, bindings y estilos responsive).

- **Node/React/NativeScript**  
  - Tipar contratos API compartidos entre `services/*` y `apps/*` reutilizando interfaces.  
  - Revisar capítulos de WebSocket/chat para mejoras en la sincronización en tiempo real (occupancy dashboard).

- **Type Guards & FP**  
  - Aplicar type guards y tagged unions en geometrías (paredes, vértices, zonas) para reducir `any` y unificar validaciones.  
  - Considerar una capa Flux/Redux-ligera para el editor basada en acciones y stores tipados.

- **Casos de simulación (Pac-Man, FP)**  
  - Inspirarse en el motor 2D para futuras features de simulación (flujo de personas, animaciones en canvas).

## 4. Roadmap Inmediato

1. **Config TS centralizada**  
   - Crear `tsconfig.base.json`, actualizar paquetes y registrar el proceso en `docs/handoff/SeatPilot_Master_v1.0.md`.
2. **Pipeline de tests y cobertura**  
   - Configurar Mocha/Chai/NYC en `packages/seatdesigner-engine`, exportar preset reutilizable y añadir scripts `test`/`test:watch`.
3. **Decorators + reflect-metadata**  
   - Instalar `reflect-metadata`, habilitar decorators y crear un decorador `@ValidatedModel()` para contratos compartidos.

## 5. Próximas Iteraciones

- Documentar patrones en `docs/plan/patterns/` con ejemplos concretos (Factory, Decorator, Mediator).  
- Diseñar e implementar `EditorEventBus` para desacoplar canvas, inspector y paneles.  
- Adaptar el kiosko a un layout moderno (CSS Grid + variables) tomando el widget Angular como guía.  
- Refactorizar servicios Node (`rsvp`, `metrics`) aplicando patrones `facade` y `proxy`, con promesas tipadas y coverage mínimo.

## 6. Referencias

- Libro fuente: *TypeScript: Modern JavaScript Development* (Packt, 2016).  
- Repositorios: `apps/`, `packages/`, `services/`, `docs/runbooks/`.

---

> Esta guía se actualizará a medida que implementemos cada paso y obtengamos métricas de impacto (builds, lint, cobertura, P95).
