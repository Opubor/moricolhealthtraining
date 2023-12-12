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
                    <h3>Our Contacts</h3>
                    <p>
                      Headquarter: Road 4,House 2 .Abraham Adesanya Estate, Ajah
                      Lagos.
                    </p>
                    <p>
                      Branch Office: 27, Reuben Agho Avenue, off 2nd Ugobest
                      road, GRA, Benin City, Edo state
                    </p>
                    <p>
                      Phone:{" "}
                      <a href="tel:09124460695" className="text-warning">
                        {" "}
                        +234 9124460695
                      </a>
                    </p>
                    <p>
                      WhatSapp:{" "}
                      <a  href={`https://wa.me/09124460695`} className="text-warning" target="_blank">
                        {" "}
                        +234 9124460695
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:infomoricolhealthcare@gmail.com"
                        className="text-warning"
                      >
                        Email: infomoricolhealthcare@gmail.com{" "}
                      </a>
                      <a
                        href="mailto:moricolhealth@qualityservice.com"
                        className="text-warning"
                      >
                        Email: moricolhealth@qualityservice.com{" "}
                      </a>
                      <span className="text-warning">
                        Website: moricolhealthtraining.com
                      </span>
                    </p>
                  </div>
                </div>
                {/* <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>News Letter</h3>
                    <p>
                      Our approach to itis unique around know work an we know
                      Get hands on the you like
                    </p>
                    <form>
                      <input type="text" placeholder="Your Email" />
                      <button>send</button>
                    </form>
                  </div>
                </div> */}

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
