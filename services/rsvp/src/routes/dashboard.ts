import type { Request, Response } from 'express';
import { renderDashboardPage } from '../templates/dashboard.js';

export function renderDashboard(req: Request, res: Response) {
  const raw = Array.isArray(req.query.eventId) ? req.query.eventId[0] : req.query.eventId;
  res
    .status(200)
    .type('html')
    .send(renderDashboardPage(typeof raw === 'string' ? raw : undefined));
}
