# SDK Integration Checklist (Telemetry Fase 0)

## Objetivo

Garantizar que `@seatpilot/domain-model` sea el origen único de enums y helpers, y que los SDKs (`sdk-js`, `sdk-server`) los expongan sin divergencias.

## Pasos recomendados

1. **Dependencias**  
   - Declara `@seatpilot/domain-model` como dependencia workspace en `packages/sdk-js/package.json` y `packages/sdk-server/package.json`.  
   - Asegúrate de publicar `dist/` en ambos paquetes (`files` o `.npmignore`).

2. **Build + exports**  
   - Añade scripts de build dual (`tsconfig.build.json` ESM y `tsconfig.cjs.json` CJS) con `npm run build`.
   - Configura `package.json` para exportar `./dist/index.js` (ESM) y `./dist/index.cjs` (CJS), además de `./dist/index.d.ts`.

3. **Re-exportar enums**  
   ```ts
   // packages/sdk-js/src/index.ts
   export * from '@seatpilot/domain-model';

   // packages/sdk-server/src/index.ts
   export * from '@seatpilot/domain-model';
   ```

4. **Tests**  
   - Añade pruebas que validen que `APP_CHANNEL`, `STATUS_EXIT`, etc., contienen los valores esperados y que `assertEnum` lanza `INVALID_ENUM`.

5. **Publicación**  
   - `pnpm build --filter @seatpilot/sdk-js` (similar para `sdk-server`).  
   - `pnpm version <tipo>` y `pnpm publish --filter <pkg>` (o flujo equivalente).

6. **Verificación**  
   - En un proyecto consumidor, `import { APP_CHANNEL } from '@seatpilot/sdk-js';`  
   - Ejecuta contract tests (`npm run test:contract`) para garantizar compatibilidad con la ruta de ingestión.

Con esto, ambos SDKs comparten la misma fuente de enums y el helper `assertEnum`, cumpliendo la DoD de Telemetría Fase 0.
