"use client";
import {
  companyStaffEnrollmentSchema,
  editCompanyStaffEnrollmentSchema,
} from "@/schema/enrollmentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type PageProps = {
  companyId: string;
  enrollmentId: string;
  enrollment: any;
};

function AddStaffEnrForm({ companyId, enrollmentId, enrollment }: PageProps) {
  const router = useRouter();

  // const divArray = Array.from(
  //   { length: enrollment?.noOfUsers },
  //   (_, index) => index
  // );

  // useEffect(() => {
  //   getEnrollmentStaffs();
  // }, []);
  return (
    <div>
      <div>
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
            <Link
              href={`/myCourses/editStaffs/${data?.id}`}
              className="bg-warning px-4 py-2 rounded text-white"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddStaffEnrForm;
