"use client";
import React from "react";
import LoginForm from "../form/LoginForm";
import Link from "next/link";

const LoginSection = () => {
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
              <p className="text-center">Sign in now to embark on your healthcare training journey</p>
              <LoginForm />

              <p className="">
                Don’t have an account ?{" "}
                <Link href="/sign-up">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
