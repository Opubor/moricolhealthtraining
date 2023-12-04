import React from "react";
import CourseSlider from "../slider/CourseSlider";

const CourseSection = ({ style }) => {
  return (
    <section className={`${style} mt_95`}>
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_45">
              <h5>OUR POPULAR COURSES</h5>
              <h2>Explore Knowledge: Dive into a World of Courses</h2>
            </div>
          </div>
        </div>
        <CourseSlider />
      </div>
    </section>
  );
};

export default CourseSection;
