"use client";
import { useEduorContext } from "@/context/EduorContext";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from "@/schema/userSchema";
import Link from "next/link";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerUserSchema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data?.name,
          email: data?.email,
          phone: data?.phone,
          role: data?.role,
          address: data?.address,
          gender: data?.gender,
          password: data?.password,
          confirmPassword: data?.confirmPassword,
        }),
      });
      setLoading(false);
      const res = response.status;
      if (res === 400) {
        return toast.error("Email already exists!", {
          position: "top-right",
        });
      } else res === 200;
      {
        return toast.success("Registration Successful.", {
          position: "top-right",
        });
      }
    } catch (error) {
      return toast.error("Registration failed!", {
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-around mb-2 border-bottom border-3">
        <div className="border-bottom border-primary border-2 w-100 py-1">
          <h6 className="text-center text-primary">Regular User</h6>
        </div>
        <div className="w-100 d-flex justify-content-center py-1">
          <Link href={"/sign-up/company"} className="text-decoration-none text-black">Company</Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="hidden"
          value="student"
          {...register("role", { required: true })}
        />
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__login_imput">
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
            <div className="tf__login_imput">
              <label>email</label>
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

          <div className="col-xl-12">
            <div className="tf__login_imput">
              <label>phone number</label>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="text-danger text-sm">Phone Number is required.</p>
              )}
            </div>
          </div>

          <div className="col-xl-12">
            <div className="tf__login_imput">
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
            <div className="tf__login_imput">
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
            <div className="tf__login_imput">
              <label>password</label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-danger text-sm">Password is required.</p>
              )}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tf__login_imput">
              <label>confirm password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <p className="text-danger text-sm">Passwords must match.</p>
              )}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tf__login_imput">
              <button type="submit" className="common_btn">
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
