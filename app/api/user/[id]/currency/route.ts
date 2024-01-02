import prisma from "@/lib/prisma-client";
import { TEditCurrencySchema, editCurrencySchema } from "@/schema/userSchema";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  const body: TEditCurrencySchema = await req.json();
  const result = editCurrencySchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      })
    );
  }

  try {
    const user = await prisma.user.update({
      where: { id: params.id.toString() },
      data: {
        currency: result?.data?.currency,
      },
    });
    return new Response(JSON.stringify("Updated successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Failed!!!"), { status: 404 });
  }
}
