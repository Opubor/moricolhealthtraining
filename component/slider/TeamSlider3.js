"use client";
import React from "react";
import Slider from "react-slick";
import { teamData2 } from "@/data/Data";
import Link from "next/link";
const TeamSlider3 = () => {
  return (
    <Slider
      className="row event_slider"
      slidesToShow={3} // Set the number of slides to show
      infinite={true}
      dots={true}
      autoplay={true}
      arrows={false}
      slidesToScroll={1} // Set to 1 to scroll one slide at a time
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {teamData2.map((item) => (
        <div className="col-xl-4 wow fadeInUp" key={item.id}>
          <div className="tf__single_team">
            <div className="tf__single_team_img">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="img-fluid w-100"
              />
              <ul>
                <li>
                  <a href={`tel:${item?.phone}`}>
                    <i className="fa fa-phone"></i>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${item.email}`}>
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
               
              </ul>
            </div>
            <div className="tf__single_team_text">
              <p className="title">
                {item.name}
              </p>
              <p>{item.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TeamSlider3;
