import { z } from "zod";

export const registerUserSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    role: z.string().min(1),
    address: z.string().min(1),
    gender: z.string().min(1),
    password: z
      .string()
      .min(5, { message: "Password must be more than 5 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const loginUserSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export const editProfileSchema = z.object({
  name: z.string().min(1),
  phone: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  gender: z.string().nullable().optional(),
});

export const updatePasswordSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z
      .string()
      .min(5, { message: "Password must be more than 5 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email().min(1),
});

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(5, { message: "Password must be more than 5 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
export type TRegisterUserSchema = z.infer<typeof registerUserSchema>;
export type TLoginUserSchema = z.infer<typeof loginUserSchema>;
export type TEditProfileSchema = z.infer<typeof editProfileSchema>;
export type TUpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
