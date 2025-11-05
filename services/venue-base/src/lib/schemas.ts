import { z } from 'zod';

export const venueSchema = z.object({
  name: z.string().min(1).max(160),
  countryCode: z.string().min(2).max(2).default('PR'),
  region: z.string().min(1).max(120).optional(),
  city: z.string().min(1).max(120).optional(),
  locality: z.string().min(1).max(120).optional(),
  address: z.string().max(300).optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  tags: z.array(z.string().max(50)).max(16).optional(),
  capacityHint: z.number().int().positive().max(100000).optional()
});

export type VenuePayload = z.infer<typeof venueSchema>;

export const venueUpdateSchema = venueSchema.partial();

export type VenueUpdatePayload = z.infer<typeof venueUpdateSchema>;

const transformSchema = z.object({
  scale_px_per_m: z.number().positive().optional(),
  origin_px: z.tuple([z.number(), z.number()]).optional(),
  rotation_deg: z.number().optional()
});

const layerSchema = z.record(z.string(), z.unknown());

export const planSchema = z.object({
  versionLabel: z.string().min(1).max(40),
  status: z.enum(['draft', 'published', 'archived']).optional(),
  units: z.enum(['metric', 'imperial']).optional(),
  scale: z.string().max(40).optional(),
  transform: transformSchema.optional(),
  calibration: z.record(z.string(), z.unknown()).optional(),
  layers: layerSchema.default({}),
  checklist: z.record(z.string(), z.unknown()).default({}),
  metadata: z.record(z.string(), z.unknown()).default({}),
  notes: z.string().max(2000).optional(),
  isPublished: z.boolean().optional()
});

export type PlanPayload = z.infer<typeof planSchema>;

export const planUpdateSchema = planSchema.partial().extend({
  layers: layerSchema.optional(),
  checklist: z.record(z.string(), z.unknown()).optional(),
  metadata: z.record(z.string(), z.unknown()).optional()
});

export type PlanUpdatePayload = z.infer<typeof planUpdateSchema>;

export const planSnapshotSchema = z.object({
  label: z.string().max(120).optional(),
  diff: z.record(z.string(), z.unknown()).optional(),
  snapshot: z.record(z.string(), z.unknown())
});

export type PlanSnapshotPayload = z.infer<typeof planSnapshotSchema>;
