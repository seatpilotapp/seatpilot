# KB-PROCESSED: Cobertura del asistente de lencería
- **Contexto**: El PDF maestro de lencería define tamaños de mesas y caídas (6"/12"/floor/puddle). Comparado con SeatPilot → iconos actuales cubren overlay/runner/skirting/cap, y backlog apunta a drops diferenciados.
- **Insight**: 70 % de los presets de lencería se visualizan con íconos existentes. Los faltantes son `drop-*` y variantes de skirting (6ft/8ft/round). 
- **Decisión**: Priorizar lote de iconos lencería (cap/overlay/runner/skirting/drop) antes de variantes de sillas o glassware.
- **Cambio**: PR `feat(icons): add linen set` añadirá SVGs `sp-linen-overlay.svg`, `sp-linen-runner.svg`, `sp-linen-skirting.svg`, `sp-linen-cap.svg`, `sp-linen-drop-{6,12,floor}.svg`, `sp-linen-puddles.svg` + actualización del manifest v0.4.0.
- **KPI/DoD**: Asistente de lencería muestra 95 % de escenarios sin recurrir a texto; validación con `npm run brand:icons:lint` + mosaico de previews.
