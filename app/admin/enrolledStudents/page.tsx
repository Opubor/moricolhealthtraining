import Sidebar from "@/component/Sidebar";
import prisma from "@/lib/prisma-client";
import React from "react";

const getEnrolledUsers = async () => {
  return prisma.enrollment.findMany({ include: { user: true } });
};

async function Page() {
  const enrolledUsers = await getEnrolledUsers();

  return (
    <Sidebar>
      <h3 className="fw-bold text-decoration-underline">Enrolled Students</h3>

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
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((data: any, i: any) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{data?.user?.userId}</td>
              <td>{data?.enrollmentId}</td>
              <td>{data?.user?.name}</td>
              <td>{data?.email}</td>
              <td>{data?.phone}</td>
              <td>{data?.course}</td>
              <td>{data?.date.slice(0, -36)}</td>
              <td>&#8358;{Number(data?.amount) / 100}</td>
              <td>{data?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Sidebar>
  );
}

export default Page;
