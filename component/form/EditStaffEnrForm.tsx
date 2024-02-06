"use client";
import { editCompanyStaffEnrollmentSchema } from "@/schema/enrollmentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type PageProps = {
  staffDetails: any;
};

function EditStaffEnrForm({ staffDetails }: PageProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editCompanyStaffEnrollmentSchema),
    defaultValues: staffDetails || {},
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/enrollment/getEnrollmentStaffs/${staffDetails?.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data?.name,
            email: data?.email,
            phoneNumber: data?.phoneNumber,
          }),
        }
      );
      setLoading(false);
      const res = await response.json();
      router.refresh();
      return toast.success("Staffs Details Edited successfully", {
        position: "top-right",
      });
    } catch (error) {
      return toast.error("Registration failed!", {
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xl-12 my-2">
            <div className="tf__login_imput">
              <label>Staff Name</label>
              <input
                type="text"
                placeholder="Staff Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-danger text-sm">Name is required.</p>
              )}
            </div>
          </div>

          <div className="col-xl-12 my-2">
            <div className="tf__login_imput">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-danger text-sm">Email is required.</p>
              )}
            </div>
          </div>

          <div className="col-xl-12 my-2">
            <div className="tf__login_imput">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <p className="text-danger text-sm">Phone Number is required.</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-xl-12">
          <div className="tf__login_imput mb-4">
            <button type="submit" className="common_btn">
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditStaffEnrForm;
