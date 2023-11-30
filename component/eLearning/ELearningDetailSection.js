"use client";
import { courseDataArray, eLearningCourses } from "@/data/Data";
import Link from "next/link";
import React from "react";
import ELearningDetailTabContent from "./ELearningDetailTabContent";

const ELearningDetailSection = ({ courseData, courseContents }) => {
  return (
    <section className="tf__courses_details mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
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
                    src={"/images/moricollogo.JPEG"}
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
                    <h4>price</h4>
                    <p>&#8358;{courseData.price}</p>
                  </li>
                  <li>
                    <Link className="common_btn" href={`/enrollment/${courseData?.id}?type=eLearningCourse`}>
                      enrole
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="tf__courses_det_text">
                <h2>{courseData.title}</h2>

                <ELearningDetailTabContent courseData={courseData} courseContents={courseContents} />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="tf__sidebar" id="sticky_sidebar">
              {/* <div className="tf__sidebar_search">
                <form>
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div> */}
              <div className="tf__sidebar_blog sidebar_item">
                <h3>popular courses</h3>
                <ul>
                  {eLearningCourses.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <div className="img">
                        <img
                          src={`/${item.imgSrc}`}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        {/* <p>
                          <i className="fa fa-calendar-alt"></i> {item.date}
                        </p> */}
                         <p><span className="text-warning"><i className="fa-solid fa-clock"></i></span> {item?.students}</p>
                        <Link href={`/eLearning/${item.slug}`}>{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="tf__sidebar_category sidebar_item">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      Business <span>(08)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Maintenance <span>(14)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Professional <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Technology<span>(29)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Single-Business<span>(32)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Innovation <span>(22)</span>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ELearningDetailSection;
