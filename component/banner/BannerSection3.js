"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const BannerSection3 = () => {
  const { handleVideoShow } = useEduorContext();
  return (
    <section className="tf__banner_2 tf__banner_3">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-md-10 col-lg-8">
            <div className="tf__banner_text wow fadeInUp">
              <h5 className="text-white">
                Nurturing Excellence in Healthcare: Explore Specialized Courses
                Now!
              </h5>
              <h1 className="text-white">
                Health <span>Training</span> For A Better You.
              </h1>
              <p className="text-white">
                Empowering Health Professionals: Elevate Your Expertise Here!
              </p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn_3" href="/courses">
                    our courses
                  </Link>
                </li>
              </ul>
              <div className="d-flex gap-2 align-items-center mt-4">
                <i class="fas fa-percent text-white smileyface"></i>{" "}
                <div className="text-white">
                  Experience the best with a 10% discount on all our health
                  training courses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection3;
