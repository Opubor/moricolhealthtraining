import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import crypto, { randomBytes } from "crypto";
import { Resend } from "resend";
import React from "react";
import { TRegisterUserSchema, registerUserSchema } from "@/schema/userSchema";
// import VerifyEmail from "@/email/verify-email";
import NewUserMail from "../../../../email/newUser";
import MoricolRegAlert from "@/email/moricolRegAlert";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const body: TRegisterUserSchema = await req.json();
  const result = registerUserSchema.safeParse(body);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      }),
      { status: 400 }
    );
  }
  const date = new Date();
  let userId = "MOR" + date.getDate() + randomBytes(3).toString("hex");

  const salt = 10;

  try {
    const usedEmail = await prisma.user.findFirst({
      where: { email: result?.data.email },
    });

    if (usedEmail) {
      return new Response(JSON.stringify("Email is already in use"), {
        status: 400,
      });
    } else {
      const hash = bcrypt.hashSync(result?.data?.password, salt);

      const user = await prisma.user.create({
        data: {
          name: result?.data?.name,
          email: result?.data?.email,
          phone: result?.data?.phone,
          role: result?.data?.role,
          address: result?.data?.address,
          businessType: result?.data?.businessType,
          registrationNumber: result?.data?.registrationNumber,
          industry: result?.data?.industry,
          password: hash,
          userId: userId,
        },
      });

      // =======User Mail=========
      await resend.emails.send({
        from: "infomoricolhealthcare@moricolservices.com",
        to: result?.data?.email,
        subject: "Moricol Registration",
        react: React.createElement(NewUserMail, {
          userName: result?.data?.name,
          userEmail: result?.data?.email,
          phoneNumber: result?.data?.phone,
        }),
      });

      // =======Moricol Mail=========
      await resend.emails.send({
        from: "infomoricolhealthcare@moricolservices.com",
        to: "infomoricolhealthcare@gmail.com",
        subject: "Moricol Registration",
        react: React.createElement(MoricolRegAlert, {
          userName: result?.data?.name,
          userEmail: result?.data?.email,
          phoneNumber: result?.data?.phone,
        }),
      });

      if (user) {
        return new Response(JSON.stringify("Registration Successful"), {
          status: 200,
        });
      } else {
        return new Response(JSON.stringify("Network Error"), { status: 400 });
      }
    }
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
