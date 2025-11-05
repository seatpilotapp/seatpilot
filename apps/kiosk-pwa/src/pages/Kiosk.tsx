import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { IScannerControls, BrowserMultiFormatReader as BrowserMultiFormatReaderClass } from '@zxing/browser';
import type { Result as ZXingResult, Exception as ZXingException } from '@zxing/library';

type Mode = 'camera' | 'manual';
type Orientation = 'vertical' | 'horizontal';

type ScanLog = {
  code: string;
  label: string;
  timeAgo: string;
  status: 'ok' | 'warn' | 'error';
};

type ZXingBrowserModule = typeof import('@zxing/browser');

const INITIAL_LOG: ScanLog[] = [
  { code: 'A-021-18', label: 'Luis Martínez · Mesa 7', timeAgo: 'Hace 32 s', status: 'ok' },
  { code: 'VIP-004', label: 'María Álvarez · Mesa VIP', timeAgo: 'Hace 1 min', status: 'ok' },
  { code: 'MANUAL-082', label: 'Captura manual · Mostrador', timeAgo: 'Hace 3 min', status: 'warn' },
  { code: 'A-017-02', label: 'Invitado duplicado', timeAgo: 'Hace 5 min', status: 'error' }
];

export function KioskPage() {
  const [mode, setMode] = useState<Mode>('camera');
  const [orientation, setOrientation] = useState<Orientation>(() => {
    if (typeof window !== 'undefined' && window.innerWidth > window.innerHeight) {
      return 'horizontal';
    }
    return 'vertical';
  });
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [manualCode, setManualCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');
  const [scanLog, setScanLog] = useState<ScanLog[]>(INITIAL_LOG);
  const [clock, setClock] = useState(() => new Date());
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const readerRef = useRef<BrowserMultiFormatReaderClass | null>(null);
  const readerModuleRef = useRef<ZXingBrowserModule | null>(null);
  const lastScanRef = useRef<{ code: string; ts: number }>({ code: '', ts: 0 });
  const cameraControlsRef = useRef<IScannerControls | null>(null);
  const seenCodesRef = useRef<Set<string>>(new Set(INITIAL_LOG.map((item) => item.code)));
  const feedbackTimeoutRef = useRef<number | null>(null);

  const [feedback, setFeedback] = useState<{ tone: 'info' | 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const ensureReader = useCallback(async () => {
    if (readerRef.current) {
      return readerRef.current;
    }
    if (!readerModuleRef.current) {
      readerModuleRef.current = await import('@zxing/browser');
    }
    const ReaderCtor = readerModuleRef.current.BrowserMultiFormatReader;
    const readerInstance = new ReaderCtor(undefined, {
      delayBetweenScanAttempts: 200
    });
    readerRef.current = readerInstance;
    return readerInstance;
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function startCamera() {
      setCameraError(null);
      setCameraReady(false);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError('Esta pantalla no tiene cámara disponible.');
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: { ideal: 1280 },
            height: { ideal: orientation === 'vertical' ? 1920 : 720 }
          },
          audio: false
        });
        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current?.getTracks().forEach((track) => track.stop());
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          void videoRef.current.play();
        }
        setCameraReady(true);
        setStatus('scanning');
      } catch (error) {
        console.error('No fue posible iniciar la cámara', error);
        setCameraError('No pudimos acceder a la cámara. Revisa permisos o conecta un lector USB.');
        setStatus('error');
      }
    }

    if (mode === 'camera') {
      startCamera();
    } else {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setCameraReady(false);
      setStatus('idle');
    }

    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      cameraControlsRef.current?.stop();
      cameraControlsRef.current = null;
    };
  }, [mode, orientation]);

  const eventInfo = useMemo(
    () => ({
      name: 'Gala · Ballroom A',
      door: 'Puerta Norte',
      capacity: 320
    }),
    []
  );

  function handleManualSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!manualCode.trim()) {
      return;
    }

    setStatus('scanning');
    const normalized = manualCode.trim().toUpperCase();
    setManualCode('');

    window.setTimeout(() => {
      registerScan(normalized, 'Captura manual · Mostrador', normalized.startsWith('ERR') ? 'error' : 'ok');
    }, 600);
  }

  useEffect(() => {
    if (!videoRef.current || mode !== 'camera' || !cameraReady) {
      cameraControlsRef.current?.stop();
      cameraControlsRef.current = null;
      if (mode === 'camera') {
        setStatus((prev) => (prev === 'success' ? prev : prev === 'error' ? prev : 'scanning'));
      }
      return;
    }

    let cancelled = false;

    async function startDecoding() {
      try {
        const reader = await ensureReader();
        if (cancelled || !videoRef.current) {
          return;
        }

        cameraControlsRef.current?.stop();

        const controls = await reader.decodeFromVideoElement(
          videoRef.current,
          (result?: ZXingResult, error?: ZXingException, ctrl?: IScannerControls) => {
            if (ctrl) {
              cameraControlsRef.current = ctrl;
            }

            if (error && error.name !== 'NotFoundException') {
              console.warn('Error de lectura QR', error);
            }

            if (!result) {
              return;
            }

            const text = result.getText?.() ?? '';
            if (!text) {
              return;
            }
            registerScan(text, 'Lectura automática · Cámara', 'ok');
          }
        );

        if (!cancelled) {
          cameraControlsRef.current = controls;
        } else {
          controls.stop();
        }
      } catch (error) {
        if ((error as { name?: string }).name !== 'NotFoundException') {
          console.warn('Error al iniciar el lector QR', error);
          setCameraError('No logramos iniciar la lectura QR. Revisa permisos o vuelve a intentar.');
        }
      }
    }

    startDecoding();

    return () => {
      cancelled = true;
      cameraControlsRef.current?.stop();
      cameraControlsRef.current = null;
    };
  }, [mode, cameraReady, ensureReader]);

  useEffect(
    () => () => {
      if (feedbackTimeoutRef.current) {
        window.clearTimeout(feedbackTimeoutRef.current);
      }
    },
    []
  );

  function showFeedback(message: string, tone: 'info' | 'success' | 'error') {
    setFeedback({ message, tone });
    if (feedbackTimeoutRef.current) {
      window.clearTimeout(feedbackTimeoutRef.current);
    }
    feedbackTimeoutRef.current = window.setTimeout(() => {
      setFeedback(null);
      feedbackTimeoutRef.current = null;
    }, 2500);
  }

  function registerScan(code: string, label: string, scanStatus: 'ok' | 'warn' | 'error') {
    const now = Date.now();
    if (lastScanRef.current.code === code && now - lastScanRef.current.ts < 2000) {
      showFeedback(`Se ignoró la lectura repetida de ${code}.`, 'error');
      return;
    }
    if (seenCodesRef.current.has(code)) {
      setStatus('error');
      showFeedback(`El código ${code} ya fue registrado anteriormente.`, 'error');
      return;
    }

    seenCodesRef.current.add(code);
    lastScanRef.current = { code, ts: now };
    setScanLog((prev) => [{ code, label, timeAgo: 'Hace instantes', status: scanStatus }, ...prev].slice(0, 8));
    const successful = scanStatus !== 'error';
    setStatus(successful ? 'success' : 'error');
    showFeedback(
      successful ? `Acceso confirmado para ${code}.` : `Revisa el ingreso de ${code}.`,
      successful ? 'success' : 'error'
    );
    window.setTimeout(() => setStatus('idle'), 2000);
  }

  const orientationToggle = (
    <div className="kiosk-orientation-toggle" role="tablist" aria-label="Orientación">
      <button
        type="button"
        role="tab"
        aria-selected={orientation === 'vertical'}
        className={orientation === 'vertical' ? 'active' : ''}
        onClick={() => setOrientation('vertical')}
      >
        Vertical
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={orientation === 'horizontal'}
        className={orientation === 'horizontal' ? 'active' : ''}
        onClick={() => setOrientation('horizontal')}
      >
        Horizontal
      </button>
    </div>
  );

  const statusClass =
    status === 'success' ? 'kiosk-status success' : status === 'error' ? 'kiosk-status error' : 'kiosk-status';
  const statusLabel =
    status === 'scanning'
      ? 'Escuchando…'
      : status === 'success'
      ? 'Acceso autorizado'
      : status === 'error'
      ? 'Revisa la entrada'
      : 'Listo para escanear';

  const eventDetails = (
    <dl className="kiosk-event-grid">
      <div>
        <dt>Evento</dt>
        <dd>{eventInfo.name}</dd>
      </div>
      <div>
        <dt>Acceso</dt>
        <dd>{eventInfo.door}</dd>
      </div>
      <div>
        <dt>Aforo</dt>
        <dd>{eventInfo.capacity} confirmados</dd>
      </div>
    </dl>
  );

  const timeSummary = (
    <>
      <div className="kiosk-clock">
        {clock.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
      </div>
      <div className="kiosk-date">
        {clock.toLocaleDateString('es-MX', { weekday: 'long', month: 'short', day: 'numeric' })}
      </div>
      <div className={statusClass}>{statusLabel}</div>
    </>
  );

  function renderModeToggle(variant: Orientation) {
    return (
      <div className={`kiosk-mode-toggle ${variant}`} role="tablist" aria-label="Modo de registro">
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'camera'}
          className={mode === 'camera' ? 'active' : ''}
          onClick={() => setMode('camera')}
        >
          Cámara QR
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'manual'}
          className={mode === 'manual' ? 'active' : ''}
          onClick={() => setMode('manual')}
        >
          Manual / Lector USB
        </button>
      </div>
    );
  }

  function renderScannerPanel(variant: Orientation) {
    return (
      <section className={`kiosk-panel ${variant}`} aria-live="polite">
        {mode === 'camera' ? (
          <div className="kiosk-camera">
            <div className="kiosk-camera__viewport">
              <video
                ref={videoRef}
                playsInline
                muted
                autoPlay
                className={cameraReady ? 'ready' : ''}
                aria-label="Vista previa de la cámara para escanear códigos"
              />
              <div className="kiosk-camera__frame" aria-hidden="true" />
            </div>
            <div className="kiosk-camera__help">
              <p>
                Apunta el código QR hacia la cámara. El lector confirma con audio y muestra la mesa
                asignada en pantalla. Si no tienes cámara, conecta un lector USB en modo teclado.
              </p>
              {cameraError ? (
                <p className="kiosk-panel__alert">{cameraError}</p>
              ) : cameraReady ? (
                <p className="kiosk-panel__hint">Cámara lista · luz azul indica detección</p>
              ) : (
                <p className="kiosk-panel__hint">Solicitando permisos de cámara…</p>
              )}
              {feedback ? (
                <div className={`kiosk-feedback ${feedback.tone}`}>
                  {feedback.message}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <form className="kiosk-manual" onSubmit={handleManualSubmit}>
            <label htmlFor="manual-code">Escribe o escanea el código del invitado</label>
            <input
              id="manual-code"
              name="manual-code"
              value={manualCode}
              onChange={(event) => setManualCode(event.target.value)}
              placeholder="Ej. A-102-45"
              autoComplete="off"
              autoFocus
              inputMode="text"
              aria-describedby="manual-help"
            />
            <div id="manual-help" className="kiosk-manual__help">
              Tip: Las pistolas USB en modo teclado envían el código automáticamente. Presiona Enter
              para confirmar.
            </div>
            {feedback ? (
              <div className={`kiosk-feedback ${feedback.tone}`}>
                {feedback.message}
              </div>
            ) : null}
            <button type="submit">Registrar acceso</button>
          </form>
        )}
      </section>
    );
  }

  function renderLogSection(variant: Orientation) {
    return (
      <section className={`kiosk-log ${variant}`} aria-label="Últimos registros">
        <header>
          <h2>Últimas lecturas</h2>
          <span>{scanLog.length} registros recientes</span>
        </header>
        <ul>
          {scanLog.map((item) => (
            <li key={`${item.code}-${item.timeAgo}`} className={item.status}>
              <div className="kiosk-log__code">{item.code}</div>
              <div className="kiosk-log__label">{item.label}</div>
              <time className="kiosk-log__time">{item.timeAgo}</time>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (orientation === 'horizontal') {
    return (
      <div className="kiosk-horizontal" aria-labelledby="kiosk-title">
        <header className="kiosk-horizontal__header">
          <div className="kiosk-horizontal__brand">
            <div className="kiosk-brand">
              <img src="/seatpilot.svg" alt="SeatPilot" />
              <span>SeatPilot · Check-In</span>
            </div>
            {eventDetails}
          </div>
          <div className="kiosk-horizontal__meta">
            {orientationToggle}
            {timeSummary}
          </div>
        </header>

        <main className="kiosk-horizontal__body">
          <section className="kiosk-horizontal__left">
            {renderModeToggle('horizontal')}
            {renderScannerPanel('horizontal')}
          </section>
          <section className="kiosk-horizontal__right">
            {renderLogSection('horizontal')}
            <div className="kiosk-horizontal__tips">
              <h3>Tip rápido</h3>
              <p>
                Mantén enfocada la zona de escaneo para lecturas más rápidas. Si la red falla,
                cambia al modo Manual y utiliza la pistola USB.
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="kiosk-vertical" aria-labelledby="kiosk-title">
      <header className="kiosk-vertical__header">
        <div>
          <div className="kiosk-brand">
            <img src="/seatpilot.svg" alt="SeatPilot" />
            <span>SeatPilot · Check-In</span>
          </div>
          {eventDetails}
        </div>

        <div className="kiosk-meta">
          {timeSummary}
          {orientationToggle}
        </div>
      </header>

      <main className="kiosk-vertical__body">
        {renderModeToggle('vertical')}
        {renderScannerPanel('vertical')}
        {renderLogSection('vertical')}
      </main>
    </div>
  );
}
