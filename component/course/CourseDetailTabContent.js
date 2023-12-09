"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const CourseDetailTabContent = ({ courseData, courseContents }) => {
  const [activeKey, setActiveKey] = useState("overview");

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  const { data: session } = useSession();

  const promptRegistration = async () => {
    return toast.error("Register/Login to Enrol", {
      position: "top-right",
    });
  };

  return (
    <Tab.Container activeKey={activeKey} onSelect={handleSelect}>
      <div>
        <Nav
          variant="pills"
          className="nav nav-pills"
          id="pills-tab"
          role="tablist"
        >
          <Nav.Item>
            <Nav.Link eventKey="overview">Overview</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Tab.Content id="pills-tabContent">
        <Tab.Pane eventKey="overview">
          <div className="tf__course_overview">
            <p>{courseData?.description}</p>
            <p>{courseData?.description2}</p>

            <h3>Course Features:</h3>
            <div className="row">
              {courseContents.map((data) => (
                <>
                  {data?.tag === "Available" && (
                    <div
                      className="col-xl-4 col-md-6 wow fadeInUp"
                      key={data.id}
                    >
                      <div className="tf__single_courses_inclass">
                        <div className="tf__single_courses_img">
                          <div className="title">
                            <img
                              src={data.imgSrc}
                              alt="courses"
                              className="img-fluid w-100"
                            />
                          </div>
                          <a className={`categories ${data.color}`} href="#">
                            {data.category}
                          </a>
                          <span>&#8358;{data.price}</span>
                        </div>

                        <div className="tf__single_courses_text">
                          <Link
                            className="title"
                            href={`/courses/${data.slug}`}
                          >
                            {data.title}
                          </Link>
                          <p className="description d-flex gap-2 align-items-center ">
                            <i className="fas fa-folder-open"></i>
                            {data?.content}
                          </p>
                          <p className="text-decoration-underline fw-bold">
                            Description
                          </p>
                          <p>{data?.description}</p>
                          <div className="d-flex align-items-center w-100 mt-4 ">
                            {session?.user ? (
                              <Link
                                className="common_btn w-100 text-center"
                                href={`/enrollment/${data?.id}?type=inclass`}
                              >
                                enrol
                              </Link>
                            ) : (
                              <div
                                onClick={() => promptRegistration()}
                                className="common_btn mx-2"
                                href={`/enrollment/${courseData?.id}?type=inclass`}
                              >
                                enrol
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>

            <h1 className="fw-bold text-decoration-underline mt_100 text-success text-center">
              COMING SOON
            </h1>
            <div className="row">
              {courseContents.map((data) => (
                <>
                  {data?.tag !== "Available" && (
                    <div
                      className="col-xl-4 col-md-6 wow fadeInUp"
                      key={data.id}
                    >
                      <div className="tf__single_courses">
                        <div className="tf__single_courses_img">
                          <Link
                            className="title"
                            href={`/courses/${data.slug}`}
                          >
                            <img
                              src={data.imgSrc}
                              alt="courses"
                              className="img-fluid w-100"
                            />
                          </Link>
                          <a className={`categories ${data.color}`} href="#">
                            {data.category}
                          </a>
                          <span>&#8358;{data.price}</span>
                        </div>

                        <div className="tf__single_courses_text">
                          <Link
                            className="title"
                            href={`/courses/${data.slug}`}
                          >
                            {data.title}
                          </Link>
                          <p className="description d-flex gap-2 align-items-center ">
                            <i className="fas fa-folder-open"></i>
                            {data?.content}
                          </p>
                          <p>{data?.description}</p>
                          <ul></ul>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>

            {/* <ul>
              {courseContents.map((data) => (
                <li>
                  {data?.content} - <span className="text-success fw-bold">&#8358;{data?.price}</span>
                 
                </li>
              ))}
            </ul> */}
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default CourseDetailTabContent;
