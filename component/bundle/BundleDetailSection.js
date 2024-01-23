"use client";
import { courseDataArray, bundles, addOns } from "../../data/Data";
import Link from "next/link";
import React, { useState } from "react";
import BundleDetailTabContent from "./BundleDetailTabContent";
import { useSession } from "next-auth/react";
import RegPrompter from "../RegPrompter";
import Currency from "../currency/Currency";

const BundleDetailSection = ({ courseData, courseContents, user }) => {
  const { data: session } = useSession();
  const [error, setError] = useState(false);

  const promptRegistration = async () => {
    setError(true);
    return setTimeout(() => {
      setError(false);
    }, 9000);
  };
  return (
    <section className="tf__courses_details mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="tf__courses_details_area">
              <div className="tf__courses_details_img">
                <img
                  src={`/${courseData.imgSrc}`}
                  alt="courses"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__courses_details_header d-flex flex-wrap align-items-center">
                <div className="img">
                  <img
                    src={"/images/moricollogo.jpeg"}
                    alt="instuuctor"
                    className="img-fluid w-100"
                  />
                </div>

                <ul className="text d-flex flex-wrap align-items-center">
                  <li>
                    <h4>category</h4>
                    <p>{courseData.category}</p>
                  </li>

                  <li>
                    <h4>price</h4>
                    {/* <p>&#8358;{courseData.price}</p> */}
                    <p>
                      <Currency
                        currency={user?.currency}
                        price={Number(courseData?.price)}
                      />
                      {/* ===Discount=== */}
                      <div className="discount_detailtab">
                        <p>-10% discount</p>
                      </div>
                      {/* ============== */}

                      {/* {new Intl.NumberFormat("ja-JP", {
                        style: "currency",
                        currency: "NGN",
                      }).format(courseData?.price)} */}
                    </p>
                  </li>
                  <li>
                    {session?.user ? (
                      <Link
                        className="common_btn"
                        href={`/enrollment/${courseData?.id}?type=bundle`}
                      >
                        enrol
                      </Link>
                    ) : (
                      <div
                        onClick={() => promptRegistration()}
                        className="common_btn mx-2"
                        href={`/enrollment/${courseData?.id}?type=bundle`}
                      >
                        enrol
                      </div>
                    )}
                    {error && <RegPrompter />}
                  </li>
                </ul>
              </div>

              <div className="tf__courses_det_text">
                <h2>{courseData.title}</h2>

                <BundleDetailTabContent
                  courseData={courseData}
                  courseContents={courseContents}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="tf__sidebar" id="sticky_sidebar">
              <div className="tf__sidebar_blog sidebar_item">
                <h3>More Bundles</h3>
                <ul>
                  {bundles.slice(0, 5).map((item) => (
                    <li key={item.id}>
                      <div className="img">
                        <img
                          src={`/${item.imgSrc}`}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <Link href={`/bundles/${item.slug}`}>{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row w-100">
            <h4 className="text-center text-decoration-underline text-success fw-bold mt-4">
              Add Ons
            </h4>
            {/* {session ? ( */}
            <>
              {addOns.map((data) => (
                <>
                  {data?.name === "International Work Visa" ? (
                    <div className="col-xl-3" key={data.id}>
                      <div className={`tf__activities_item `}>
                        <div className="span__icon">
                          <span className="ll">
                            <i className={"fa fa-book"}></i>{" "}
                          </span>
                        </div>
                        <h6 className="fw-bold mt-2">{data?.name}</h6>
                        <h5 className="fw-bold mt-2">
                          {data?.price && (
                            <p>
                              {/* {new Intl.NumberFormat("ja-JP", {
                              style: "currency",
                              currency: "NGN",
                            }).format(data?.price)} */}
                              <Currency
                                currency={user?.currency}
                                price={Number(data?.price)}
                              />
                            </p>
                          )}
                        </h5>
                        <div className="text-warning mt-2">
                          {data?.mail && <p>{data?.mail}</p>}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={`/enrollment/${data?.id}?type=addOns`}
                      className="col-xl-3"
                      key={data.id}
                    >
                      <div className={`tf__activities_item `}>
                        <span>
                          <i className={"fa fa-book"}></i>{" "}
                        </span>
                        <h6 className="fw-bold mt-2">{data?.name}</h6>
                        <h6 className="fw-bold mt-2">
                          {data?.name === "Hotel Accomodation" && "(Nigeria)"}
                        </h6>
                        <h5 className="fw-bold mt-2">
                          {data?.price && (
                            <p>
                              <Currency
                                currency={user?.currency}
                                price={Number(data?.price)}
                              />{" "}
                              {/* {new Intl.NumberFormat("ja-JP", {
                              style: "currency",
                              currency: "NGN",
                            }).format(data?.price)}{" "} */}
                              {data?.extra}
                            </p>
                          )}
                        </h5>
                        <div className=" mt-2">
                          {data?.mail && <p>{data?.mail}</p>}
                        </div>
                      </div>
                    </Link>
                  )}
                </>
              ))}
            </>
            {/* ) : (
              <>
                {addOns.map((data) => (
                  <>
                    {data?.name === "International Work Visa" ? (
                      <div className="col-xl-3" key={data.id}>
                        <div className={`tf__activities_item `}>
                          <div className="span__icon">
                            <span className="ll">
                              <i className={"fa fa-book"}></i>{" "}
                            </span>
                          </div>
                          <h6 className="fw-bold mt-2">{data?.name}</h6>
                          <h5 className="fw-bold mt-2">
                            {data?.price && (
                              <p>
                             
                                <Currency
                                  currency={user?.currency}
                                  price={Number(data?.price)}
                                />
                              </p>
                            )}
                          </h5>
                          <div className="text-warning mt-2">
                            {data?.mail && <p>{data?.mail}</p>}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        href={`/enrollment/${data?.id}?type=addOns`}
                        className="col-xl-3"
                        key={data.id}
                      >
                        <div className={`tf__activities_item `}>
                          <span>
                            <i className={"fa fa-book"}></i>{" "}
                          </span>
                          <h6 className="fw-bold mt-2">{data?.name}</h6>
                          <h6 className="fw-bold mt-2">
                            {data?.name === "Hotel Accomodation" && "(Nigeria)"}
                          </h6>
                          <h5 className="fw-bold mt-2">
                            {data?.price && (
                              <p>
                                <Currency
                                  currency={user?.currency}
                                  price={Number(data?.price)}
                                />{" "}
                               
                                {data?.extra}
                              </p>
                            )}
                          </h5>
                          <div className=" mt-2">
                            {data?.mail && <p>{data?.mail}</p>}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </>
            )} */}
            {courseData?.title === "Bundle 4" && (
              <Link href={`/eLearning`} className="col-xl-3">
                <div className={`tf__activities_item`}>
                  <span>
                    <i className={"fa fa-book"}></i>{" "}
                  </span>
                  <h6 className="fw-bold mt-2">E-Learning Courses</h6>
                  <h5 className="fw-bold mt-2">
                    <p>&#8358;20,000 per Course</p>
                  </h5>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleDetailSection;
