import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { PaystackEventResponse } from "@/lib/types";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  try {
    const secretKey = `${process.env.SECRET_KEY}`;

    const hash = crypto
      .createHmac("sha512", secretKey)
      .update(JSON.stringify(req.body))
      .digest("hex");

    if (hash == req.headers.get("x-paystack-signature")) {
      //   const event:PaystackEventResponse = req.body;
      const event: PaystackEventResponse = {
        event: "charge.success",
        data: {
          id: "evt_1234567890",
          domain: "test",
          type: "charge.success",
          data: {
            domain: "test",
            status: "success",
            gateway_response: "Payment successful",
            message: "Payment has been processed successfully",
            channel: "card",
            metadata: {
              custom_field: "value",
            },
            log: "Transaction log details",
            fees: 100,
            created_at: "2023-01-01T00:00:00Z",
            transaction_date: "2023-01-01T00:01:00Z",
            transaction_id: "txn_1234567890",
          },
          created_at: "2023-01-01T00:02:00Z",
        },
      };
      if (event.event === "charge.success") {
         const enrollment = await prisma.enrollment.update({
           where: {
             id: event.data.data.metadata.enrollmentId,
           },
           data: {
             status: "Success",
           }
         });

         const paymentUpdate = await prisma.payment.update({
          where:{
            id: event.data.data.metadata.paymentId
          },
          data: {
            paymentStatus: "Success"
          }
         })
      }
    }

    return new Response(JSON.stringify("Payment Updated"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
