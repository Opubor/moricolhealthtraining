import { workData } from "@/data/Data";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const WorkSlider = () => {
  return (
    <Slider
      className="row work_slider"
      slidesToShow={3} // Set the number of slides to show
      infinite={true}
      dots={true}
      autoplay={{ delay: 3000 }}
      arrows={false}
      slidesToScroll={1}
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
            slidesToShow: 3,
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
      {workData.map((item) => (
        <div className="col-xl-4 wow fadeInUp" key={item.id}>
          <div className={`tf__work_single ${item.color}`}>
            <div className="tf__work_single_img">
              <img src={item.imgSrc} alt="work" className="img-fluid w-100" />
            </div>
            <div className="tf__work_single_text">
              <h3 className="fw-bold">{item.task}</h3>
              <h3>{item.rates}</h3>
              <p>{item.desc}</p>

              {/* <Link href={"/sign-up/company"}> Register you Company</Link> */}
              <a href={"/sign-up/company"}>
                <i className="fas fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default WorkSlider;
