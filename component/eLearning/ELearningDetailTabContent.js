import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

const ELearningDetailTabContent = ({ courseData, courseContents }) => {
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

            <h3>Course Features:</h3>
            {courseContents.map((data) => (
              <>
                {data?.eLearningDataId !== 3333333 ? (
                  <ul>
                    <li>- {data?.content} </li>
                  </ul>
                ) : (
                  <div className="d-md-flex align-items-center justify-items-center gap-4">
                    <div>
                      <h6 className="text-decoration-underline mt-2 fw-bold">
                        Online Packages
                      </h6>
                      <ul>
                        <li>- Principles of Moving & Assisting</li>
                        <li>- Safe Handling of Medication</li>
                        <li>- Dementia Awareness</li>
                        <li>- Infection Control</li>
                        <li>- Food Safety Principles</li>
                        <li>- Safeguarding Adults</li>
                        <li>- Dysphagia Awareness</li>
                        <li>- Epilepsy & Emergency Medication</li>
                        <li>- Equality, Diversity & Inclusion</li>
                        <li>
                          - COVID-19 Infection, Prevention, Identification &
                          Control
                        </li>
                        <li>- General Data Protection Regulation (GDPR)</li>
                        <li>- Handling Hazardous Substances (COSHH)</li>
                        <li>- First Aid Principles</li>
                        <li>- Role of a Fire Marshal</li>
                        <li>- Health & Safety Essentials</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-decoration-underline mt-2 fw-bold">
                        Care Certficate Package
                      </h6>
                      <ul>
                        <li>- Understand your role</li>
                        <li>- Your personal development </li>
                        <li>- Duty of care</li>
                        <li>- Equality and diversity</li>
                        <li>- Work in a person centred way</li>
                        <li>- Communication</li>
                        <li>- Privacy and dignity</li>
                        <li>- Fluids and nutrition</li>
                        <li>
                          - Awareness of mental health, dementia and learning
                          disability
                        </li>
                        <li>- Safeguarding adults</li>
                        <li>- Safeguarding children</li>
                        <li>- Basic life support</li>
                        <li>- Health and safety</li>
                        <li>- Handling information</li>
                        <li>- Infection prevention and contro</li>
                      </ul>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default ELearningDetailTabContent;
