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

            <h3>Bundle Features:</h3>
            <ul>
              {courseContents.map((data) => (
                <li className={`${data?.style}`}>- {data?.content}</li>
              ))}
            </ul>
           
          </div>
        </Tab.Pane>
        
      </Tab.Content>
    </Tab.Container>
  );
};

export default BundleDetailTabContent;
