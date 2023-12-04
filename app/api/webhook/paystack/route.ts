import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { PaystackEventResponse } from "@/lib/types";
import { AppException } from "@/exceptions";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  try {
    const secretKey = `${process.env.SECRET_KEY}`;

    const hash = crypto
      .createHmac("sha512", secretKey)
      .update(JSON.stringify(await req.json()))
      .digest("hex");


    if (hash !== req.headers.get("x-paystack-signature")) {
      throw new AppException("sorry request is invalid");
    }

    const event: PaystackEventResponse = await req.json();

    if (event?.event !== "charge.success") {
      throw new AppException("unknown event");
    }

    // check if amount paid is same price for course
   

    const enrollment = await prisma.enrollment.update({
        where: {
          id: event.data.metadata.enrollmentId,
        },
        data: {
          status: "Success",
        }
      });

    const paymentUpdate = await prisma.payment.update({
       where:{
         id: event.data.metadata.paymentId
       },
       data: {
         paymentStatus: "Success"
       }
    })
    

    return new Response(JSON.stringify("Payment Updated"), {
      status: 200,
    });
  } catch (error) {
    if(error instanceof Error){
    resend.emails.send({
        from: "Moricol <onboarding@resend.dev>",
        to: "opubortony@gmail.com",
        subject: "Error Messasge",
        react: error.message,
      });
    }
    
    if(error instanceof AppException){
        return new Response(JSON.stringify(error.message), { status: 400 });
    }

    console.log(error);
    return new Response(JSON.stringify("Something went wrong"), { status: 400 });
  }
}
