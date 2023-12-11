import prisma from "@/lib/prisma-client";
import { TEnrollmentSchema, enrollmentSchema } from "@/schema/enrollmentSchema";
import { randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { courseAmount } from "@/data/CourseAmount";

export async function POST(req: NextRequest) {
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
      id: result?.data?.userId,
    },
  });

  const date = new Date();
  let enrollmentId = "ENR" + date.getDate() + randomBytes(3).toString("hex");

  const courseDesc = courseAmount.find(
    (item) => (item.title as string) === (result?.data?.course as string)
  );
  if(!courseDesc){
    console.log("Course not found")
    return new Response(JSON.stringify("Course not found"), {
      status: 404,
    });
  }

  let amount = Number(courseDesc?.price);
  let course = result?.data?.course;
  if (courseDesc?.title === "Brunch/Lunch" || courseDesc?.title === "Hotel Accomodation") {
    course = result?.data?.course + " - " + result?.data?.noOfDays + " Days";
     amount = Number(courseDesc?.price) * Number(result?.data?.noOfDays);
  }

  try {
    const enrollment = await prisma.enrollment.create({
      data: {
        course: course as string,
        email: result?.data?.email,
        enrollmentId: enrollmentId,
        phone: result?.data?.phone,
        status: "Pending",
        userId: result?.data?.userId,
        amount: Number(amount) * 100,
        date: date.toString(),
        timeTable: result?.data?.timeTable as string,
      },
    });

    let paymentId = "PAY" + date.getDate() + randomBytes(2).toString("hex");

    const payment = await prisma.payment.create({
      data: {
        paymentStatus: "Pending",
        paymentId: paymentId,
        amount: Number(amount) * 100,
        course: course as string,
        enrollmentId: enrollment?.id,
        userId: result?.data?.userId,
        date: date.toString(),
      },
    });
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
        amount: Number(amount) * 100,
        currency: "NGN",
        callback_url: `${process.env.URL}/order-status/success`,
        metadata: {
          enrollmentId: enrollment?.id,
          paymentId: payment?.id,
        },
      }),
    });
    const data = await res.json();
    return new Response(JSON.stringify({ url: data.data.authorization_url }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
