import React from "react";
import ContactForm from "../form/ContactForm";

const ContactPageSection = () => {
  return (
    <section className="tf__contact_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row">
          {/* <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
            <div className="tf__contact_form">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>OUR contact Us</h5>
                <h2>Get Our Contact Now.</h2>
              </div>
              <p>
                Promote your blog posts, case udie, and product ouncems with the
                the branded videoscustomers coming back for services Makes best
                effort.
              </p>
              <ContactForm />
            </div>
          </div> */}
          <div className=" wow fadeInRight">
            <div className="tf__contact_text">
              <div className="tf__contact_single">
                <div className="icon blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Call</h3>
                  <a href="tel:+2349124460695">+234 9124460695</a>
                  <a href="tel:+2348093024826">+234 8093024826</a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon orange">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>mail</h3>
                  <a href="mailto:infomoricolhealthcare@gmail.com">infomoricolhealthcare@gmail.com </a>
                  <a href="mailto:moricolhealth@qualityservice.com">moricolhealth@qualityservice.com </a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon green">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>address</h3>
                  <p>Headquarter: Road 4,House 2 .Abraham Adesanya Estate, Ajah Lagos</p>
                  <p>Branch Office: 27, Reuben Agho Avenue, off 2nd Ugobest road, GRA, Benin City, Edo state</p>
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
