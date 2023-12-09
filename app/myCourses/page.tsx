import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma-client";
import Layout from "@/component/layout/Layout";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";

const getEnrolledCourses = async (id: string) => {
  const courses = await prisma.enrollment.findMany({
    where: { userId: id },
    include: { user: true, Payment: true },
  });

  JSON.stringify(courses, (key, value) => {
    return typeof value === "bigint" ? Number(value) : value;
  });
  return courses;
};

async function Page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/sign-in");
  }

  const enrolledCourses = await getEnrolledCourses(session?.user?.id as string);

  return (
    <div>
      <Layout>
        <BreadcrumbSection header={"My Courses"} title={"My Courses"} />

        <div className="container mt_50 mb_95 max-w-100">
          <h2 className="fw-bold text-success text-decoration-underline mb-4">
            Registered Courses
          </h2>
          <table className="table max-w-100 overflow-auto">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">EnrollmentID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Payment For</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((data: any, i: any) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{data?.enrollmentId}</td>
                  <td>{data?.user?.name}</td>
                  <td>{data?.email}</td>
                  <td>{data?.phone}</td>
                  <td>{data?.course}</td>
                  <td>{data?.date.slice(0, -37)}</td>
                  <td>&#8358;{Number(data?.amount) / 100}</td>
                  <td>
                    {data?.status === "Pending" && (
                      <p className="bg-warning small text-white p-2 rounded">
                        {data?.status}
                      </p>
                    )}{" "}
                    {data?.status === "Failed" && (
                      <p className="bg-danger small text-white p-2 rounded">
                        {data?.status}
                      </p>
                    )}
                    {data?.status === "Success" && (
                      <p className="bg-success small text-white p-2 rounded">
                        {data?.status}
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}

export default Page;
