"use client";
import React from "react";
import TeamSlider2 from "../slider/TeamSlider2";
import TeamSlider3 from "../slider/TeamSlider3";

const TeamSection3 = ({ style }) => {
  return (
    <section className={style}>
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>DIRECTORS</h5>
              {/* <h2>
                Our Expert Team is Dedicated to Guiding Your Educational
                Journey!
              </h2> */}
            </div>
          </div>
        </div>

      
        <TeamSlider3 />
      </div>
    </section>
  );
}

export default TeamSection3;
