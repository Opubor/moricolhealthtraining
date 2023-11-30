"use client";
import React from "react";
import LoginForm from "../form/LoginForm";
import Link from "next/link";

const LoginSection = () => {
  return (
    <section className="tf__login mt_195 xs_mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xxl-5 col-xl-6 col-md-9 col-lg-7 m-auto">
            <div className="tf__login_area">
              <h2>Welcome to Moricol!</h2>
              <p>Sign in to continue</p>
              <LoginForm />
             
              <p className="create_account">
                Don’t have an account ?{" "}
                <Link href="/sign-up">Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
