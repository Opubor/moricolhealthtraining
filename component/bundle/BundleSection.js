import { bundles } from "@/data/Data";
import Link from "next/link";
import React from "react";
import Currency from "../currency/Currency";

function BundleSection({ user }) {
  return (
    <section className="tf__courses_2 tf__courses_3">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_20">
              <h5 className="mt_50">BUNDLE COURSES</h5>
              <h2>Moricol Training Course Modules for Delegates</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {bundles.map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item?.id}>
              <div className="tf__single_courses">
                <div className="tf__single_courses_img">
                  <Link className="title" href={`/bundles/${item?.slug}`}>
                    <img
                      src={item?.imgSrc}
                      alt={item?.title}
                      className="img-fluid w-100"
                    />
                  </Link>
                  <a className={`categories ${item?.color}`} href="#">
                    {item?.category}
                  </a>
                  {/* <span>&#8358;{item?.price}</span> */}
                  <span>
                    {/* {new Intl.NumberFormat("ja-JP", {
                      style: "currency",
                      currency: "NGN",
                    }).format(item?.price)} */}
                    <Currency
                      currency={user?.currency}
                      price={Number(item?.price)}
                    />
                  </span>
                </div>

                {/* ===Discount=== */}
                <div className="discount">
                  <p>-10% discount</p>
                </div>
                {/* ============== */}

                <ul className="tf__single_course_header">
                  {/* <li>
                  <i className="fas fa-user"></i> {item?.instructor}
                </li> */}
                  {/* <li>
                    <i className="fas fa-folder-open"></i> {item?.lessons}
                  </li> */}
                </ul>
                <div className="tf__single_courses_text">
                  <Link className="title" href={`/bundles/${item?.slug}`}>
                    {item?.title}
                  </Link>
                  <p className="description">{item?.description}</p>
                  <Link
                    className="title text-primary small"
                    href={`/bundles/${item?.slug}`}
                  >
                    View bundle
                  </Link>
                  <ul>
                    {/* <li>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <span>(0{item?.rating})</span>
                  </li> */}
                    {/* <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-clock"></i>{item?.students}</li> */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BundleSection;
