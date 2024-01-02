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
      const response = await fetch("/api/register/companyRegister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data?.name,
          email: data?.email,
          phone: data?.phone,
          role: data?.role,
          address: data?.address,
          businessType: data?.businessType,
          registrationNumber: data?.registrationNumber,
          industry: data?.industry,
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
        <div className="w-100 py-1 d-flex justify-content-center">
          <Link
            href={"/sign-up"}
            className="text-center text-decoration-none text-black text-center"
          >
            Regular User
          </Link>
        </div>
        <div className="border-bottom border-primary border-2 w-100 d-flex justify-content-center py-1">
          <Link
            href={"/sign-up/company"}
            className="text-decoration-none text-primary"
          >
            Company
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="hidden"
          value="company"
          {...register("role", { required: true })}
        />
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__login_imput">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
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
              <label>Business Type</label>
              <select
                class="form-control"
                id="businessType"
                {...register("businessType", { required: true })}
              >
                <option value="" selected disabled>
                  Select Business Type
                </option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Partnership">Partnership</option>
                <option value="Limited Liability Company (LLC)">
                  Limited Liability Company (LLC)
                </option>
                <option value="Corporation">Corporation</option>
                <option value="Nonprofit Organization">
                  Nonprofit Organization
                </option>
              </select>
              {errors.gender && (
                <p className="text-danger text-sm">
                  Business Type is required.
                </p>
              )}
            </div>
          </div>

          <div className="col-xl-12">
            <div className="tf__login_imput">
              <label>Registration No.</label>
              <input
                type="text"
                placeholder="Registration Number"
                {...register("registrationNumber", { required: true })}
              />
              {errors.gender && (
                <p className="text-danger text-sm">
                  Registration Number is required.
                </p>
              )}
            </div>
          </div>

          <div className="col-xl-12">
            <div className="tf__login_imput">
              <label>Industry/Sector</label>
              <select
                class="form-control"
                id="industrySelect"
                {...register("industry", { required: true })}
              >
                <option value="" selected disabled>
                  Select Industry/Sector
                </option>
                <option value="General Health and Wellness">
                  General Health and Wellness
                </option>
                <option value="Fitness and Exercise">
                  Fitness and Exercise
                </option>
                <option value="Nutrition and Diet">Nutrition and Diet</option>
                <option value="Medical Education">Medical Education</option>
                <option value="Holistic Health">Holistic Health</option>
                <option value="Mental Health and Counselling">
                  Mental Health and Counselling
                </option>
                <option value="Sports Medicine">Sports Medicine</option>
                <option value="Home and Community based services">
                  Home and Community based services
                </option>
                <option value="Others">Others</option>
              </select>
              {errors.gender && (
                <p className="text-danger text-sm">
                  Industry/Sector is required.
                </p>
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
