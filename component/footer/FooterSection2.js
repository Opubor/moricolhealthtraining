"use client";
import { useEduorContext } from "../../context/EduorContext";
import Link from "next/link";
import React from "react";

const FooterSection2 = ({ style }) => {
  const { handleVideoShow } = useEduorContext();
  return (
    <footer className={style}>
      {/* <div className="container">
        <div className="tf__footer_apply">
          <div className="tf__footer_apply_overlay">
            <a className="venobox" role="button" onClick={handleVideoShow}>
              <i className="fas fa-play"></i>
            </a>
            <h3>Let’s best Something Agency</h3>
            <p>
              There are many variations of passages of agency Lorem Ipsum Fasts
              injecte.
            </p>
            <a className="apply_btn" href="#">
              Apply Now
            </a>
          </div>
        </div>
      </div> */}

      <div className="tf__footer">
        <div className="tf__footer_overlay pt_225">
          <div className="container">
            <div className="tf__footer_2_content_area">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_logo_area">
                    <Link className="footer_logo" href="/">
                      <img
                        src={"/images/moricollogo.jpeg"}
                        alt="Moricol"
                        className="img-fluid w-100"
                      />
                    </Link>
                    <p>
                      Elevating Lives through Expert Health Education: Your
                      Wellness Partner.
                    </p>
                    <p>Join the Moricol Community:</p>
                    <p>
                      Moricol isn't just a website – it's a community enhancing
                      lives, one service at a time. Explore, embark on
                      well-being, and redefine healthcare
                    </p>
                    <p>Welcome to Moricol - Your Health, Our Priority</p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/profile.php?id=100094794262869&mibextid=LQQJ4d"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          target="_blank"
                          href="https://instagram.com/moricol2022?igshid=OGQ5ZDc2ODk2ZA=="
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Quick Links</h3>
                    <ul>
                      <li>
                        <Link href="/eLearning">E-Learning Courses</Link>
                      </li>
                      <li>
                        <Link href="/courses">classroom Courses</Link>
                      </li>
                      <li>
                        <Link href="/bundles">Course Bundles</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Contact Address</h3>
                    <p>
                      UK Address 1: 8 Wincanton Road Romford RM3 9DH United
                      Kingdom.
                    </p>
                    <p>
                      UK Address 2: 26a Hughes Street Swindon SN2 2HG Wiltshire
                      United Kingdom.
                    </p>
                    <p>
                      Head Office: House 2, Road 4, Abraham Adesanya Estate,
                      Ajah Lagos.
                    </p>
                    <p>
                      Branch Office: 27, Reuben Agho Avenue, off 2nd Ugbor road,
                      GRA, Benin City, Edo state
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Our Contacts</h3>
                    <p>
                      Phone 1:{" "}
                      <a href="tel:09124460695" className="text-warning">
                        {" "}
                        +234 9124460695
                      </a>
                    </p>
                    <p>
                      Phone 2:{" "}
                      <a href="tel:447479545757" className="text-warning">
                        {" "}
                        +447 479545757
                      </a>
                    </p>
                    <p>
                      Phone 3:{" "}
                      <a href="tel:447417551811" className="text-warning">
                        {" "}
                        +447 417551811
                      </a>
                    </p>
                    <p>
                      WhatSapp:{" "}
                      <a
                        href={`https://wa.me/09124460695`}
                        className="text-warning"
                        target="_blank"
                      >
                        {" "}
                        +234 9124460695
                      </a>
                    </p>
                    <p>
                      Email:
                      <a
                        href="mailto:infomoricolhealthcare@gmail.com"
                        className="text-warning"
                      >
                        infomoricolhealthcare@gmail.com{" "}
                      </a>
                    </p>
                    <p>
                      Email:
                      <a
                        href="mailto:moricolhealth@qualityservice.com"
                        className="text-warning"
                      >
                        moricolhealth@qualityservice.com{" "}
                      </a>
                    </p>
                    <p>
                      Website:
                      <a href="/" className="text-warning">
                        www.moricolservices.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>Copyright ©Moricol all rights reserved.</p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <a href="/about">Privacy policy</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/terms-condition">Terms and Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;
