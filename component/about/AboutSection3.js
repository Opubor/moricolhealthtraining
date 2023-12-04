import React from "react";

const AboutSection3 = ({ style }) => {
  return (
    <div className={`${style} tf__about_2_area`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__about_2_img">
              <div className="tf__about_small">
                <img
                  src="images/education.png"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__about_large">
                <img
                  src="images/doctor.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__about_2_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>About Us</h5>
                <h2>Nurturing Health Literacy</h2>
              </div>
              <p>Your Source for Comprehensive Health Education Training.</p>
              <ul>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_1.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Our Mission</h4>
                    <p>
                      Empowering Future Healthcare Heroes: Our mission is to
                      provide top-notch training, equipping aspiring health
                      workers with the skills and knowledge to make a positive
                      impact in the world of healthcare.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_2.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Expert Instructors</h4>
                    <p>
                      Our team consists of certified health experts passionate
                      about sharing their knowledge and empowering others to
                      lead healthier lives.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_3.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Cutting-Edge Curriculum</h4>
                    <p>
                      Offering up-to-date and evidence-based training content to
                      stay at the forefront of health education.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_4.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Innovation in Education</h4>
                    <p>
                      Embracing innovative teaching methods and technology to
                      enhance the learning experience for our clients.
                    </p>{" "}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 mt_50 mb-100 xs_mt_100 wow fadeInUp">
            <div className="tf__about_us_counter d-flex flex-wrap align-items-center">
              <p>Dive into Our Courses Today!</p>
              <a href="/courses">Explore All</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
