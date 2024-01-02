import prisma from "@/lib/prisma-client";
import { TEditProfileSchema, editProfileSchema } from "@/schema/userSchema";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(
    req: NextRequest,
    { params }: { params: { id: number } }
  ): Promise<any> {
    const body: TEditProfileSchema = await req.json();
    const result = editProfileSchema.safeParse(body);
  
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
            name: result?.data?.name,
            address: result?.data?.address as string,
            gender: result?.data?.gender as string,
            phone: result?.data?.phone as string
        }
      });
      return new Response(JSON.stringify("Updated successfully"), {
        status: 200,
      });
    } catch (error) {
      return new Response(JSON.stringify("Failed!!!"), { status: 404 });
    }
  }