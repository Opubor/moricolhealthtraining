import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma-client";
import { stripe } from "@/lib/stripe";
import { randomBytes } from "crypto";
import { CURRENCIES } from "@/lib/types";
// import useMoney from "@/hooks/useMoney";
import paypal from "paypal-rest-sdk";
import { TEnrollmentSchema, enrollmentSchema } from "@/schema/enrollmentSchema";
import { courseAmount } from "@/data/CourseAmount";
import { money } from "@/hooks/money";
import { Resend } from "resend";
import React from "react";
import NewRegistrationMail from "@/email/new-registration";
import StudentRegEmail from "@/email/studentRegEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body: TEnrollmentSchema = await req.json();
  const result = enrollmentSchema.safeParse(body);
  if (!result.success) {
    console.log(result?.error);
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      })
    );
  }

  const user = await prisma.user.findFirst({
    where: {
      id: result?.data?.userId,
    },
  });

  const date = new Date();
  let enrollmentId = "ENR" + date.getDate() + randomBytes(3).toString("hex");

  try {
    const enrollment = await prisma.enrollment.create({
      data: {
        course: "Infection Control (Free Course)",
        email: user?.email,
        enrollmentId: enrollmentId,
        phone: user?.phone,
        status: "Free Course",
        userId: result?.data?.userId,
        amount: 0.0,
        date: date.toString(),
        timeTable: "TBD",
        noOfUsers: 1,
        currency: user?.currency,
        paymentType: "Free Course",
      },
    });
    console.log("Enrolment", enrollment);
    let paymentId = "PAY" + date.getDate() + randomBytes(2).toString("hex");

    const payment = await prisma.payment.create({
      data: {
        paymentStatus: "Free Course",
        paymentId: paymentId,
        amount: 0.0,
        course: "Infection Control (Free Course)",
        enrollmentId: enrollment?.id,
        userId: result?.data?.userId,
        date: date.toString(),
        currency: user?.currency,
        paymentType: "Free Course",
      },
    });

    resend.emails.send({
      from: "infomoricolhealthcare@moricolservices.com",
      to: "infomoricolhealthcare@gmail.com",
      subject: "New Course Enrollment",
      react: React.createElement(NewRegistrationMail, {
        courseName: "Infection Control (Free Course)",
        studentName: user?.name as string,
        studentEmail: user?.email as string,
        studentPhoneNumber: user?.phone as string,
        registrationDate: enrollment?.date as string,
        courseAmount: 0.0,
        paidAmount: 0.0,
        timeTable: "TBD",
        currency: user?.currency as string,
      }),
    });

    resend.emails.send({
      from: "infomoricolhealthcare@moricolservices.com",
      to: user?.email as string,
      subject: "New Course Enrollment",
      react: React.createElement(StudentRegEmail, {
        customerName: user?.name as string,
        enrollmentId: enrollment?.enrollmentId as string,
        courseName: "Infection Control (Free Course)",
        registrationDate: enrollment?.date as string,
        courseAmount: 0.0,
        paidAmount: 0.0,
        timeTable: "TBD",
        currency: user?.currency as string,
      }),
    });

    return new Response(
      JSON.stringify("Registration successful. You'll be contacted shortly"),
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
