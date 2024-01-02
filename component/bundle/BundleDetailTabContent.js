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
              <li>The certificate awarded to our candidates is internationally acclaimed and accredited.</li>
              <li>The variety of courses being offered through our bundles will promote your career advancement in the healthcare and social care sector.</li>
              <li>These Bundle courses will enhance your ability for overseas travel to work in the healthcare and social care sector.</li>
            </ul>
            <h3>Bundle Features:</h3>
           
            <ul>
              {courseContents.map((data, i) => (
                <li key={i} className={`${data?.style}`}>- {data?.content}</li>
              ))}
            </ul>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default BundleDetailTabContent;
