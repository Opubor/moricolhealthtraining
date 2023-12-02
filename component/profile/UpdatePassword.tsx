"use client";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { updatePasswordSchema } from "@/schema/userSchema";
import { toast } from "react-toastify";

interface Props {
    user: any
}

function UpdatePassword({user}: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/user/${user?.id}/updatePassword`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword,
        }),
      });
      reset();
      router.refresh();
      setLoading(false);
      const res = response.status;
      if (res === 400) {
        return toast.error("Invalid credentials", {
          position: "top-right",
        });
      } else res === 200;
      {
        return toast.success("Password update successful", {
          position: "top-right",
        });
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="profileContainer">
      <div className="profileCard">
        <h2 className="text-center w-100 text-xl my-4 text-decoration-underline text-warning">
          <i className="fa fa-gear" aria-hidden="true"></i> Update Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-xl-12">
              <div className="tf__login_imput mt-3">
                <label>Current Password</label>
                <input
                  type="password"
                  placeholder="******"
                  {...register("currentPassword", { required: true })}
                />
                {errors.currentPassword && (
                  <p className="text-danger text-sm">
                    Your current password is required
                  </p>
                )}
              </div>
            </div>

            <div className="col-xl-12">
              <div className="tf__login_imput mt-3">
                <label>New Password</label>
                <input
                  type="password"
                  placeholder="******"
                  {...register("newPassword", { required: true })}
                />
                {errors.newPassword && (
                  <p className="text-danger text-sm">
                    Please enter your new password.
                  </p>
                )}
              </div>
            </div>

            <div className="col-xl-12">
              <div className="tf__login_imput mt-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="******"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <p className="text-danger text-sm">Passwords must match</p>
                )}
              </div>
            </div>

            <div className="col-xl-12">
              <div className="tf__login_imput mt-2">
                <button type="submit" className="common_btn w-full">
                  {loading ? "Loading" : "Update Password"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
