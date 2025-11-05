import init, { validate_plan_json } from './pkg/seatdesigner_engine.js';

const wasmModule = new URL('./pkg/seatdesigner_engine_bg.wasm', import.meta.url);
let wasmReady = null;

export async function ensureWasm() {
  if (!wasmReady) {
    wasmReady = init({ module_or_path: wasmModule });
  }
  await wasmReady;
}

export async function validatePlan(planJson) {
  await ensureWasm();
  const raw = validate_plan_json(planJson);
  return JSON.parse(raw);
}
