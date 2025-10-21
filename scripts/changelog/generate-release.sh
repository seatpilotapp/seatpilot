#!/usr/bin/env bash

set -euo pipefail

usage() {
  cat <<'EOF'
Usage:
  pnpm release:notes <version> [tag-prefix]

Examples:
  pnpm release:notes v1.1.0-prod-r1
  pnpm release:notes 1.2.0 v    # tag named v1.2.0 (pass prefix 'v')

Output:
  A markdown template with summary sections, checklist y commits desde el último tag.

Notas:
  - Requiere git y acceso al historial del repo.
  - No modifica archivos; imprime el resultado (puedes redirigir a CHANGELOG o Release notes).
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

if [[ $# -lt 1 ]]; then
  echo "❌ Debes indicar la versión (ej. v1.1.0-prod-r1)." >&2
  usage
  exit 1
fi

VERSION="$1"
PREFIX="${2:-}"
TODAY="$(date +%Y-%m-%d)"

# Detectar tag anterior
if [[ -n "$PREFIX" ]]; then
  PREV_TAG="$(git describe --tags --abbrev=0 --match "${PREFIX}*" 2>/dev/null || true)"
else
  PREV_TAG="$(git describe --tags --abbrev=0 2>/dev/null || true)"
fi

if [[ -z "$PREV_TAG" ]]; then
  RANGE="--reverse HEAD"
  PREV_TAG_LABEL="Initial release"
else
  RANGE="--reverse ${PREV_TAG}..HEAD"
  PREV_TAG_LABEL="$PREV_TAG"
fi

COMMITS="$(git log $RANGE --pretty=format:'- %s (%an)' | grep -v 'Merge pull request' || true)"

cat <<EOF
# SeatPilot ${VERSION} — ${TODAY}

> Release generado comparando con: ${PREV_TAG_LABEL}

## 🎯 Resumen

- Añade tu resumen en 2-3 bullets aquí (qué módulos se tocaron, impacto principal).

## ✅ Checklist Go / No-Go

- [ ] SQL / Migraciones aplicadas
- [ ] Secrets externos actualizados
- [ ] Alertas probadas (Slack / Ops)
- [ ] Servicios healthy post despliegue
- [ ] Dashboards / UI operativos

## 📦 Cambios principales

### Added
- …

### Changed
- …

### Fixed
- …

## 🧪 Comandos de verificación

\`\`\`bash
psql "\$SUPABASE_DB_URL" -c "select now();"
# añade los comandos relevantes para este release
\`\`\`

## 🔍 Commits desde ${PREV_TAG_LABEL}
${COMMITS:-"- (sin commits detectados; tal vez ya estás en el tag actual) }

## 🔒 Decisión

- [ ] GO — listo para producción
- [ ] NO-GO — requiere acciones adicionales

---

📝 Generado con \`pnpm release:notes ${VERSION}\`
EOF
