import Sidebar from "@/component/Sidebar";
import prisma from "@/lib/prisma-client";
import Link from "next/link";
import React, { Fragment } from "react";

const getEnrollment = async (id: string) => {
  let enrollment = await prisma.enrollment.findFirst({
    where: { id: id },
    include: {
      CompanyEnrollment: true,
      Payment: true,
      user: true,
    },
  });

  JSON.stringify(enrollment, (key, value) => {
    return typeof value === "bigint" ? Number(value) : value;
  });

  return enrollment;
};

type PageProps = {
  params: { id: string };
};

async function Page({ params }: PageProps) {
  const enrollment = await getEnrollment(params?.id);
  return (
    <Sidebar>
      <div>
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="/images/moricollogo.jpeg"
            className="card-img-top"
            alt="User Avatar"
          />

          <div className="card-body">
            <h5 className="card-title">{enrollment?.course}</h5>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">ID: {enrollment?.enrollmentId}</li>
              <li className="list-group-item">
                {enrollment?.user?.name} - {enrollment?.user?.role}
              </li>
              <li className="list-group-item">UserID: {enrollment?.user?.userId}</li>
              {enrollment?.email && (
                <li className="list-group-item">Email: {enrollment?.email}</li>
              )}
              {enrollment?.phone && (
                <li className="list-group-item">
                  Phone Number: {enrollment?.phone}
                </li>
              )}
              <li className="list-group-item">Date: {enrollment?.date}</li>
              <li className="list-group-item">
                Payment Status:{" "}
                {enrollment?.status === "Pending" && (
                  <p className="bg-warning small text-white px-2 py-1 rounded text-center">
                    {enrollment?.status}
                  </p>
                )}{" "}
                {enrollment?.status === "Failed" && (
                  <p className="bg-danger small text-white px-2 py-1 rounded text-center">
                    {enrollment?.status}
                  </p>
                )}
                {enrollment?.status === "Success" && (
                  <p className="bg-success small text-white px-2 py-1 rounded text-center">
                    {enrollment?.status}
                  </p>
                )}
              </li>
              <li className="list-group-item">
                Amount Paid:{" "}
                {new Intl.NumberFormat("en-us", {
                  style: "currency",
                  currency: enrollment?.currency as string,
                }).format(Number(enrollment?.amount) / 100)}
              </li>
              {enrollment?.noOfUsers && (
                <li className="list-group-item">
                  No of Staffs: {enrollment?.noOfUsers}
                </li>
              )}
              <li className="list-group-item">
                Time Table: {enrollment?.timeTable}
              </li>
              <li className="list-group-item">
                Payment Gateway: {enrollment?.paymentType}
              </li>
            </ul>
          </div>
        </div>
        {enrollment?.status === "Success" && (
          <Fragment>
            {enrollment?.CompanyEnrollment?.map((data: any, i: any) => (
              <div key={i} className="mt-4">
                <h5 className="fw-bold text-success my-1">Staff {i + 1}</h5>
                <div className="row">
                  <div className="col-xl-12 my-1">
                    <div className="tf__login_imput">
                      <label>Staff Name</label>
                      <p className="border px-4 py-2">{data?.name}</p>
                    </div>
                  </div>

                  <div className="col-xl-12 my-1">
                    <div className="tf__login_imput">
                      <label>Email</label>
                      <p className="border px-4 py-2">{data?.email}</p>
                    </div>
                  </div>

                  <div className="col-xl-12 my-1">
                    <div className="tf__login_imput">
                      <label>Phone Number</label>
                      <p className="border px-4 py-2">{data?.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        )}
      </div>
    </Sidebar>
  );
}

export default Page;
