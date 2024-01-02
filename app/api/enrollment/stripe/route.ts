import prisma from "@/lib/prisma-client";
import { TEnrollmentSchema, enrollmentSchema } from "@/schema/enrollmentSchema";
import { randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { courseAmount } from "@/data/CourseAmount";
import { money } from "@/hooks/money";
import { CURRENCIES } from "@/lib/types";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

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
  console.log("ggg")

  const user = await prisma.user.findFirst({
    where: {
      id: result?.data?.userId,
    },
  });
  console.log("nnn")

  const date = new Date();
  let enrollmentId = "ENR" + date.getDate() + randomBytes(3).toString("hex");

  const courseDesc = courseAmount.find(
    (item) => (item.title as string) === (result?.data?.course as string)
  );
  if (!courseDesc) {
    console.log("Course not found");
    return new Response(JSON.stringify("Course not found"), {
      status: 404,
    });
  }
  console.log("iii")

  let amount = Number(courseDesc?.price);
  let course = result?.data?.course;

  if (user?.role === "student") {
    console.log("pekeikeoeo");
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

  console.log("iiiiiiiiiiiiii")
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
        amount: Number(convertedMoney) * 100,
        date: date.toString(),
        timeTable: result?.data?.timeTable as string,
        noOfUsers: result?.data?.noOfUsers,
        currency: user?.currency,
        paymentType: "stripe",
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
        amount: Number(convertedMoney) * 100,
        course: course as string,
        enrollmentId: enrollment?.id,
        userId: result?.data?.userId,
        date: date.toString(),
        currency: user?.currency,
        paymentType: "stripe",
      },
    });
    console.log("yugyuuy")

    //===========================
    // Stripe Line_Items
    //===========================
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    //==============================================
    // Pushing Course Details to Stripe Line_Items
    //==============================================
    line_items.push({
      quantity: 1,
      price_data: {
        currency: user?.currency! as string,
        product_data: {
          name: course,
          
        },
        unit_amount: convertedMoney * 100,

      },
    });

    //===========================
    // Stripe Session/Submit
    //===========================
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${process.env.URL}order-status/success`,
      cancel_url: `${process.env.URL}order-status/fail`,
      metadata: {
        enrollmentId: enrollment?.id,
        paymentId: payment?.id,
      },
    });
    console.log("ghyivyvyvy")

    return NextResponse.json({ url: session.url }, { headers: corsHeaders });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
