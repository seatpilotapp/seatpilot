# SeatPilot · SeatDesigner Engine (WASM)

Core validation engine for the Venue Base Designer. The crate is written in Rust and exposes
validation helpers (compiled to WebAssembly via `wasm-bindgen`) together with a pure Rust API for
CLI/batch jobs.

### Current status

* Validates the base `plan.json` contract.
* Emits issues with severity (`info|warn|error`) and an aggregated status (`ok|warn|error`).
* Provides a Wasm entrypoint (`validate_plan_json`) ready to be consumed from TypeScript.

### Building

```bash
cargo test
cargo build --release --target wasm32-unknown-unknown
```

When the Wasm bundle is consumed from JS, use `wasm-bindgen --target bundler` (or via
`wasm-pack build --target bundler`) and expose the generated JS helper inside the SeatPilot
PWA/Node services.
