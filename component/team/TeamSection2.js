"use client";
import React from "react";
import TeamSlider2 from "../slider/TeamSlider2";

const TeamSection2 = ({ style }) => {
  return (
    <section className={style}>
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>Meet OUR Team</h5>
              <h2>
                Our Expert Team is Dedicated to Guiding Your Educational
                Journey!
              </h2>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center w-100">
        <div className="col-xl-4 wow fadeInUp">
          <div className="tf__single_team">
            <div className="tf__single_team_img">
              <img
                src={"/images/maureen.jpeg"}
                alt={"CEO/MD"}
                className="img-fluid w-100"
              />
              <ul>
                <li>
                  <a href={`tel:2349124460695`}>
                    <i className="fa fa-phone"></i>
                  </a>
                </li>
                {/* <li>
                  <a href={`mailto:PP@GMAIL.COM`}>
                    <i className="fa fa-envelope"></i>
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="tf__single_team_text">
              <p className="title">Mrs Olokhifa Maureen Aghomon </p>
              <p>CEO/MD</p>
            </div>
          </div>
        </div>
        </div>
        {/* <TeamSlider2 /> */}
      </div>
    </section>
  );
}

export default TeamSection2;
