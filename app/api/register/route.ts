import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import crypto, { randomBytes } from "crypto";
import { Resend } from "resend";
import React from "react";
import NewUserMail from "../../../email/newUser";
import { TRegisterUserSchema, registerUserSchema } from "@/schema/userSchema";
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
  // const result = await req.json();

  const date = new Date();
  let userId = "MOR" + date.getDate() + randomBytes(3).toString("hex");

  const salt = 10;

  try {
    const usedEmail = await prisma.user.findFirst({
      where: { email: result?.data?.email },
    });

    if (usedEmail) {
      return new Response(JSON.stringify("Email already in use"), {
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
          gender: result?.data?.gender,
          password: hash,
          userId: userId,
        },
      });

      // =======User Mail=========
      const { data, error } = await resend.emails.send({
        from: "infomoricolhealthcare@moricolservices.com",
        to: result?.data?.email,
        subject: "Moricol Registration",
        react: React.createElement(NewUserMail, {
          userName: result?.data?.name,
          userEmail: result?.data?.email,
          phoneNumber: result?.data?.phone,
        }),
      });

      // if (error) {
      //   console.log("error", error);
      // return res.status(400).json(error);
      // }

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
      // // =======Moricol Mail=========
      // await resend.emails.send({
      //   from: "Moricol <onboarding@resend.dev>",
      // to: "infomoricolhealthcare@gmail.com",
      //   subject: "Moricol Registration",
      //   react: React.createElement(MoricolRegAlert, {
      //     userName: result?.data?.name,
      //     userEmail: result?.data?.email,
      //     phoneNumber: result?.data?.phone,
      //   }),
      // });

      if (user) {
        return new Response(JSON.stringify("Registration Successful"), {
          status: 200,
        });
      } else {
        return new Response(JSON.stringify("Network Error"), { status: 400 });
      }
    }
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
