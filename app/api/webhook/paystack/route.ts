import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { PaystackEventResponse } from "@/lib/types";
import { AppException } from "@/exceptions";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
import React from "react";
import NewRegistrationMail from "@/email/new-registration";
import StudentRegEmail from "@/email/studentRegEmail";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  try {
    const secretKey = `${process.env.PAYSTACK_SECRET_KEY}`;
    const event: PaystackEventResponse = await req.json();

    const hash = crypto
      .createHmac("sha512", secretKey)
      .update(JSON.stringify(event))
      .digest("hex");

    if (hash !== req.headers.get("x-paystack-signature")) {
      throw new AppException("sorry request is invalid");
    }

    if (event?.event !== "charge.success") {
      const enrollment = await prisma.enrollment.update({
        where: {
          id: event.data.metadata.enrollmentId,
        },
        data: {
          status: "Failed",
        },
      });

      const paymentUpdate = await prisma.payment.update({
        where: {
          id: event.data.metadata.paymentId,
        },
        data: {
          paymentStatus: "Failed",
        },
      });
      throw new AppException("unknown event");
    }

    const enrollment = await prisma.enrollment.update({
      where: {
        id: event.data.metadata.enrollmentId,
      },
      data: {
        status: "Success",
      },
    });

    const paymentUpdate = await prisma.payment.update({
      where: {
        id: event.data.metadata.paymentId,
      },
      data: {
        paymentStatus: "Success",
      },
    });

    const newEnrollment = await prisma.enrollment.findFirst({
      where: { id: event.data.metadata.enrollmentId },
      include: { user: true },
    });

    // check if amount paid is same price for course
    let courseAmount = newEnrollment?.amount;
    let paidAmount = event.data.amount;

    resend.emails.send({
      from: "infomoricolhealthcare@moricolservices.com",
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
        currency: newEnrollment?.currency as string,
      }),
    });
    resend.emails.send({
      from: "infomoricolhealthcare@moricolservices.com",
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
        currency: newEnrollment?.currency as string,
      }),
    });

    return new Response(JSON.stringify("Payment Updated"), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof AppException) {
      return new Response(JSON.stringify(error.message), { status: 400 });
    }

    return new Response(JSON.stringify("Something went wrong"), {
      status: 400,
    });
  }
}
