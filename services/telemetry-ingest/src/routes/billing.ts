import { Router } from 'express';
import {
  fetchBillingReport,
  fetchFilterOptions,
  type BillingRow
} from '../lib/billing.js';

const router = Router();

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

function renderTable(rows: BillingRow[]): string {
  if (!rows.length) {
    return `<p class="empty">No hay datos para los filtros seleccionados.</p>`;
  }

  const totalCheckins = rows.reduce(
    (acc, row) => acc + row.checkins_used,
    0
  );
  return `
    <p class="summary">
      ${rows.length} registros · Check-ins usados (total): <strong>${formatNumber(
        totalCheckins
      )}</strong>
    </p>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Periodo</th>
            <th>Eventos (incl / usado / overage)</th>
            <th>Pantallas (incl / usado / overage)</th>
            <th>Check-ins (incl / usado / overage)</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td><code>${escapeHtml(row.tenant_id)}</code></td>
                  <td>${escapeHtml(row.period_key)}</td>
                  <td>${formatNumber(row.events_included)} / ${formatNumber(
                row.events_used
              )} / ${formatNumber(row.events_overage)}</td>
                  <td>${formatNumber(row.screens_included)} / ${formatNumber(
                row.screens_used
              )} / ${formatNumber(row.screens_overage)}</td>
                  <td>${formatNumber(row.checkins_included)} / ${formatNumber(
                row.checkins_used
              )} / ${formatNumber(row.checkins_overage)}</td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderPage(
  rows: BillingRow[],
  periods: string[],
  currentPeriod?: string,
  currentTenant?: string,
  limit?: number
): string {
  const periodOptions = periods
    .map((period) => {
      const selected = period === currentPeriod ? 'selected' : '';
      return `<option value="${escapeHtml(period)}" ${selected}>${escapeHtml(
        period
      )}</option>`;
    })
    .join('');

  const html = `
  <!doctype html>
  <html lang="es">
    <head>
      <meta charset="utf-8" />
      <title>SeatPilot · Consumo por Tenant</title>
      <style>
        body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; margin: 2rem; background: #0f172a; color: #f8fafc; }
        h1 { margin-bottom: 0.5rem; }
        form { display: flex; gap: 1rem; align-items: flex-end; flex-wrap: wrap; margin-bottom: 1rem; background: #1e293b; padding: 1rem; border-radius: 8px; }
        label { display: flex; flex-direction: column; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: #cbd5f5; }
        select, input { padding: 0.4rem 0.6rem; border-radius: 6px; border: 1px solid #334155; background: #0f172a; color: #f8fafc; min-width: 160px; }
        button { padding: 0.45rem 1rem; border-radius: 6px; border: none; background: #38bdf8; color: #0f172a; font-weight: 600; cursor: pointer; }
        button:hover { background: #0ea5e9; }
        .table-wrapper { overflow-x: auto; margin-top: 1rem; }
        table { border-collapse: collapse; width: 100%; min-width: 720px; }
        th, td { padding: 0.6rem 0.8rem; border-bottom: 1px solid #1f2a40; text-align: left; }
        th { background: #1f2937; font-size: 0.85rem; color: #cbd5f5; }
        tr:nth-child(even) { background: #14203a; }
        code { font-family: ui-monospace, SFMono-Regular, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace; }
        .summary { margin: 0.5rem 0 1.5rem; color: #cbd5f5; }
        .empty { background: #1f2937; padding: 1rem; border-radius: 8px; color: #cbd5f5; }
        .actions { display: flex; gap: 1rem; margin-top: 0.5rem; }
        a.download { color: #38bdf8; text-decoration: none; font-weight: 600; }
        a.download:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <h1>Consumo por Tenant · SeatPilot</h1>
      <form method="get">
        <label>
          Periodo
          <select name="period">
            <option value="">Todos</option>
            ${periodOptions}
          </select>
        </label>
        <label>
          Tenant (UUID)
          <input name="tenant" placeholder="uuid-tenant" value="${escapeHtml(
            currentTenant ?? ''
          )}" />
        </label>
        <label>
          Límite
          <input type="number" name="limit" min="1" max="1000" value="${escapeHtml(
            String(limit ?? 200)
          )}" />
        </label>
        <button type="submit">Aplicar filtros</button>
      </form>
      <div class="actions">
        <a class="download" href="/admin/billing/csv?period=${encodeURIComponent(
          currentPeriod ?? ''
        )}&tenant=${encodeURIComponent(
    currentTenant ?? ''
  )}&limit=${encodeURIComponent(String(limit ?? 200))}">Descargar CSV</a>
      </div>
      ${renderTable(rows)}
    </body>
  </html>
  `;
  return html;
}

router.get('/', async (req, res, next) => {
  try {
    const period =
      typeof req.query.period === 'string' && req.query.period.trim() !== ''
        ? req.query.period
        : undefined;
    const tenant =
      typeof req.query.tenant === 'string' && req.query.tenant.trim() !== ''
        ? req.query.tenant.trim()
        : undefined;
    const limit = Number.parseInt(String(req.query.limit ?? '200'), 10);

    const [report, filters] = await Promise.all([
      fetchBillingReport({
        tenantId: tenant,
        periodKey: period,
        limit: Number.isFinite(limit) ? limit : 200
      }),
      fetchFilterOptions()
    ]);

    res
      .status(200)
      .set('Cache-Control', 'no-store')
      .send(renderPage(report, filters.periods, period, tenant, limit));
  } catch (error) {
    next(error);
  }
});

router.get('/csv', async (req, res, next) => {
  try {
    const period =
      typeof req.query.period === 'string' && req.query.period.trim() !== ''
        ? req.query.period
        : undefined;
    const tenant =
      typeof req.query.tenant === 'string' && req.query.tenant.trim() !== ''
        ? req.query.tenant.trim()
        : undefined;
    const limit = Number.parseInt(String(req.query.limit ?? '500'), 10);

    const rows = await fetchBillingReport({
      tenantId: tenant,
      periodKey: period,
      limit: Number.isFinite(limit) ? limit : 500
    });

    const header = [
      'tenant_id',
      'period_key',
      'events_included',
      'events_used',
      'events_overage',
      'screens_included',
      'screens_used',
      'screens_overage',
      'checkins_included',
      'checkins_used',
      'checkins_overage'
    ];

    const csvLines = [
      header.join(','),
      ...rows.map((row) =>
        [
          row.tenant_id,
          row.period_key,
          row.events_included,
          row.events_used,
          row.events_overage,
          row.screens_included,
          row.screens_used,
          row.screens_overage,
          row.checkins_included,
          row.checkins_used,
          row.checkins_overage
        ]
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(',')
      )
    ];

    res
      .status(200)
      .set({
        'Content-Type': 'text/csv; charset=utf-8',
        'Cache-Control': 'no-store',
        'Content-Disposition': `attachment; filename="seatpilot-billing-${
          period ?? 'all'
        }.csv"`
      })
      .send(csvLines.join('\n'));
  } catch (error) {
    next(error);
  }
});

export const billingRouter = router;
