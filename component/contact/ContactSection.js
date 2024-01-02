import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <section className="tf__study_contact">
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeInUp">
            <div className="tf__study_contact_text">
              <div className="img">
                <img
                  src="images/book_shapes.png"
                  alt="contact"
                  className="img-fluid w-100"
                />
              </div>
              <div className="text">
                <h4>Moricol Health Care Training</h4>
                <p>
                We pride ourselves on offering cutting-edge curriculum and staying at the forefront of health education. Our courses are designed with innovation in mind, incorporating the latest research and technology to enhance your learning experience.
                </p>
              </div>
              <Link href="/contact">contact us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
