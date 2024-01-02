import ForgotPasswordForm from "@/component/form/ForgotPasswordForm";
import Link from "next/link";
import React from "react";

function ForgotPassword() {
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
              <p className="text-center">
                Please enter your email to reset your password
              </p>
              <ForgotPasswordForm />
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

export default ForgotPassword;
