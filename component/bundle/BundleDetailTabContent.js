import { addOns } from "@/data/Data";
import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

const BundleDetailTabContent = ({ courseData, courseContents }) => {
  const [activeKey, setActiveKey] = useState("overview");

  const handleSelect = (key) => {
    setActiveKey(key);
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
            <p>
              Registering and taking our bundles gives our clients a wide
              variety of different course electives that will be beneficial in
              several ways such as :
            </p>
            <ul className="uu">
              <li>
                The certificate awarded to our candidates is internationally
                acclaimed and accredited.
              </li>
              <li>
                The variety of courses being offered through our bundles will
                promote your career advancement in the healthcare and social
                care sector.
              </li>
              <li>
                These Bundle courses will enhance your ability for overseas
                travel to work in the healthcare and social care sector.
              </li>
            </ul>

            {/* <h3>Time-Table</h3>
            <ul>
              <li>{courseData?.duration1}</li>
              <li>{courseData?.duration2}</li>
            </ul> */}

            <h3>Bundle Features:</h3>
            <ul>
              {courseContents.map((data, i) => (
                <li key={i} className={`${data?.style}`}>
                  - {data?.content}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mt-4 mb-2">
              <span className="text-decoration-underline text-black fw-bold">
                INDUCTION & ORIENTATION
              </span>{" "}
              in healthcare are essential processes aimed at integrating new
              employees into their roles within a healthcare organization. These
              processes are designed to ensure that new hires have the necessary
              knowledge, skills, and resources to effectively contribute to the
              organization's mission of providing quality patient care. Here's a
              breakdown of induction and orientation in the context of
              healthcare:
            </p>

            <h6 className="fw-bold mt-2 mb-2 text-decoration-underline">
              Induction
            </h6>
            <p className="mt-2">
              <span className="text-black text-decoration-underline">
                Introduction to the Organization:
              </span>
              New employees are introduced to the healthcare organization, its
              mission, vision, values, and organizational structure.
            </p>
            <p className="mt-2">
              <span className="text-black text-decoration-underline">
                Policies and Procedures:{" "}
              </span>
              They are familiarized with the organization's policies,
              procedures, and protocols, including those related to patient
              care, safety, confidentiality, and compliance with regulatory
              requirements.
            </p>
            <p className="mt-2">
              <span className="text-black text-decoration-underline">
                Facility Tour:{" "}
              </span>
              They are given a tour of the healthcare facility, including key
              areas such as patient care units, administrative offices, and
              support services.
            </p>
            <p className="mt-2">
              <span className="text-black text-decoration-underline">
                Introduction to Colleagues:{" "}
              </span>
              New employees are introduced to key staff members, including
              supervisors, colleagues, and support staff, fostering a sense of
              community and collaboration.
            </p>
            <p className="mt-2">
              <span className="text-black text-decoration-underline">
                Job-Specific Training:{" "}
              </span>
              They receive job-specific training related to their roles,
              responsibilities, and tasks. This may include training on medical
              equipment, electronic health record systems, and specialized
              procedures.
            </p>

            <h6 className="fw-bold mt-2 mb-2 text-decoration-underline">
              Orientation
            </h6>
            <p className="mt-2">
              <span className="text-black text-decoration-underline">
                Ongoing Training and Development:{" "}
              </span>
              Orientation extends beyond the initial induction phase and
              involves ongoing training and development opportunities to enhance
              the new employee's skills and knowledge.
            </p>
            <p className="mt-2">
              <span className="text-black text-decoration-underline">
                Mentorship and Support:{" "}
              </span>
              New employees may be paired with mentors or assigned a support
              system to provide guidance, answer questions, and facilitate their
              integration into the organization.
            </p>
            <p className="mt-2">
              <span className="text-black text-decoration-underline">
                Professional Development:{" "}
              </span>
              They are provided with information about opportunities for
              professional development, continuing education, and career
              advancement within the healthcare organization.
            </p>
            <p className="mt-2">
              <span className="text-black text-decoration-underline">
                Performance Expectations:{" "}
              </span>
              Clear performance expectations and goals are communicated to new
              employees, along with feedback mechanisms to support their
              professional growth and success.
            </p>
            <p className="mt-2">
              <span className="text-black text-decoration-underline">
                Integration into the Healthcare Team:{" "}
              </span>
              New employees are encouraged to actively participate in team-based
              activities, meetings, and projects to foster collaboration and
              communication within the healthcare team.
            </p>
            <p className="mt-2">
              Overall, induction and orientation play crucial roles in ensuring
              that new employees in healthcare settings feel welcome, supported,
              and equipped to deliver high-quality care to patients while
              contributing positively to the organization's goals and
              objectives.
            </p>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default BundleDetailTabContent;
