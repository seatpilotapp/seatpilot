# Seat‑Designer: Especificación de Reglas (v1.0)
## Objetivo
Prevenir layouts que violen seguridad/operación y sugerir correcciones rápidas.

## Tipos de regla
- **Hard (bloquea publicación)**: pasillos < 48", obstrucción de egress, PMR bloqueado, sobrecapacidad por mesa.
- **Soft (warning)**: mesa cerca de salida < X m, DJ/Band sin clearance, tarta sobre egress.
- **Info**: recomendación de lencería (cap/overlay/runner) y clips.

## Modelo
```ts
type Severity = 'hard'|'soft'|'info'
interface Rule {
  id: string
  severity: Severity
  appliesTo: ('table'|'chair'|'zone'|'stage'|'tent'|'floor')[]
  check(input: Layout): Finding[] // con geometry + metadata
  fix?: (input: Layout) => Patch[] // opcional
  docs: string // enlace KB
}
```

## Overlay UI

* **Rojo** (hard), **Ámbar** (soft), **Azul** (info); contador con CTA “ver detalles”.
* Tooltip: id regla + explicación + (si existe) “Aplicar fix”.

## Casos de prueba (“mapas problemáticos”)

1. Banquete con pasillo central 36" → **Hard**.
2. Pista intersectando ruta de egress → **Hard**.
3. PMR sin asiento reservado accesible → **Hard**.
4. Tarta en esquina con clearance insuficiente → **Soft**.
5. Highboys bloqueando flujo en coctel → **Soft**.
