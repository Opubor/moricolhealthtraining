import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import crypto, { randomBytes } from "crypto";
import { Resend } from "resend";
import React from "react";
import { registerUserSchema } from "@/schema/userSchema";
// import VerifyEmail from "@/email/verify-email";
import NewUserMail from "../../../email/newUser";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const result = await req.json();

  const date = new Date();
  let userId = "MOR" + date.getDate() + randomBytes(3).toString("hex");

  const salt = 10;

  try {
    const usedEmail = await prisma.user.findFirst({
      where: { email: result.email },
    });

    if (usedEmail) {
      return new Response(JSON.stringify("Email is already in use"), {
        status: 400,
      });
    } else {
      const hash = bcrypt.hashSync(result?.password, salt);

      const user = await prisma.user.create({
        data: {
          name: result?.name,
          email: result?.email,
          phone: result?.phone,
          role: result?.role,
          address: result?.address,
          gender: result?.gender,
          password: hash,
          userId: userId
        },
      });

      resend.emails.send({
        from: "Moricol <onboarding@resend.dev>",
        to: result?.email,
        subject: "Moricol Registration",
        react: React.createElement(NewUserMail, {
          userName: result?.name,
          userEmail: result?.email,
          phoneNumber: result?.phone,
        }),
      });

      return new Response(JSON.stringify("Registration Successful"), {
        status: 200,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
