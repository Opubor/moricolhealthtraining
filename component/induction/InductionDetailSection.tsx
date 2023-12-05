"use client";
import { courseDataArray, eLearningCourses } from "@/data/Data";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import RegPrompter from "../RegPrompter";
import InductionDetailTabSection from "./InductionDetailTabSection";

const InductionDetailSection = () => {
  const { data: session } = useSession();
  const [error, setError] = useState(false);

  const promptRegistration = async () => {
    setError(true);
    return setTimeout(() => {
      setError(false);
    }, 9000);
  };
  return (
    <section className="tf__courses_details mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="tf__courses_details_area">
              <div className="tf__courses_details_img">
                <img
                  src={`/images/healthtraining.jpg`}
                  alt="courses"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__courses_details_header d-flex flex-wrap align-items-center">
                <div className="img">
                  <img
                    src={"/images/moricollogo.jpeg"}
                    alt="instuuctor"
                    className="img-fluid w-100"
                  />
                </div>

                <ul className="text d-flex flex-wrap align-items-center">
                  <li>
                    <h4>category</h4>
                    <p>Induction</p>
                  </li>

                  <li>
                    <h4>price</h4>
                    <p>&#8358;100,000</p>
                  </li>
                  <li>
                    {session?.user ? (
                      <Link
                        className="common_btn"
                        href={`/enrollment/${0}?type=induction`}

                      >
                        enrol
                      </Link>
                    ) : (
                      <div
                        onClick={() => promptRegistration()}
                        className="common_btn"
                      >
                        enrol
                      </div>
                    )}
                    {error && <RegPrompter />}
                  </li>
                </ul>
              </div>

              <div className="tf__courses_det_text">
                <h2>Induction and Orientation</h2>

                <InductionDetailTabSection />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default InductionDetailSection;
