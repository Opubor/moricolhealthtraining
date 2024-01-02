import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { TUpdatePasswordSchema, updatePasswordSchema } from "@/schema/userSchema";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  console.log("reach");
  const body: TUpdatePasswordSchema = await req.json();
  const result = updatePasswordSchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      })
    );
  }

  const salt = 10;

  try {
    const user = await prisma.user.findFirst({
      where: { id: params.id.toString() },
    });
    const isMatch = await bcrypt.compare(
      result.data.currentPassword,
      user?.password!
    );
    if (isMatch) {
      let hashedPassword = await bcrypt.hash(
        result?.data?.newPassword.toString(),
        salt
      );
      const updateUser = await prisma.user.update({
        where: { id: params.id.toString() },
        data: { password: hashedPassword },
      });
      return new Response(JSON.stringify("Updated successfully"), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify("Wrong Password"), {
        status: 400,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify("Failed!!!"), { status: 404 });
  }
}
