import React from "react";

const AboutSection3 = ({ style }) => {
  return (
    <div className={`${style} tf__about_2_area mt-4 pt-4`}>
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
            <div className="tf__about_2_text ">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>About Us</h5>
                <h2>Nurturing Health Literacy</h2>
              </div>
              <p>Your Source for Comprehensive Health Education Training.</p>
              <p>
                Embark on a journey of excellence with our accredited health
                training services! We are thrilled to announce that our programs
                have earned prestigious accreditation from the United Kingdom, a
                testament to our unwavering commitment to quality education and
                your professional growth.
              </p>

              <p>
                Our company takes pride in being recognized as a CPD Certified
                Training Centre. This esteemed accreditation underscores our
                commitment to providing high-quality professional development
                programs. As a CPD Certified Training Centre, we adhere to
                rigorous standards and ensure that our training initiatives meet
                the criteria set by the Continuing Professional Development
                accreditation. This certification reflects our dedication to
                excellence, demonstrating to our clients and partners that we
                uphold the highest industry standards in delivering impactful
                and accredited training courses. It is a testament to our
                ongoing efforts to contribute to the continuous development and
                growth of professionals across various domains.
              </p>
            </div>
          </div>

          <div className="row mt-4 col-xl-6 col-lg-6 ">
            <div className="wow fadeInRight">
              <ul className="w-100 col-xl-6 col-lg-6 wow fadeInRight">
                <li className="d-flex align-items-center gap-2 mt-4">
                  <div className="aboutIcon col-1 w-4 h-4">
                    <img
                      src="images/about_2_icon_1.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h6>Our Mission</h6>
                    <p>
                      Empowering Future Healthcare Heroes: Our mission is to
                      provide top-notch training, equipping aspiring health
                      workers with the skills and knowledge to make a positive
                      impact in the world of healthcare.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2 mt-4">
                  <div className="aboutIcon col-1 w-4 h-4">
                    <img
                      src="images/about_2_icon_2.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h6>Expert Instructors</h6>
                    <p>
                      Our team consists of certified health experts passionate
                      about sharing their knowledge and empowering others to
                      lead healthier lives.{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-4 col-xl-6 col-lg-6">
            <div className="wow fadeInRight">
              <ul className="w-100 col-xl-6 col-lg-6 wow fadeInRight">
                <li className="d-flex align-items-center gap-2 mt-4">
                  <div className="aboutIcon col-1 w-4 h-4">
                    <img
                      src="images/about_2_icon_3.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h6>Cutting-Edge Curriculum</h6>
                    <p>
                      Offering up-to-date and evidence-based training content to
                      stay at the forefront of health education.{" "}
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2 mt-4">
                  <div className="aboutIcon col-1 w-4 h-4">
                    <img
                      src="images/about_2_icon_4.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h6>Career Advancement</h6>
                    <p>
                      With an accredited qualification in hand, you'll be
                      equipped to stand out in the competitive health industry
                      and advance your career with confidence.
                    </p>
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
