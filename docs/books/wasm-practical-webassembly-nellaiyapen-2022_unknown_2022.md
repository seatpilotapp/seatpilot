---
title: "Practical WebAssembly"
subtitle: "Explore the Fundamentals of WebAssembly"
author: "Sendil Kumar Nellaiyapen"
year: 2022
area: "WASM"
slug: "practical-webassembly"
source_pdf: "Book docs/Practical WebAssembly _ Explore the Fundamentals of -- Sendil Kumar Nellaiyapen -- 1, 2022 -- Packt Publishing - ebooks Account -- 9781838827465 -- ae70fd8951d8692e7fef90c525855e08 -- Anna’s Archive.pdf"
status: "seed"
tags: ["wasm", "runtime", "toolchain", "performance"]
---

# Practical WebAssembly — Notas de estudio

## Resumen corto
Guía práctica de WebAssembly: formato binario, toolchain, interoperabilidad con JS, memoria lineal y tuning de rendimiento. Base para portar núcleos críticos al navegador/Node.

## Índice de lectura (semilla)
1. WASM 101: módulos, memoria, imports/exports  
2. Toolchain (Emscripten, wasm-pack, wasm-bindgen)  
3. Interoperabilidad con JS (host bindings)  
4. Memoria, strings y arrays (views/offset)  
5. Debug, profiling y optimización (wasm-opt, twiggy)  
6. Casos de uso (algoritmos, multimedia, GIS)

> *TODO:* llenar páginas/capturas clave en el primer repaso.

## Aplicación a SeatPilot
- **Motor geométrico en WASM:** portar validaciones de anillos/pasillos para bajar p95.  
- **Puente JS↔WASM:** usar `serde_wasm_bindgen` y DTOs planos en mm.  
- **Preset build:** `wasm-pack build --target bundler` para Next/Vite.  
- **Perf runbook:** registrar p50/p95 por regla, comparar JS vs WASM con fixtures sintéticos.  
- **Telemetría:** enviar tiempos por regla (`rule_id`) al dashboard Prometheus.

## Glosario mínimo
- **Linear Memory**: buffer continuo compartido por WASM y JS.  
- **Host bindings**: funciones del host (JS) importadas por el módulo WASM.

## Cita (APA 7)
Nellaiyapen, S. K. (2022). *Practical WebAssembly*. Packt Publishing.
