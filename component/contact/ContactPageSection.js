import React from "react";
import ContactForm from "../form/ContactForm";

const ContactPageSection = () => {
  return (
    <section className="tf__contact_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className=" wow fadeInRight mb-4">
            <div className="tf__contact_text">
              <div className="tf__contact_single">
                <div className="icon blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Call</h3>
                  <a href="tel:+2349124460695">+234 9124460695</a>
                  <a href="tel:+2348093024826">+234 8093024826</a>
                  {/* <a href="tel:+447479545757">+447 479545757</a>
                  <a href="tel:+447417551811">+447 417551811</a> */}
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon orange">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>mail</h3>
                  <a href="mailto:infomoricolhealthcare@gmail.com">
                    infomoricolhealthcare@gmail.com{" "}
                  </a>
                  <a href="mailto:moricolhealth@qualityservice.com">
                    moricolhealth@qualityservice.com{" "}
                  </a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon green">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>address</h3>
                  <p>
                    Headquarter: Road 4,House 2 .Abraham Adesanya Estate, Ajah
                    Lagos
                  </p>
                  <p>
                    Branch Office: 27, Reuben Agho Avenue, off 2nd Ugobest road,
                    GRA, Benin City, Edo state
                  </p>
                  {/* <p>
                    UK Address 1: 8 Wincanton Road Romford RM3 9DH United
                    Kingdom.
                  </p>
                  <p>
                    UK Address 2: 26a Hughes Street Swindon SN2 2HG Wiltshire
                    United Kingdom.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <h4 className="mt-4 ml-2 fw-bold">UK CONTACT</h4>
          <div className=" wow fadeInRight">
            <div className="tf__contact_text">
              <div className="tf__contact_single">
                <div className="icon blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Call</h3>
                  <a href="tel:+447479545757">+447 479545757</a>
                  <a href="tel:+447417551811">+447 417551811</a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon orange">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>mail</h3>
                  <a href="mailto:infomoricolhealthcare@gmail.com">
                    infomoricolhealthcare@gmail.com{" "}
                  </a>
                  <a href="mailto:moricolhealth@qualityservice.com">
                    moricolhealth@qualityservice.com{" "}
                  </a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon green">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>address</h3>
                  <p>
                    UK Address 1: 8 Wincanton Road Romford RM3 9DH United
                    Kingdom.
                  </p>
                  <p>
                    UK Address 2: 26a Hughes Street Swindon SN2 2HG Wiltshire
                    United Kingdom.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12 wow fadeInUp">
            <div className="tf__contact_map mt_100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4294838233777!2d3.5897183499999996!3d6.46715155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf9fb4cd52fc9%3A0x92042eb50f3d3195!2sAbraham%20Adesanya%20Estate%2C%20Eti-Osa%20106104%2C%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1701160421331!5m2!1sen!2sng"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
