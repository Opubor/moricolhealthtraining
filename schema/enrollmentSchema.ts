import { z } from "zod";

export const enrollmentSchema = z.object({
  userId: z.string().min(1),
  email: z.string().email().optional().nullable(),
  phone: z.string().optional().nullable(),
  course: z.string().min(1),
  timeTable: z.string().optional().nullable(),
  noOfDays: z.coerce.number().optional().nullable(),
  noOfUsers: z.coerce.number().optional().nullable(),
  paymentType: z.string().min(1),
});
export const companyStaffEnrollmentSchema = z.object({
  companyId: z.string().min(1),
  enrollmentId: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
});

export const editCompanyStaffEnrollmentSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phoneNumber: z.string().min(1),
});

export const paypalPaymentSchema = z.object({
  paymentId: z.string().min(1),
  payerId: z.string().min(1),
  token: z.string().min(1),
});

export type TEnrollmentSchema = z.infer<typeof enrollmentSchema>;
export type TCompanyStaffEnrollmentSchema = z.infer<
  typeof companyStaffEnrollmentSchema
>;
export type TEditCompanyStaffEnrollmentSchema = z.infer<
  typeof editCompanyStaffEnrollmentSchema
>;
export type TPaypalPaymentSchema = z.infer<
  typeof paypalPaymentSchema
>;
