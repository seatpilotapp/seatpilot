export function renderPortalPage(eventId: string, token: string) {
  const config = JSON.stringify({ eventId, token }).replace(/</g, '\\u003c');
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SeatPilot · Confirmar asistencia</title>
    <style>
      :root {
        color-scheme: light dark;
        font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #0c0d0f;
        color: #f5f6f8;
      }
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        background: linear-gradient(160deg, #0f172a 0%, #1f2937 100%);
      }
      .card {
        width: min(480px, 100%);
        background: rgba(17, 24, 39, 0.8);
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
      }
      h1 {
        margin: 0 0 1rem;
        font-size: 1.75rem;
        line-height: 1.2;
      }
      p {
        margin: 0 0 1rem;
        color: rgba(226, 232, 240, 0.9);
      }
      .status {
        margin-bottom: 1rem;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        font-size: 0.95rem;
      }
      .status.ok {
        background: rgba(34, 197, 94, 0.15);
        color: #4ade80;
      }
      .status.error {
        background: rgba(248, 113, 113, 0.15);
        color: #fca5a5;
      }
      label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.35rem;
      }
      select,
      input,
      textarea {
        width: 100%;
        border: 1px solid rgba(148, 163, 184, 0.35);
        background: rgba(15, 23, 42, 0.85);
        color: inherit;
        border-radius: 8px;
        padding: 0.65rem 0.75rem;
        font-size: 1rem;
        margin-bottom: 1rem;
        box-sizing: border-box;
      }
      textarea {
        min-height: 96px;
        resize: vertical;
      }
      button {
        width: 100%;
        padding: 0.85rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        background: linear-gradient(120deg, #38bdf8, #6366f1);
        color: #0f172a;
      }
      button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .meta {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 0.75rem;
        margin-bottom: 1.25rem;
      }
      .meta-item {
        border: 1px solid rgba(148, 163, 184, 0.25);
        border-radius: 10px;
        padding: 0.75rem;
        background: rgba(15, 23, 42, 0.65);
      }
      .meta-item span {
        display: block;
        color: rgba(148, 163, 184, 0.85);
        font-size: 0.8rem;
        margin-bottom: 0.25rem;
      }
      @media (max-width: 480px) {
        .card {
          padding: 1.5rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="status" id="status" hidden></div>
      <header>
        <p id="event-meta"></p>
        <h1 id="event-name">Confirmar asistencia</h1>
        <p id="guest-name"></p>
      </header>
      <section class="meta" id="meta-section" hidden>
        <div class="meta-item">
          <span>Estado</span>
          <strong id="current-status">--</strong>
        </div>
        <div class="meta-item">
          <span>Última respuesta</span>
          <strong id="last-response">--</strong>
        </div>
      </section>
      <form id="rsvp-form">
        <label for="rsvp-status">Tu respuesta</label>
        <select id="rsvp-status" required>
          <option value="yes">Confirmo asistencia</option>
          <option value="maybe">Necesito confirmar más tarde</option>
          <option value="waitlist">Deseo quedar en lista de espera</option>
          <option value="no">No podré asistir</option>
        </select>

        <label for="party-size">Acompañantes</label>
        <input id="party-size" type="number" min="1" max="20" value="1" />

        <label for="notes">Preferencias o notas</label>
        <textarea id="notes" placeholder="Alergias, peticiones especiales, etc."></textarea>

        <button type="submit" id="submit-btn">Guardar respuesta</button>
      </form>
    </div>
    <script>
      window.__RSVP_CONFIG__ = ${config};

      const statusEl = document.getElementById('status');
      const formEl = document.getElementById('rsvp-form');
      const submitBtn = document.getElementById('submit-btn');
      const eventNameEl = document.getElementById('event-name');
      const eventMetaEl = document.getElementById('event-meta');
      const guestNameEl = document.getElementById('guest-name');
      const metaSectionEl = document.getElementById('meta-section');
      const currentStatusEl = document.getElementById('current-status');
      const lastResponseEl = document.getElementById('last-response');
      const statusSelect = document.getElementById('rsvp-status');
      const partySizeInput = document.getElementById('party-size');
      const notesInput = document.getElementById('notes');

      async function fetchPortalData() {
        const params = new URLSearchParams({
          eventId: window.__RSVP_CONFIG__.eventId,
          token: window.__RSVP_CONFIG__.token
        });
        const response = await fetch('/api/rsvp/portal?' + params.toString(), { credentials: 'same-origin' });
        if (!response.ok) {
          throw new Error('No pudimos cargar tu invitación. Verifica el enlace enviado.');
        }
        const payload = await response.json();
        if (!payload.ok) {
          throw new Error(payload.error || 'No pudimos cargar tu invitación.');
        }
        return payload.result;
      }

      function renderData(data) {
        eventNameEl.textContent = data.event.name;
        eventMetaEl.textContent = new Date(data.event.date + 'T' + data.event.time + 'Z').toLocaleString(data.event.locale || 'es-PR', {
          dateStyle: 'full',
          timeStyle: 'short'
        });
        guestNameEl.textContent = data.guest.full_name;

        if (data.rsvp) {
          statusSelect.value = data.rsvp.status;
          partySizeInput.value = data.rsvp.party_size;
          notesInput.value = data.rsvp.notes || '';
          metaSectionEl.hidden = false;
          currentStatusEl.textContent = formatStatus(data.rsvp.status);
          lastResponseEl.textContent = data.rsvp.responded_at
            ? new Date(data.rsvp.responded_at).toLocaleString(data.event.locale || 'es-PR', {
                dateStyle: 'medium',
                timeStyle: 'short'
              })
            : '--';
        } else {
          metaSectionEl.hidden = true;
        }
      }

      function formatStatus(status) {
        switch (status) {
          case 'yes':
            return 'Confirmado';
          case 'no':
            return 'No asiste';
          case 'maybe':
            return 'Por confirmar';
          case 'waitlist':
            return 'Lista de espera';
          default:
            return status;
        }
      }

      function setStatus(message, type = 'ok') {
        statusEl.textContent = message;
        statusEl.className = 'status ' + type;
        statusEl.hidden = false;
      }

      formEl.addEventListener('submit', async (event) => {
        event.preventDefault();
        submitBtn.disabled = true;
        setStatus('Guardando respuesta…', 'ok');
        try {
          const payload = {
            eventId: window.__RSVP_CONFIG__.eventId,
            token: window.__RSVP_CONFIG__.token,
            status: statusSelect.value,
            partySize: Number.parseInt(partySizeInput.value, 10) || 1,
            notes: notesInput.value.trim()
          };
          const response = await fetch('/api/rsvp/respond', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            credentials: 'same-origin'
          });
          const body = await response.json();
          if (!response.ok || !body.ok) {
            throw new Error(body.error || 'No pudimos registrar tu respuesta. Intenta nuevamente.');
          }
          setStatus('¡Listo! Hemos registrado tu respuesta.', 'ok');
          await load();
        } catch (error) {
          setStatus(error.message || 'Ocurrió un error. Intenta nuevamente.', 'error');
        } finally {
          submitBtn.disabled = false;
        }
      });

      async function load() {
        try {
          const data = await fetchPortalData();
          renderData(data);
          setStatus('Confirma o actualiza tu asistencia.', 'ok');
        } catch (error) {
          setStatus(error.message || 'No pudimos cargar tu invitación.', 'error');
          formEl.hidden = true;
        }
      }

      load();
    </script>
  </body>
</html>`;
}
