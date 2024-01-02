import prisma from "@/lib/prisma-client";
import { TEditCompanyStaffEnrollmentSchema, editCompanyStaffEnrollmentSchema } from "@/schema/enrollmentSchema";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  const staffDetails = await prisma.companyEnrollment.findFirst({
    where: { id: params.id.toString() },
    include: {
      company: true,
      enrollment: true,
    },
  });
  return new Response(
    JSON.stringify(staffDetails, (key, value) => {
      return typeof value === "bigint" ? value.toString() : value;
    }),
    {
      status: 200,
    }
  );
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<any> {
  console.log("aaa")
  const body: TEditCompanyStaffEnrollmentSchema = await req.json();
  const result = editCompanyStaffEnrollmentSchema.safeParse(body);
  console.log("bbb")

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error,
      })
    );
  }
  console.log("ccc")

  try {
    const editStaffDetails = await prisma.companyEnrollment.update({
      where: { id: params.id as string },
      data: {
        name: result?.data?.name,
        email: result?.data?.email,
        phoneNumber: result?.data?.phoneNumber,
      },
    });
    console.log("ddd")

    return new Response(JSON.stringify("Updated successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Failed!!!"), { status: 404 });
  }
}

