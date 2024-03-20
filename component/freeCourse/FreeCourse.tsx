import React from "react";
import Link from "next/link";
import { inductionOrientation } from "@/data/Data";
import Currency from "../currency/Currency";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUser } from "@/service/userService";
import { CURRENCIES } from "@/lib/types";
import { toast } from "react-toastify";
import EnrolSession from "./EnrolSession";

async function FreeCourseSection() {
  const session = await getServerSession(options);
  const user = await getUser(session?.user?.id as string);
  const promptRegistration = async () => {
    return toast.error("Register/ Sign In", {
      position: "top-right",
    });
  };

  return (
    <section className="tf__courses_2 tf__courses_3 e_learning mt-4">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_20">
              <h5 className="mt-4">CHECKOUT OUR FREE COURSE</h5>
              <h2>~Infection Control Course~</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" wow fadeInUp">
            <div className="tf__single_courses">
              <div className="tf__single_courses_img">
                <img
                  src={"images/infectioncontrol.jpg"}
                  alt={"Infection Control Picture"}
                  className="img-fluid w-100"
                />
                <a className={`categories orange`} href="#">
                  E-Learning
                </a>

                <span># FREE</span>
              </div>

              <ul className="tf__single_course_header">
                <li>
                  <i className="fas fa-folder-open"></i> 5 Objectives
                </li>
              </ul>
              <div className="tf__single_courses_text">
                <p className="title">Infection Control</p>
                <p className="">
                  To provide information in order to practice safely and to
                  protect individuals being supported, colleagues and self from
                  infection.
                </p>

                <div className="tf__course_overview mb-4">
                  <h3>Objectives</h3>
                  <ul>
                    <li>
                      - Explain the causes of infection and the methods of
                      control.
                    </li>
                    <li>
                      - Identify the legislation and guidance associated with
                      infection preventionand control.
                    </li>
                    <li>- Describe employer and employee responsibilities.</li>
                    <li>
                      - Explain safe practice and the use of PPE and personal
                      hygiene.
                    </li>
                    <li>
                      - Understand the principles of decontamination and waste
                      management.
                    </li>
                  </ul>
                </div>

                <EnrolSession />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeCourseSection;
