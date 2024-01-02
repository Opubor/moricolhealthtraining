import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma-client";
import { Resend } from "resend";
import React from "react";
import { AppException } from "@/exceptions";
import StudentRegEmail from "@/email/studentRegEmail";
import NewRegistrationMail from "@/email/new-registration";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

//   if (event.type !== "checkout.session.completed") {
//     const enrollment = await prisma.enrollment.update({
//       where: {
//         id: session?.metadata?.enrollmentId,
//       },
//       data: {
//         status: "Failed",
//       },
//     });

//     const paymentUpdate = await prisma.payment.update({
//       where: {
//         id: session?.metadata?.paymentId,
//       },
//       data: {
//         paymentStatus: "Failed",
//       },
//     });
//     throw new AppException("unknown event");
//   }

  if (event.type === "checkout.session.completed") {
    const enrollment = await prisma.enrollment.update({
      where: {
        id: session?.metadata?.enrollmentId,
      },
      data: {
        status: "Success",
      },
    });

    const paymentUpdate = await prisma.payment.update({
      where: {
        id: session?.metadata?.paymentId,
      },
      data: {
        paymentStatus: "Success",
      },
    });

    const newEnrollment = await prisma.enrollment.findFirst({
      where: { id: session?.metadata?.enrollmentId },
      include: { user: true },
    });
    // ================================
    // check if amount paid is same price for order
    // ================================
    let courseAmount = newEnrollment?.amount;
    let paidAmount = session?.amount_total;

    resend.emails.send({
      from: "Moricol <onboarding@resend.dev>",
      to: "infomoricolhealthcare@gmail.com",
      subject: "New Course Enrollment",
      react: React.createElement(NewRegistrationMail, {
        courseName: newEnrollment?.course as string,
        studentName: newEnrollment?.user?.name as string,
        studentEmail: newEnrollment?.email as string,
        studentPhoneNumber: newEnrollment?.phone as string,
        registrationDate: newEnrollment?.date as string,
        courseAmount: Number(courseAmount) / 100,
        paidAmount: Number(paidAmount) / 100,
        timeTable: newEnrollment?.timeTable as string,
      }),
    });
    resend.emails.send({
      from: "Moricol <onboarding@resend.dev>",
      to: newEnrollment?.email as string,
      subject: "New Course Enrollment",
      react: React.createElement(StudentRegEmail, {
        customerName: newEnrollment?.user?.name as string,
        enrollmentId: newEnrollment?.enrollmentId as string,
        courseName: newEnrollment?.course as string,
        registrationDate: newEnrollment?.date as string,
        courseAmount: Number(courseAmount) / 100,
        paidAmount: Number(paidAmount) / 100,
        timeTable: newEnrollment?.timeTable as string,
      }),
    });

    return new Response(JSON.stringify("Payment Updated"), {
      status: 200,
    });
  }
  return new NextResponse(null, { status: 200 });
}
