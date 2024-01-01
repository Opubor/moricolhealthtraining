"use client";
import { useEduorContext } from "@/context/EduorContext";
import { loginUserSchema } from "@/schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginUserSchema) });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: data?.email,
        password: data?.password,
        redirect: false,
        callbackUrl: props.callbackUrl ?? "/",
      });

      if (res?.ok) {
        router.push("/");
        return router.refresh();
      } else {
        setLoading(false);

        return toast.error("Invalid credentials", {
          position: "top-right",
        });
      }
    } catch (error) {
      return console.log(error);
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
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-danger text-sm">Please enter your password</p>
            )}
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput tf__login_check_area">
            <Link href="/forgotPassword">Forget Password ?</Link>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <button type="submit" className="common_btn">
              {loading ? "loading..." : "login"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
