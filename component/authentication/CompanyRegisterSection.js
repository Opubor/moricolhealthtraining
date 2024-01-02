"use client";
import React from "react";
import CompanyRegisterForm from "../form/CompanyRegisterForm";
import Link from "next/link";

const RegisterSection = () => {
  return (
    <section className="tf__registration mt-4">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xxl-5 col-xl-6 col-md-9 col-lg-7 m-auto">
            <div className="tf__login_area">
              <div className="enrollmentlogo">
                <img src="/images/moricollogo.jpeg" />
              </div>
              <h2 className="text-center mt-2">Health Care Training</h2>
              <p className="text-center">Register now and kickstart your training journey!</p>
              <CompanyRegisterForm />

              <p className="">
                Already have an account ? <Link href="/sign-in">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
