import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import EditStaffEnrForm from "@/component/form/EditStaffEnrForm";
import Layout from "@/component/layout/Layout";
import prisma from "@/lib/prisma-client";
import React from "react";

type PageProps = {
  params: { id: number | string | undefined };
};

const getStaffDetails = async (id: string) => {
  let staffDetails = await prisma.companyEnrollment.findFirst({
    where: { id: id },
    include: {
      company: true,
      enrollment: true,
    },
  });
  JSON.stringify(staffDetails, (key, value) => {
    return typeof value === "bigint" ? Number(value) : value;
  });
  return staffDetails;
};

async function Page({ params }: PageProps) {
  const staffDetails = await getStaffDetails(params?.id as string);
  return (
    <div>
      <Layout>
        <BreadcrumbSection header={"My Courses"} title={"Edit Staff Details"} />
        <div className="container mt_50 mb_95 max-w-100">
          <div className="d-flex align-items-center justify-contents-center gap-1">
            <i className="fa-solid fa-person"></i>{" "}
            <h5 className="fw-bold">{staffDetails?.name}</h5>
          </div>
          <EditStaffEnrForm staffDetails={staffDetails} />

          {/* <AddStaffEnrForm enrollment={enrollment} enrollmentId={params?.id as string} companyId={enrollment?.user?.id as string} /> */}
        </div>
      </Layout>
    </div>
  );
}

export default Page;
