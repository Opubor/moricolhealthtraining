import { z } from "zod";

export const enrollmentSchema = z.object({
  userId: z.string().min(1),
  email: z.string().email().min(1),
  phone: z.string().min(1),
  course: z.string().min(1),
  timeTable: z.string().optional().nullable(),
  noOfDays: z.coerce.number().optional().nullable(),
});

export type TEnrollmentSchema = z.infer<typeof enrollmentSchema>;
