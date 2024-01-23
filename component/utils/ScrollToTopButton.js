"use client";
import React, { useEffect, useState } from "react";

const ScrollToTopButton = ({ style }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Get the current scroll position
    const scrolling = window.scrollY;

    // Show the button when scrolling down beyond a certain point (e.g., 300 pixels)
    if (scrolling > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="d-flex">
      {isVisible && (
        <div
          className={`tf__scroll_btn ${style} d-flex align-items-center gap-2 mr-4`}
          role="button"
        >
          <div className="whatsapp_icon text-white">
            <a
              href={`https://wa.me/09124460695`}
              className="text-white"
              target="_blank"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div onClick={scrollToTop} className="scrolltop_icon">
            <i className="fa fa-arrow-up" aria-hidden="true"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
