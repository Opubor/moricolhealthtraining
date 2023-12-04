"use client";
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, registerUserSchema } from "@/schema/userSchema";
import Link from "next/link";

function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(forgotPasswordSchema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/resetPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data?.email,
        }),
      });
      setLoading(false);
      const res = response.status;
      console.log(res)
      if (res === 400) {
        return toast.error("Email does not exist", {
          position: "top-right",
        });
      } else res === 200;
      {
        return toast.success(
          "Click on the link sent to your email to reset your password",
          {
            position: "top-right",
          }
        );
      }
    } catch (error) {
      return toast.error("Email does not exist", {
        position: "top-right",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-danger text-sm">Please enter your E-mail</p>
            )}
          </div>
        </div>

        <div className="col-xl-12">
          <div className="tf__login_imput">
            <button type="submit" className="common_btn">
              {loading ? "loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
