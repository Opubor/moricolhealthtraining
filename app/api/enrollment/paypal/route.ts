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

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

paypal.configure({
  mode: `${process.env.PAYPAL_MODE}`, //sandbox or live
  client_id: `${process.env.PAYPAL_CLIENTID}`,
  client_secret: `${process.env.PAYPAL_CLIENT_SECRET}`,
});

function createPayPalPayment(
  amount: string,
  currency: string,
  enrollmentId: string,
  paymentId: string
) {
  return new Promise((resolve, reject) => {
    const createPaymentJson = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      transactions: [
        {
          amount: {
            total: amount,
            currency: currency,
          },
          custom: `${enrollmentId}:${paymentId}`,
        },
      ],
      redirect_urls: {
        return_url: `${process.env.URL}/order-status/confirm-payment`,
        cancel_url: `${process.env.URL}/order-status/fail`,
      },
    };

    paypal.payment.create(createPaymentJson, (error, payment) => {
      if (error) {
        // console.log(error);
        reject(error);
      } else {
        resolve(payment);
      }
    });
  });
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
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
        amount: Math.round(convertedMoney * 100),
        course: course as string,
        enrollmentId: enrollment?.id,
        userId: result?.data?.userId,
        date: date.toString(),
        currency: user?.currency,
        paymentType: "stripe",
      },
    });

    // ==========================
    // PayPal Payment
    // ==========================
    const paypalPayment: any = await createPayPalPayment(
      Math.round(convertedMoney).toString(),
      user?.currency as string,
      enrollment?.id as string,
      payment?.id as string
    );
    let redirectUrl = paypalPayment?.links?.at(1)?.href as string;

    return NextResponse.json({ url: redirectUrl }, { headers: corsHeaders });
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
