import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="tf__about">
      <div className="container">
      

        <div className="row">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft">
            <div className="tf__about_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h2 className="mt-4 pt-4">Moricol Training Periodic Pattern for Delegates</h2>
              </div>
              <p>
              These considerations are as follows:
              </p>
              <ul>
                <li>Batch Training</li>
                <p>Delegates are required from one person to a maximum of 30 persons.</p>
                <li>Training Pattern </li>
                <p>The training pattern includes the regular classes and the master classes. The regular classes is conducted with a novice approach to the health care and social care environment, hence the period of learning for effective assimilation will take longer. However, the master classes reflect the delegates ability to grasp the modules faster probably because of being conversant with the health care and social care environment and are more likely to require a shorter training pattern.</p>
                <li>Health Care/ Social Care Workers</li>
                <p>These are delegates who wish to train in order to improve and acquire move certifications that is recognized internationally.</p>
                <li>Non-Health Care/ Social Care Workers</li>
                <p>These are delegates who want to be certificated outside their field to boost their career drive.</p>
              </ul>
             
            </div>
          </div>
          <div className="col-xl-6 col-sm-9 col-md-8 col-lg-6 wow fadeInRight">
            <div className="tf__about_img">
              <img
                src="images/education.png"
                alt="about"
                className="img-fluid w-100"
              />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
