"use client";
import { courseDataArray } from "@/data/Data";
import Link from "next/link";
import React, { useState } from "react";
import CourseDetailTabContent from "./CourseDetailTabContent";
import { useSession } from "next-auth/react";
import RegPrompter from "../RegPrompter";

const CourseDetailSection = ({ courseData, courseContents, user }) => {
  return (
    <section className="tf__courses_details mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="tf__courses_details_area">
              <div className="tf__courses_details_img">
                <img
                  src={`/${courseData.imgSrc}`}
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
                    <p>{courseData.category}</p>
                  </li>

                  <li>
                    <h4>Level</h4>
                   
                    <p>{courseData.price}</p>
                  </li>
                  <li>
                    {/* {session?.user ? (
                      <Link
                        className="common_btn"
                        href={`/enrollment/${courseData?.id}?type=inclass`}
                      >
                        enrol
                      </Link>
                    ) : (
                      <div
                        onClick={() => promptRegistration()}
                        className="common_btn mx-2"
                        href={`/enrollment/${courseData?.id}?type=inclass`}
                      >
                        enrol
                      </div>
                    )}
                    {error && <RegPrompter />} */}
                  </li>
                </ul>
              </div>

              <div className="tf__courses_det_text">
                <h2>{courseData.title}</h2>

                <CourseDetailTabContent
                  courseData={courseData}
                  courseContents={courseContents}
                  user={user}
                />
              </div>
            </div>
          </div>
          {/* <div className="col-xl-4 col-lg-4">
            <div className="tf__sidebar" id="sticky_sidebar">
              <div className="tf__sidebar_blog sidebar_item">
                <h3>popular courses</h3>
                <ul>
                  {courseDataArray.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <div className="img">
                        <img
                          src={`/${item.imgSrc}`}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                       

                        <Link href={`/courses/${item.slug}`}>{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CourseDetailSection;
