import prisma from "@/lib/prisma-client";
import { TEnrollmentSchema, enrollmentSchema } from "@/schema/enrollmentSchema";
import { randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { courseAmount } from "@/data/CourseAmount";
import { money } from "@/hooks/money";
import { CURRENCIES } from "@/lib/types";

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
  if (!courseDesc) {
    return new Response(JSON.stringify("Course not found"), {
      status: 404,
    });
  }

  let amount = Number(courseDesc?.price);
  let course = result?.data?.course;

  if (user?.role === "student") {
    if (
      courseDesc?.title === "Brunch/Lunch" ||
      courseDesc?.title === "Hotel Accomodation"
    ) {
      course = result?.data?.course + " - " + result?.data?.noOfDays + " Days";
      amount = Number(courseDesc?.price) * Number(result?.data?.noOfDays);
    }
  } else if (user?.role === "company") {
    if (
      Number(result?.data?.noOfUsers!) >= 1 &&
      Number(result?.data?.noOfUsers!) <= 5
    ) {
      // ================
      // 5% discount
      // ================
      if (
        courseDesc?.title === "Brunch/Lunch" ||
        courseDesc?.title === "Hotel Accomodation"
      ) {
        course =
          result?.data?.course + " - " + result?.data?.noOfDays + " Days";
        amount =
          Number(courseDesc?.price) *
          Number(result?.data?.noOfDays) *
          result?.data?.noOfUsers!;
      } else {
        let discount = 0.05 * amount * result?.data?.noOfUsers!;
        amount = amount * result?.data?.noOfUsers! - discount;
      }
    } else if (
      Number(result?.data?.noOfUsers!) >= 6 &&
      Number(result?.data?.noOfUsers!) <= 9
    ) {
      // ================
      // 10% discount
      // ================
      if (
        courseDesc?.title === "Brunch/Lunch" ||
        courseDesc?.title === "Hotel Accomodation"
      ) {
        course =
          result?.data?.course + " - " + result?.data?.noOfDays + " Days";
        amount =
          Number(courseDesc?.price) *
          result?.data?.noOfUsers! *
          Number(result?.data?.noOfDays);
      } else {
        let discount = 0.1 * amount * result?.data?.noOfUsers!;
        amount = amount * result?.data?.noOfUsers! - discount;
      }
    } else if (Number(result?.data?.noOfUsers!) >= 10) {
      // ================
      // 20% discount
      // ================
      if (
        courseDesc?.title === "Brunch/Lunch" ||
        courseDesc?.title === "Hotel Accomodation"
      ) {
        course =
          result?.data?.course + " - " + result?.data?.noOfDays + " Days";
        amount =
          Number(courseDesc?.price) *
          result?.data?.noOfUsers! *
          Number(result?.data?.noOfDays);
      } else {
        let discount = 0.2 * amount * result?.data?.noOfUsers!;
        amount = amount * result?.data?.noOfUsers! - discount;
      }
    }
  }

  const convertedMoney = await money(amount, user?.currency as CURRENCIES);
  try {
    const enrollment = await prisma.enrollment.create({
      data: {
        course: course as string,
        email: result?.data?.email,
        enrollmentId: enrollmentId,
        phone: result?.data?.phone,
        status: "Pending",
        userId: result?.data?.userId,
        amount: Math.round(convertedMoney * 100),
        date: date.toString(),
        timeTable: result?.data?.timeTable as string,
        noOfUsers: result?.data?.noOfUsers,
        currency: user?.currency,
        paymentType: "paystack",
      },
    });

    if (user?.role === "company") {
      for (let i = 0; i < result?.data?.noOfUsers!; i++) {
        const companyEnrollment = await prisma.companyEnrollment.create({
          data: {
            name: "staff name",
            email: "staffemail@gmail.com",
            phoneNumber: "Staff Phone number",
            companyId: user?.id as string,
            enrollmentId: enrollment?.id,
          },
        });
      }
    }

    let paymentId = "PAY" + date.getDate() + randomBytes(2).toString("hex");

    const payment = await prisma.payment.create({
      data: {
        paymentStatus: "Pending",
        paymentId: paymentId,
        amount: Math.round(convertedMoney * 100),
        course: course as string,
        enrollmentId: enrollment?.id,
        userId: result?.data?.userId,
        date: date.toString(),
        currency: user?.currency,
        paymentType: "paystack",
      },
    });

    // ======================
    // Paystack
    // ======================
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
        amount: Math.round(convertedMoney * 100),
        currency: "NGN",
        callback_url: `${process.env.URL}order-status/success`,
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
