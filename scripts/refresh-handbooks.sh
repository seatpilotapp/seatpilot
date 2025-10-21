#!/usr/bin/env bash
# refresh-handbooks.sh
# Actualiza la marca de tiempo de los documentos maestros y ejecuta chequeos básicos.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MASTER_HANDOFF="${ROOT}/docs/handoff/SeatPilot_Master_v1.0.md"
MASTER_PROMPT="${ROOT}/docs/prompt/SeatPilot_Prompt_Master_v1.0.md"
STAMP="> Última actualización automática: $(date -u +'%Y-%m-%d %H:%M UTC')"

echo "[1/3] Ejecutando chequeos rápidos (puedes ajustar estos comandos)..."
if command -v pnpm >/dev/null 2>&1; then
  pnpm run --if-present lint || true
else
  echo "pnpm no encontrado; omitiendo lint."
fi

echo "[2/3] Refrescando marcas de tiempo en documentos maestros..."
for file in "$MASTER_HANDOFF" "$MASTER_PROMPT"; do
  if [[ -f "$file" ]]; then
    {
      printf '%s\n\n' "$STAMP"
      cat "$file"
    } > "${file}.tmp"
    mv "${file}.tmp" "$file"
    echo "Actualizado: $file"
  else
    echo "Archivo no encontrado: $file"
  fi
done

echo "[3/3] Cambios sugeridos:"
git diff --stat "$MASTER_HANDOFF" "$MASTER_PROMPT" || true

echo "Listo. Revisa el diff antes de commitear."
