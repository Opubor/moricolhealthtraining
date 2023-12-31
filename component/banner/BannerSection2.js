"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const BannerSection2 = () => {
  const { handleVideoShow } = useEduorContext();
  return (
    <section className="tf__banner_2 bg-danger ">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tf__banner_text tf__banner_2_text wow fadeInUp">
              <h5 className="text-white">Empower Your Wellness Journey: Elevate Your Health with Expert Training</h5>
              <h1 className="text-white">
                Transformative <span>Training</span> For a better you.
              </h1>
              <p className="text-white">
              Empowering individuals to embrace a healthier lifestyle through comprehensive and personalized health training programs
              </p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn_2" href="/courses">
                    our courses
                  </Link>
                </li>
                <li>
                  <a
                    className="venobox play_btn"
                    role="button"
                    onClick={handleVideoShow}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection2;
