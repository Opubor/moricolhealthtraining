"use client";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { editProfileSchema } from "@/schema/userSchema";

interface Props {
  user: any;
}

function ProfileCard({ user }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editProfileSchema),
    defaultValues: user || {},
  });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/user/${user?.id as string}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          address: data.address,
          phone: data.phone,
          gender: data.gender,
        }),
      });
      router.refresh();

      return setLoading(false);
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <div className="profileContainer">
      <div className="profileCard">
        <h2 className="text-center w-100 text-xl my-4 text-decoration-underline text-warning">
          <i className="fa fa-user" aria-hidden="true"></i> Account Settings
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-xl-12">
              <div className="tf__login_imput mt-3">
                <label>User ID</label>
                <p className="text-black p-2 border">{user?.userId}</p>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tf__login_imput mt-3">
                <label>name</label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-danger text-sm">Name is required.</p>
                )}
              </div>
            </div>

            <div className="col-xl-12">
              <div className="tf__login_imput mt-3">
                <label>email</label>
                <p className="text-black p-2 border">{user?.email}</p>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="tf__login_imput mt-3">
                <label>phone number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <p className="text-danger text-sm">
                    Phone Number is required.
                  </p>
                )}
              </div>
            </div>

            <div className="col-xl-12">
              <div className="tf__login_imput mt-3">
                <label>address</label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <p className="text-danger text-sm">Address is required.</p>
                )}
              </div>
            </div>

            <div className="col-xl-12">
              <div className="tf__login_imput mt-3">
                <label>Gender</label>
                <input
                  type="text"
                  placeholder="Gender"
                  {...register("gender", { required: true })}
                />
                {errors.gender && (
                  <p className="text-danger text-sm">Gender is required.</p>
                )}
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tf__login_imput mt-2">
                <button type="submit" className="common_btn w-full">
                  {loading ? "Loading" : "Edit Profile"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
