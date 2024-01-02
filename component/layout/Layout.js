"use client";
import React from "react";
import NavbarSection from "../navbar/NavbarSection";
import FooterSection from "../footer/FooterSection";
import ScrollToTopButton from "../utils/ScrollToTopButton";
import FooterSection2 from "../footer/FooterSection2";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarSection style="" logo="/images/moricollogo.jpeg" />
      {children}
      <ScrollToTopButton style="" />
      <FooterSection2 style="tf__footer_3 mt-4" logo="images/moricollogo.jpeg" />
    </>
  );
};

export default Layout;
