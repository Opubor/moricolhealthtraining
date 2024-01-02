import Sidebar from "@/component/Sidebar";
import prisma from "@/lib/prisma-client";
import React from "react";

const getEnrolledUsers = async () => {
  return prisma.payment.findMany({ include: { user: true, enrollment: true } });
};

async function Page() {
  const enrolledUsers = await getEnrolledUsers();

  return (
    <Sidebar>
      <h3 className="fw-bold text-decoration-underline">Payments</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">PaymentId</th>
            <th scope="col">EnrollmentID</th>
            <th scope="col">Student/Company</th>
            <th scope="col">Course</th>
            <th scope="col">Date</th>
            <th scope="col">Payment Gateway</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((data: any, i: any) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{data?.paymentId}</td>
              <td>{data?.enrollment?.enrollmentId}</td>
              <td>
                {data?.user?.name} - ({data?.user?.role})
              </td>
              <td>{data?.course}</td>
              <td>{data?.date.slice(0, -36)}</td>
              <td>{data?.paymentType}</td>
              <td>
                {new Intl.NumberFormat("en-us", {
                  style: "currency",
                  currency: data?.currency,
                }).format(Number(data?.amount) / 100)}
              </td>
              <td>
                {data?.paymentStatus === "Pending" && (
                  <p className="bg-warning small text-white px-2 py-1 rounded text-center">
                    {data?.paymentStatus}
                  </p>
                )}{" "}
                {data?.paymentStatus === "Failed" && (
                  <p className="bg-danger small text-white px-2 py-1 rounded text-center">
                    {data?.paymentStatus}
                  </p>
                )}
                {data?.paymentStatus === "Success" && (
                  <p className="bg-success small text-white px-2 py-1 rounded text-center">
                    {data?.paymentStatus}
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Sidebar>
  );
}

export default Page;
