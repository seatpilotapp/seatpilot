import type { Request, Response } from 'express';
import { withTenant } from '../lib/db.js';
import { extractTenantId } from '../lib/request.js';
import { queueInvitations } from '../lib/invitations.js';
import { sendSchema } from '../lib/schema.js';
import { missingTenant, validationError } from '../lib/errors.js';

export async function sendInvitations(req: Request, res: Response) {
  const tenantId = extractTenantId(req);
  if (!tenantId) {
    throw missingTenant();
  }
  const parsed = sendSchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    throw validationError(parsed.error.flatten());
  }

  const input = parsed.data;
  const result = await withTenant(tenantId, (conn) =>
    queueInvitations(conn, {
      tenantId,
      eventId: input.eventId,
      channel: input.channel,
      operation: 'send',
      guestIds: input.guestIds,
      segment: input.segment,
      templateId: input.templateId ?? null,
      subject: input.subject ?? null,
      scheduledAt: input.scheduledAt,
      batchKey: input.batchKey
    })
  );

  return res.status(202).json({ ok: true, result });
}
