import prisma from "@/lib/prisma-client";
import { TEnrollmentSchema, enrollmentSchema } from "@/schema/enrollmentSchema";
import { randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { courseAmount } from "@/data/CourseAmount";

export async function POST(req: NextRequest) {
  console.log("reach");
  const body: TEnrollmentSchema = await req.json();
  const result = enrollmentSchema.safeParse(body);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      })
    );
  }

  const user = await prisma.user.findFirst({
    where: {
    id: result?.data?.userId
    }
  })

  const date = new Date();
  let enrollmentId = "ENR" + date.getDate() + randomBytes(3).toString("hex");

  const courseDesc = courseAmount.find(
    (item) => item.title === result?.data?.course
  );

  const amount = courseDesc?.price

  try {
    const enrollment = await prisma.enrollment.create({
      data: {
        course: result?.data?.course,
        email: result?.data?.email,
        enrollmentId: enrollmentId,
        phone: result?.data?.phone,
        status: "Pending",
        userId: result?.data?.userId,
        amount: Number(amount) * 100,
        date: date.toString()
      },
    });
    console.log(enrollment);

    let paymentId = "PAY" + date.getDate() + randomBytes(2).toString("hex");

    const payment = await prisma.payment.create({
      data: {
        paymentStatus: "Pending",
        paymentId: paymentId,
        amount: Number(amount) * 100,
        course: result?.data?.course,
        enrollmentId: enrollment?.id,
        userId: result?.data?.userId,
        date: date.toString()
      },
    });

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
        method: "POST",
        headers: {
          Authorization: `${process.env.BEARER_AUTH}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user?.email,
          amount: Number(amount) * 100,
          currency: "NGN",
          callback_url: `${process.env.URL}/order-status/success`,
          metadata: {
            enrollmentId: enrollment?.id,
            paymentId: payment?.id
          },
        }),
      });
      const data = await res.json();

      return new Response(JSON.stringify({ url: data.data.authorization_url }), {
        status: 200,
      });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
