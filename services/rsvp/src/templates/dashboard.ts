export function renderDashboardPage(defaultEventId?: string) {
  const config = JSON.stringify({ defaultEventId: defaultEventId ?? null }).replace(/</g, '\\u003c');
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SeatPilot · Ops RSVP</title>
    <style>
      :root {
        font-family: "Inter", system-ui, sans-serif;
        background: #0f172a;
        color: #e2e8f0;
      }
      body {
        margin: 0;
        min-height: 100vh;
        background: radial-gradient(circle at top, #1e293b 0%, #0f172a 45%, #020617 100%);
      }
      header {
        padding: 2rem 1.5rem 1rem;
        text-align: center;
      }
      h1 {
        margin: 0;
        font-size: 2rem;
      }
      main {
        max-width: 960px;
        margin: 0 auto 3rem;
        padding: 0 1.5rem 3rem;
      }
      form {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
      }
      input[type="text"] {
        min-width: min(320px, 80vw);
        padding: 0.65rem 0.85rem;
        border-radius: 10px;
        border: 1px solid rgba(148, 163, 184, 0.35);
        background: rgba(15, 23, 42, 0.7);
        color: inherit;
      }
      button {
        padding: 0.65rem 1.5rem;
        border-radius: 10px;
        border: none;
        background: linear-gradient(120deg, #818cf8, #38bdf8);
        color: #0f172a;
        font-weight: 600;
        cursor: pointer;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
      }
      .card {
        background: rgba(15, 23, 42, 0.75);
        padding: 1rem 1.25rem;
        border-radius: 14px;
        border: 1px solid rgba(148, 163, 184, 0.25);
        box-shadow: 0 20px 45px -20px rgba(8, 47, 73, 0.6);
      }
      .card span {
        display: block;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: rgba(148, 163, 184, 0.8);
        margin-bottom: 0.25rem;
      }
      .card strong {
        font-size: 1.75rem;
        font-weight: 700;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        background: rgba(15, 23, 42, 0.75);
        border-radius: 14px;
        overflow: hidden;
      }
      thead {
        background: rgba(30, 41, 59, 0.9);
      }
      th,
      td {
        padding: 0.85rem 1rem;
        text-align: left;
        border-bottom: 1px solid rgba(148, 163, 184, 0.15);
      }
      tbody tr:last-child td {
        border-bottom: none;
      }
      #status {
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 500;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Panel de RSVP & Mensajería</h1>
      <p>Revisa envíos, respuestas y estado de la cola por evento.</p>
    </header>
    <main>
      <div id="status"></div>
      <form id="event-form">
        <input type="text" id="event-id" placeholder="UUID del evento" required />
        <button type="submit">Consultar</button>
      </form>
      <section id="overview" class="grid" hidden>
        <div class="card">
          <span>Invitaciones programadas / enviadas</span>
          <strong id="metric-invitations">0</strong>
        </div>
        <div class="card">
          <span>Confirmados</span>
          <strong id="metric-confirmed">0</strong>
        </div>
        <div class="card">
          <span>Entregados</span>
          <strong id="metric-delivered">0</strong>
        </div>
        <div class="card">
          <span>Pendientes en cola</span>
          <strong id="metric-pending">0</strong>
        </div>
      </section>
      <section id="tables" hidden>
        <table>
          <thead>
            <tr>
              <th>Métrica</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody id="details-body"></tbody>
        </table>
      </section>
    </main>
    <script>
      window.__RSVP_DASH_CONFIG__ = ${config};

      const statusEl = document.getElementById('status');
      const formEl = document.getElementById('event-form');
      const eventIdInput = document.getElementById('event-id');
      const overviewEl = document.getElementById('overview');
      const detailsBody = document.getElementById('details-body');
      const tablesEl = document.getElementById('tables');

      const metrics = {
        invitations: document.getElementById('metric-invitations'),
        confirmed: document.getElementById('metric-confirmed'),
        delivered: document.getElementById('metric-delivered'),
        pending: document.getElementById('metric-pending')
      };

      function setStatus(message, tone = 'info') {
        statusEl.textContent = message;
        statusEl.style.color = tone === 'error' ? '#f87171' : '#38bdf8';
      }

      async function fetchStats(eventId) {
        const params = new URLSearchParams({ eventId });
        const response = await fetch('/api/rsvp/stats?' + params.toString(), { credentials: 'same-origin' });
        const body = await response.json();
        if (!response.ok || !body.ok) {
          throw new Error(body?.error || 'No se pudo obtener la información.');
        }
        return body.result;
      }

      function renderStats(data) {
        overviewEl.hidden = false;
        tablesEl.hidden = false;

        metrics.invitations.textContent =
          data.invitations.sent_or_scheduled + '/' + data.invitations.total;
        metrics.confirmed.textContent = String(data.rsvps.confirmed);
        metrics.delivered.textContent = String(data.invitations.delivered);
        metrics.pending.textContent = String(data.outbox.pending);

        detailsBody.innerHTML = '';
        const rows = [
          ['Evento', data.event.name],
          ['Fecha', data.event.event_date],
          ['Hora', data.event.event_time],
          ['Último envío', data.invitations.last_sent_at || '—'],
          ['Última respuesta', data.rsvps.last_response_at || '—'],
          ['Bounced', data.invitations.bounced],
          ['Marcados spam', data.invitations.flagged_spam],
          ['RSVP Sí', data.rsvps.confirmed],
          ['RSVP No', data.rsvps.declined],
          ['RSVP Maybe', data.rsvps.maybe],
          ['RSVP Waitlist', data.rsvps.waitlist],
          ['Invitados totales', data.guests.total],
          ['Invitados confirmados', data.guests.confirmed],
          ['Invitados en espera', data.guests.waiting],
          ['Envios fallidos', data.outbox.failed]
        ];
        for (const [label, value] of rows) {
          const tr = document.createElement('tr');
          const nameTd = document.createElement('td');
          nameTd.textContent = label;
          const valueTd = document.createElement('td');
          valueTd.textContent = value;
          tr.appendChild(nameTd);
          tr.appendChild(valueTd);
          detailsBody.appendChild(tr);
        }
      }

      async function load(eventId) {
        try {
          setStatus('Consultando métricas…', 'info');
          const stats = await fetchStats(eventId);
          renderStats(stats);
          setStatus('Métricas actualizadas.', 'info');
        } catch (error) {
          setStatus(error.message || 'No se pudo consultar el evento.', 'error');
          overviewEl.hidden = true;
          tablesEl.hidden = true;
        }
      }

      formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = eventIdInput.value.trim();
        if (!value) return;
        void load(value);
      });

      if (window.__RSVP_DASH_CONFIG__.defaultEventId) {
        eventIdInput.value = window.__RSVP_DASH_CONFIG__.defaultEventId;
        void load(window.__RSVP_DASH_CONFIG__.defaultEventId);
      }
    </script>
  </body>
</html>`;
}
