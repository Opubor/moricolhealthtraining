import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";
import React from "react";
import {
  TForgotPasswordSchema,
  forgotPasswordSchema,
} from "@/schema/userSchema";
import ResetPasswordReciept from "@/email/reset-password";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body: TForgotPasswordSchema = await req.json();
  const result = forgotPasswordSchema.safeParse(body);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      })
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: result?.data?.email,
      },
    });
    if (!user) {
      return new Response(JSON.stringify("User not found"), {
        status: 400,
      });
    }

    const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
    const today = new Date();
    const resetPasswordTokenExpiry = new Date(
      today.setDate(today.getDate() + 1)
    );

    await prisma.user.update({
      where: {
        id: user?.id,
      },
      data: {
        resetPasswordToken: resetPasswordToken,
        resetPasswordTokenExpiry: resetPasswordTokenExpiry.toString(),
      },
    });
    resend.emails.send({
      from: "infomoricolhealthcare@moricolservices.com",
      to: user?.email,
      subject: "Reset Password",
      react: React.createElement(ResetPasswordReciept, {
        email: user?.email,
        customerName: user?.name,
        resetPasswordToken: resetPasswordToken,
      }),
    });
    return new Response(
      JSON.stringify(
        "Click on the Link sent to your email to reset your password"
      ),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
