"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";
import Currency from "../currency/Currency";

const AllELearningSection = ({ user }) => {
  const {
    currentELearningItems,
    currentELearningPage,
    handleELearningPageChange,
    totalELearningPages,
  } = useEduorContext();
  return (
    <section className="tf__courses_page mt_60">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>OUR E-LEARNING COURSES</h5>
              <h2>
                Empowering Health Workers: Specialized Training Courses Await!
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {currentELearningItems.map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item.id}>
              <div className="tf__single_courses">
                <div className="tf__single_courses_img">
                  <Link className="title" href={`/eLearning/${item.slug}`}>
                    <img
                      src={item.imgSrc}
                      alt="courses"
                      className="img-fluid w-100"
                    />{" "}
                  </Link>
                  <a className={`categories ${item.color}`} href="#">
                    {item.category}
                  </a>

                  <Currency
                    currency={user?.currency}
                    price={Number(item?.price)}
                  />
                </div>
                {/* ===Discount=== */}
                <div className="discount">
                  <p>-10% discount</p>
                </div>
                {/* ============== */}
                <ul className="tf__single_course_header">
                  {/* <li>
                    <i className="fas fa-user"></i> {item.instructor}
                  </li> */}
                  <li>
                    <i className="fas fa-folder-open"></i> {item.lessons}
                  </li>
                </ul>
                <div className="tf__single_courses_text">
                  <Link className="title" href={`/eLearning/${item.slug}`}>
                    {item.title}
                  </Link>
                  <p className="description">{item.description}</p>
                  <Link
                    className="title text-primary small"
                    href={`/eLearning/${item.slug}`}
                  >
                    View/Enrol Course
                  </Link>
                  <ul>
                    {/* <li>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      <span>(0{item.rating})</span>
                    </li> */}
                    {/* <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-clock"></i>{item.students}</li> */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tf__pagination mt_50">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentELearningPage === 1 ? "disabled" : ""
                      }`}
                      aria-label="Previous"
                      onClick={() =>
                        handleELearningPageChange(currentELearningPage - 1)
                      }
                    >
                      <i className="far fa-angle-left"></i>
                    </a>
                  </li>
                  {Array.from({ length: totalELearningPages }, (_, index) => (
                    <li className="page-item" key={index}>
                      <a
                        className={`page-link ${
                          currentELearningPage === index + 1 ? "active" : ""
                        }`}
                        onClick={() => handleELearningPageChange(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentELearningPage === totalELearningPages
                          ? "disabled"
                          : ""
                      }`}
                      aria-label="Next"
                      onClick={() =>
                        handleELearningPageChange(currentELearningPage + 1)
                      }
                    >
                      <i className="far fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllELearningSection;
