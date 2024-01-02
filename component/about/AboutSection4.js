import React from "react";

const AboutSection4 = ({ style }) => {
  return (
    <div className={`${style} tf__about_2_area mb-4 pb-4 mb_25`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__about_2_text ">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                {/* <h5>About Us</h5> */}
                <h2>MORICOL SERVICES</h2>
              </div>
              <p>
                Welcome to Moricol Health Care Services - Where Your Well-being
                is Our Priority!
              </p>
              <p>
                At Moricol Health Care Services, we believe that a healthier
                life is a happier life. Our journey began with a vision to
                revolutionize the way you experience healthcare, by seamlessly
                integrating cutting-edge services that cater to your diverse
                needs. We are not just a healthcare website; we are your
                partners in well-being.
              </p>

              <ul className="w-100">
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_1.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Our Approach: Elevating Health Care</h4>
                    <p>
                      Imagine a world where healthcare is beyond hospitals.
                      Moricol introduces comprehensive care. From Telemedicine
                      to Online Pharmacy, Domiciliary Care, and Wellness
                      Coaching, connect with professionals who understand you.
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
                    <h4>Empowerment Through Knowledge</h4>
                    <p>
                      Our platform is a knowledge hub. Certification Programs,
                      from medical training to massage therapy, empower you on
                      your health journey.
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
                    <h4>Compassion in Every Service</h4>
                    <p>
                      Behind every health concern is a person seeking support.
                      Moricol's team is driven by care. Whether Domiciliary
                      Care, Medical Loans, or Health-focused Travel Services,
                      we're here with compassion.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__about_2_img">
              <div className="">
                <img
                  src="images/moricollogo.jpeg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <div className="text">
                <h4 className="fw-bold">Why MORICOL!</h4>
                
                <h6 className="my-2"><span className="text-danger fw-bold">Tailored Precision: </span>Personalized experiences that address your concerns.</h6>
                <h6 className="my-2"><span className="text-danger fw-bold">Expert Excellence: </span>Access professionals at the forefront, from doctors to coaches.</h6>
                <h6 className="my-2"><span className="text-danger fw-bold">Guided by Innovation: </span>Stay ahead with innovative solutions for well-being.</h6>
                <h6 className="my-2"><span className="text-danger fw-bold">Your Wellness Ally: </span>Partners in your journey – we guide, support, and celebrate.</h6>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection4;
