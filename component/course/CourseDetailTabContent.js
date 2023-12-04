import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

const CourseDetailTabContent = ({ courseData, courseContents }) => {
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
            <h3>Description</h3>
            <p>{courseData?.description}</p>
            <p>{courseData?.description2}</p>

            <h3>Course Features:</h3>
            <ul>
              {courseContents.map((data) => (
                <li>
                  {data?.content} - <span className="text-success fw-bold">&#8358;{data?.price}</span>
                  {/* <span className="text-warning">
                    <i className="fa-solid fa-clock"></i>
                  </span>{" "}
                  {data?.time} */}
                </li>
              ))}
            </ul>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default CourseDetailTabContent;
