import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { TResetPasswordSchema, resetPasswordSchema } from "@/schema/userSchema";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  const body: TResetPasswordSchema = await req.json();
  const result = resetPasswordSchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error,
      })
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: { resetPasswordToken: params?.id.toString() },
    });

    if (!user) {
      return new Response(JSON.stringify("User not found"), {
        status: 400,
      });
    }

    const resetPasswordTokenExpiry = user?.resetPasswordTokenExpiry;

    if (!resetPasswordTokenExpiry) {
      return new Response(JSON.stringify("Token Expired"), {
        status: 400,
      });
    }
    const today = new Date();

    if (today > resetPasswordTokenExpiry) {
      return new Response(JSON.stringify("Token Expired"), {
        status: 400,
      });
    }

    const passwordHash = bcrypt.hashSync(result.data.newPassword, 10);

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: passwordHash,
        resetPasswordToken: null,
        resetPasswordTokenExpiry: null,
      },
    });

    return new Response(JSON.stringify("Password updated successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Failed!!!"), { status: 404 });
  }
}
