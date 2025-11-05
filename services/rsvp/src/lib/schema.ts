import { z } from 'zod';

const uuidSchema = z.string().uuid();
const channelSchema = z.enum(['email', 'sms']);

const batchKeySchema = z
  .string()
  .trim()
  .min(1)
  .max(64)
  .regex(/^[a-zA-Z0-9:_-]+$/, 'batchKey must be alphanumeric with : _ -');

export const sendSchema = z
  .object({
    eventId: uuidSchema,
    channel: channelSchema.default('email'),
    guestIds: z.array(uuidSchema).optional(),
    segment: z
      .string()
      .trim()
      .max(64)
      .optional(),
    templateId: z
      .string()
      .trim()
      .max(128)
      .optional()
      .nullable(),
    subject: z
      .string()
      .trim()
      .max(160)
      .optional(),
    scheduledAt: z.coerce.date().optional(),
    batchKey: batchKeySchema.optional()
  })
  .strict();

export const remindSchema = sendSchema
  .extend({
    excludeResponded: z.boolean().default(true)
  })
  .strict();

export const statsQuerySchema = z
  .object({
    eventId: uuidSchema
  })
  .strict();

export const portalQuerySchema = z
  .object({
    eventId: uuidSchema,
    token: z.string().min(10)
  })
  .strict();

export const respondSchema = z
  .object({
    eventId: uuidSchema,
    token: z.string().min(10),
    status: z.enum(['yes', 'no', 'maybe', 'waitlist']),
    partySize: z.coerce.number().int().min(1).max(20).default(1),
    preferences: z.record(z.any()).optional(),
    notes: z
      .string()
      .trim()
      .max(500)
      .optional()
  })
  .strict();

export type SendInput = z.infer<typeof sendSchema>;
export type RemindInput = z.infer<typeof remindSchema>;
export type PortalQuery = z.infer<typeof portalQuerySchema>;
export type RespondInput = z.infer<typeof respondSchema>;
