"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { resetPasswordSchema } from "@/schema/userSchema";
import { toast } from "react-toastify";
interface Props {
  token: string;
}

function ResetPasswordForm({ token }: Props) {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(resetPasswordSchema) });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/resetPassword/${token}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newPassword: data?.newPassword,
          confirmPassword: data?.confirmPassword,
        }),
      });
      setLoading(false);
      const res = response.status;
      if (res === 400) {
        return toast.error(await response.json(), {
          position: "top-right",
        });
      } else res === 200;
      {
        return toast.success(await response.json(), {
          position: "top-right",
        });
      }
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <section className="tf__login mt-4">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xxl-5 col-xl-6 col-md-9 col-lg-7 m-auto">
            <div className="tf__login_area">
              <div className="enrollmentlogo">
                <img src="/images/moricollogo.jpeg" />
              </div>
              <h2 className="text-center">Health Care Training</h2>
              <h4 className="text-center">RESET PASSWORD</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tf__login_imput">
                      <label>New Password</label>
                      <input
                        type="password"
                        placeholder="******"
                        {...register("newPassword", { required: true })}
                      />
                      {errors.newPassword && (
                        <p className="text-danger text-sm">
                          Please enter your New Password
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="tf__login_imput">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        placeholder="******"
                        {...register("confirmPassword", { required: true })}
                      />
                      {errors.confirmPassword && (
                        <p className="text-danger text-sm">
                          Passwords must match.
                        </p>
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
              <div className="col-xl-12">
                <div className="tf__login_imput tf__login_check_area">
                  <Link href="/sign-in">Back to Sign-In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPasswordForm;
