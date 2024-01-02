import Sidebar from "@/component/Sidebar";
import prisma from "@/lib/prisma-client";
import Link from "next/link";
import React from "react";

const getEnrolledUsers = async () => {
  return prisma.enrollment.findMany({ include: { user: true } });
};

async function Page() {
  const enrolledUsers = await getEnrolledUsers();

  return (
    <Sidebar>
      <h3 className="fw-bold text-decoration-underline">Enrollments</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserID</th>
            <th scope="col">EnrollmentID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Course</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((data: any, i: any) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{data?.user?.userId}</td>
              <td>{data?.enrollmentId}</td>
              <td>
                {data?.user?.name}- ({data?.user?.role})
              </td>
              <td>{data?.email ? data?.email : data?.user?.email}</td>
              <td>{data?.phone ? data?.phone : data?.user?.phone}</td>
              <td>{data?.course}</td>
              <td>{data?.date.slice(0, -36)}</td>

              <td>
                {new Intl.NumberFormat("en-us", {
                  style: "currency",
                  currency: data?.currency,
                }).format(Number(data?.amount) / 100)}
              </td>
              <td>
                {data?.status === "Pending" && (
                  <p className="bg-warning small text-white px-2 py-1 rounded text-center">
                    {data?.status}
                  </p>
                )}{" "}
                {data?.status === "Failed" && (
                  <p className="bg-danger small text-white px-2 py-1 rounded text-center">
                    {data?.status}
                  </p>
                )}
                {data?.status === "Success" && (
                  <p className="bg-success small text-white px-2 py-1 rounded text-center">
                    {data?.status}
                  </p>
                )}
              </td>
              <td>
                <Link href={`/admin/enrolledStudents/details/${data?.id}`}>
                  <span className="bg-primary small text-white px-3 py-2 rounded text-center">
                    View
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Sidebar>
  );
}

export default Page;
