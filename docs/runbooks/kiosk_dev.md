# Runbook — Kiosko PWA (dev)

Actualizado: 2025-10-29  
Responsable: Frontend / Product Enablement

## Requisitos

- Node.js 20+
- pnpm 9+ (`corepack enable pnpm`)
- Dependencias ya instaladas (`pnpm install` en la raíz del monorepo)

## Inicio rápido

```bash
# 1. Instala dependencias si es la primera vez
pnpm install

# 2. Lanza el dev server del kiosko
pnpm --filter @seatpilot/kiosk-pwa dev
```

La PWA arranca en `http://localhost:4173/` y expone rutas:

- `/kiosk` — kiosko principal (vertical, modos Cámara / Manual)
- `/signage` — señalización básica (placeholder)
- `/tv/main` — layout de TV principal
- `/tv/:zone` — placeholder para pantallas zonales

> Nota: el comando ejecuta Vite con `--host 0.0.0.0` y `--port 4173`
> (ver `apps/kiosk-pwa/package.json`). Ajusta el puerto con `PORT=xxxx`
> si hay conflicto.

## Flujo de kiosko (vertical / horizontal)

- Cambia entre **Vertical** (9:16) y **Horizontal** (16:9) con el control en la parte superior derecha. El modo horizontal reacomoda el escáner y la bitácora para TVs y monitores apaisados.
- En desktop puedes usar Chrome DevTools → Toggle device toolbar (por ejemplo, iPad Mini vertical o Pixel 7 landscape) para validar cada orientación.
- Modo **Cámara QR**: solicita `navigator.mediaDevices.getUserMedia` (facingMode `environment`) y decodifica en vivo con `@zxing/browser`. Requiere contexto seguro (`https://` o `http://localhost`) y buena iluminación; si no detecta en <2 s, verifica enfoque o cambia a modo Manual.
- Modo **Manual / Lector USB**: input con foco permanente; los lectores HID escriben directamente. `Enter` confirma el registro y el historial se actualiza en vivo.
- El kiosko ignora códigos ya procesados y muestra un aviso (“El código X ya fue registrado”) para evitar duplicados tanto en cámara como en lector USB.
- El encabezado muestra evento, acceso, aforo, reloj y estado (`Listo`, `Escuchando`, `Acceso autorizado`, `Revisa la entrada`).
- El historial (“Últimas lecturas”) almacena hasta 6 registros recientes con etiqueta y color por estado.

## Android Box / Emulador

1. Compila y ejecuta la app nativa (`android/kiosk-demo/`) con la WebView.
2. Cambia `KIOSK_URL` en `MainActivity.kt`:
   - Emulador: `http://10.0.2.2:4173/kiosk`
   - Android Box física: `http://<IP-de-tu-Mac>:4173/kiosk`
3. Concede permiso de cámara al lanzar el modo “Cámara QR”.
4. Para lectores USB en modo teclado, verifica que la Box detecte el dispositivo (Settings → Language & input → Physical keyboard). No se requiere configuración adicional en la PWA.
5. Si la PWA corre fuera de `localhost`, sirve el kiosko detrás de HTTPS (WebView exige contexto seguro para `getUserMedia`).

## Troubleshooting

1. **Error de importaciones (p.ej. TvZone/NotFound)**  
   Asegúrate de tener las páginas stub incluidas en `src/pages/`.

2. **Puerto ocupado**  
   Ejecuta `lsof -i :4173` y mata el proceso, o inicia con  
   `PORT=5173 pnpm --filter @seatpilot/kiosk-pwa dev`.

3. **Overlay de Vite que no desaparece**  
   Corrige el error, guarda y espera a HMR. Como alternativa, recarga la
   página con `Cmd/Ctrl + Shift + R`.

## Scripts relacionados

- `pnpm --filter @seatpilot/kiosk-pwa build` — build de producción.
- `pnpm --filter @seatpilot/kiosk-pwa preview` — vista previa en el mismo puerto (4173).
