import React from "react";
import Link from "next/link";
import { inductionOrientation } from "@/data/Data";

function InductionSection() {
  return (
    <section className="tf__courses_2 tf__courses_3 e_learning mt-4">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_20">
              <h5 className="mt-4">INDUCTION AND ORIENTATION COURSE</h5>
              <h2>
              Introducing candidates to healthcare and other fields of employment overseas
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {inductionOrientation.map((item) => (
            <div className=" wow fadeInUp" key={item.id}>
              <div className="tf__single_courses">
                <div className="tf__single_courses_img">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="img-fluid w-100"
                  />
                  <a className={`categories ${item.color}`} href="#">
                    {item.category}
                  </a>
                  <span>&#8358;{item.price}</span>
                </div>
                <ul className="tf__single_course_header">
                  <li>
                    <i className="fas fa-folder-open"></i> {item.lessons}
                  </li>
                </ul>
                <div className="tf__single_courses_text">
                  <Link className="title" href={`/induction`}>
                    {item.title}
                  </Link>
                  <p className="description">{item.description}</p>
                  <ul>
                    {/* <li className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-clock"></i>
                      {item.students}
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
}

export default InductionSection;
