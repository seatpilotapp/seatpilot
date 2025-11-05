# SeatPilot · Android Kiosk Demo (layout consistente)

Este directorio contiene un esqueleto mínimo de proyecto Android pensado para
envolver la PWA del kiosko (`apps/kiosk-pwa`) en una aplicación nativa y
mostrarla en una Android Box o emulador manteniendo el mismo layout.

## Requisitos

- Android Studio (Giraffe o superior) con SDK 34 instalado.
- Node 20 + pnpm 9 (para servir la PWA en `http://localhost:4173`).

## Pasos rápidos

1. **Sirve la PWA**  
   ```bash
   pnpm install
   pnpm --filter @seatpilot/kiosk-pwa dev
   ```
   Si la Android Box está en la LAN, identifica la IP de tu equipo (ej. `192.168.1.50`).

2. **Importa este proyecto en Android Studio**  
   - Archivo → Abrir → selecciona `android/kiosk-demo/`.
   - Android Studio descargará Gradle y sincronizará módulos.

3. **Actualiza la URL del kiosko**  
   En `app/src/main/kotlin/com/seatpilot/kiosk/MainActivity.kt` cambia la constante
   `KIOSK_URL` por la IP/puerto correctos (`http://192.168.1.50:4173/kiosk` o
   `http://10.0.2.2:4173/kiosk` si usas emulador).

4. **Ejecuta**  
   Selecciona dispositivo (emulador o Android Box conectada por ADB) y pulsa *Run*.

## Archivos clave

| Archivo | Descripción |
| --- | --- |
| `app/src/main/AndroidManifest.xml` | Declara tema, permisos e impide rotación (landscape). |
| `app/src/main/kotlin/.../MainActivity.kt` | WebView que carga el kiosko (pantalla completa). |
| `app/src/main/res/layout/activity_main.xml` | Contenedor con márgenes/colores que replican la PWA. |
| `app/src/main/res/values/themes.xml` | Tema sin barras + fondo oscuro. |
| `app/src/main/res/xml/network_security_config.xml` | Permite HTTP local durante pruebas. |

> **Nota**: este es un demo autocontenido. Para producción se recomienda
> habilitar HTTPS y reforzar permisos/lock task mode.

### Nota sobre Gradle wrapper

Se incluye `gradlew` y `gradlew.bat`, pero si Android Studio pide regenerar el
wrapper (o falta el `gradle-wrapper.jar`), ejecuta:

```bash
./gradlew wrapper --gradle-version 8.7
```

Esto descargará el wrapper oficial antes de construir.
