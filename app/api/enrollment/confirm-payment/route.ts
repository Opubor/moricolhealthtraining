import { NextResponse } from "next/server";
import prisma from "@/lib/prisma-client";
import paypal from "paypal-rest-sdk";
import { TPaypalPaymentSchema, paypalPaymentSchema } from "@/schema/enrollmentSchema";
import { Resend } from "resend";
import React from "react";
import NewRegistrationMail from "@/email/new-registration";
import StudentRegEmail from "@/email/studentRegEmail";
const resend = new Resend(process.env.RESEND_API_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AdjQ0g4n9Bft7U0mnJR0JMdMk7W7l1ir18ng6jWtAJgWNY7Xsos0DzG7lNYGP0If46b85KYwlUC38bYM",
  client_secret:
    "ENWxC5CNzvWtWHvrTLj3ghN4kaziSKG8heLxn_fZpgoOUb96Rl48Rz7s802fdpdCXvBUiYPqzICFcREj",
});

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  let id = params?.id;

  const body: TPaypalPaymentSchema = await req.json();
  const result = paypalPaymentSchema.safeParse(body);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      })
    );
  }

  try {
    const executePaymentJson = {
      payer_id: result?.data?.payerId,
    };

    paypal.payment.execute(
      result?.data?.paymentId,
      executePaymentJson,
      async (error, payment) => {
        if (error) {
          throw error;
        } else {
          if (payment?.state === "approved") {
            let enrollmentId;
            let paymentId;
            let amount;
            payment?.transactions.map((data: any) => {
              let customArray = data?.custom?.split(":");
              enrollmentId = customArray[0];
              paymentId = customArray[1];
              amount = parseInt(data?.amount?.total);
            });
            const enrollment = await prisma.enrollment.update({
              where: {
                id: enrollmentId,
              },
              data: {
                status: "Success",
              },
            });
        
            const paymentUpdate = await prisma.payment.update({
              where: {
                id: paymentId,
              },
              data: {
                paymentStatus: "Success",
              },
            });

            const newEnrollment = await prisma.enrollment.findFirst({
              where: { id: enrollmentId },
              include: { user: true },
            });
            // ================================
            // check if amount paid is same price for order
            // ================================
            let courseAmount = newEnrollment?.amount;
            let paidAmount = amount;

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
                currency: newEnrollment?.currency as string
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
                currency: newEnrollment?.currency as string
              }),
            });
          } else {
            let enrollmentId;
            let paymentId;
            let amount;
            payment?.transactions.map((data: any) => {
              let customArray = data?.custom?.split(":");
              enrollmentId = customArray[0];
              paymentId = customArray[1];
              amount = parseInt(data?.amount?.total);
            });

            const enrollment = await prisma.enrollment.update({
              where: {
                id: enrollmentId,
              },
              data: {
                status: "Failed",
              },
            });
        
            const paymentUpdate = await prisma.payment.update({
              where: {
                id: paymentId,
              },
              data: {
                paymentStatus: "Failed",
              },
            });
          }
        }
      }
    );
    return new Response(JSON.stringify("Payment Successful"), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
