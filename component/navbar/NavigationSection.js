"use client";
import React from "react";
import { useEduorContext } from "@/context/EduorContext";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";

const NavigationSection = ({ position, btnPosition, navRef }) => {
  const { isMobileNavOpen } = useEduorContext();
  return (
    <div
      ref={navRef}
      className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
      id="navbarNav"
    >
      <ul className={`navbar-nav ${position}`}>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home 
          </a>
         
        </li>
        <li className="nav-item">
          <Navlink href="/about">about</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/courses">In-Class</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/eLearning">E-Learning</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/bundles">Bundles</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/induction">Induction</Navlink>
        </li>
        {btnPosition ? null : (
          <li className="nav-item">
            <a className="nav-link common_btn bg-danger" href="/myCourses">
              My Courses
            </a>
          </li>
        )}
      </ul>
      {btnPosition ? (
        <a className="common_btn_2 ms-auto" href="/myCourses">
          My Courses
        </a>
      ) : null}
    </div>
  );
};

export default NavigationSection;
