import { options } from "@/app/api/auth/[...nextauth]/options";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AddStaffEnrForm from "@/component/form/AddStaffEnrForm";
import Layout from "@/component/layout/Layout";
import prisma from "@/lib/prisma-client";
import { getUser } from "@/service/userService";
import { getServerSession } from "next-auth";
import React from "react";

type PageProps = {
  params: { id: number | string | undefined };
};

const getEnrollmentDetails = async (id: string) => {
  let enrollment = await prisma.enrollment.findFirst({
    where: { id: id },
    include: {
      user: true,
      CompanyEnrollment:true,
      Payment:true
    }
  });
  JSON.stringify(enrollment, (key, value) => {
    return typeof value === "bigint" ? Number(value) : value;
  });
  return enrollment;
};
async function Page({ params }: PageProps) {
  const session = await getServerSession(options)
  const enrollment = await getEnrollmentDetails(params?.id as string);
  const user = await getUser(session?.user?.id as string);

  return (
    <>
      <Layout user={user}>
        <BreadcrumbSection header={"My Courses"} title={"Add Staff Details"} />
        <div className="container mt_50 mb_95 max-w-100">
          <div className="d-flex align-items-center justify-contents-center gap-1">
            <i className="fa fa-book" aria-hidden="true"></i>
            <h5 className="fw-bold">{enrollment?.course}</h5>
          </div>
          <p className="mb-4">
            Total number of Staffs paid for:{" "}
            <span className="fw-bold">{enrollment?.noOfUsers}</span>
          </p>


          <AddStaffEnrForm enrollment={enrollment} enrollmentId={params?.id as string} companyId={enrollment?.user?.id as string} />
        </div>
      </Layout>
    </>
  );
}

export default Page;
