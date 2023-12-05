import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

const InductionDetailTabSection = () => {
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
            <p>
              This course is a robust compilation of introducing candidates to
              healthcare and other fields of employment overseas. It will
              enlighten participates on the strategies of self-awareness,
              prepare individuals on what to expect, how to cope and address
              various factors that would affect the transition from one country
              to another. The course will detailed the sociocultural,
              demographic location and integration of various context associated
              with jobs, community and business. The impact of lack of induction
              and orientation.
            </p>

            <h3>Objectives</h3>
            <ul>
              <li>
                - To understand what is required of each candidate travelling
                overseas for work and study.
              </li>
              <li>
                - To be self-aware of the factors affecting relocation and
                integration into a foreign country.
              </li>
              <li>
                - To be equipped with information that will enable all
                participants to understand foreign policies about overseas
                communities.
              </li>
            </ul>
            <h3>Contents</h3>
            <ul>
              <li>- Cultural</li>
              <li>- Vision</li>
              <li>- Leadership</li>
              <li>- Mission</li>
              <li>- Processes and procedures</li>
              <li>- Behaviours</li>
              <li>- Attitude</li>
              <li>- Feelings</li>
              <li>- Self-awareness</li>
              <li>- Confidence</li>
              <li>- Educational background</li>
              <li>- Workplace</li>
              <li>- Team player</li>
              <li>- Religion</li>
              <li>- Settlement</li>
              <li>- Language</li>
              <li>- Food and Drinks</li>
              <li>- Currency</li>
              <li>- Accommodation and Housing</li>
              <li>- Relevant organisations for support</li>
              <li>- Guidance </li>
              <li>- Values</li>
              <li>- Ethics</li>
              <li>- Diversity</li>
              <li>- Relating with children</li>
              <li>- Job search</li>
              <li>- Driving</li>
              <li>- Cultural</li>
              <li>- Different countries and their requirements</li>
              <li>
                - Healthcare (Assistants, Nurses, Doctors, Pharmacists and
                others)
              </li>
              <li>- Teaching</li>
              <li>- Information Technology</li>
              <li>- Agriculture</li>
              <li>- Tourism and Hospitality</li>
              <li>- Legal</li>
            </ul>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default InductionDetailTabSection;
