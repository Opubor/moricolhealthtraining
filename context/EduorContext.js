"use client";
import { blogData, bundles, courseDataArray, eLearningCourses, eventData, teamData } from "@/data/Data";
import { createContext, useContext, useEffect, useState } from "react";

const EduorContext = createContext();

export const EduorProvider = ({ children }) => {
  // Sticky Header Section on Scroll
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Video Modal
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClose = () => setShowVideo(false);
  const handleVideoShow = () => setShowVideo(true);

  // Sidebar
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleMobileNavOpen = () => {
    setIsMobileNavOpen(true);
  };
  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };
  //   Blog Section
  const blogPerPage = 6;

  const [currentBlogPage, setCurrentBlogPage] = useState(1);

  const startBlogIndex = (currentBlogPage - 1) * blogPerPage;
  const endBlogIndex = startBlogIndex + blogPerPage;
  const currentBlogItems = blogData.slice(startBlogIndex, endBlogIndex);

  const totalBlogPages = Math.ceil(blogData.length / blogPerPage);

  const handleBlogPageChange = (newPage) => {
    setCurrentBlogPage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };

  //   Blog Section
  const coursePerPage = 6;

  const [currentCoursePage, setCurrentCoursePage] = useState(1);

  const startCourseIndex = (currentCoursePage - 1) * coursePerPage;
  const endCourseIndex = startCourseIndex + coursePerPage;
  const currentCourseItems = courseDataArray.slice(
    startCourseIndex,
    endCourseIndex
  );

  const totalCoursePages = Math.ceil(courseDataArray.length / coursePerPage);

  const handleCoursePageChange = (newPage) => {
    setCurrentCoursePage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };


  // E-Learning Courses
  const eLearningPerPage = 6;

  const [currentELearningPage, setCurrentELearningPage] = useState(1);

  const startELearningIndex = (currentELearningPage - 1) * eLearningPerPage;
  const endELearningIndex = startELearningIndex + eLearningPerPage;
  const currentELearningItems = eLearningCourses.slice(
    startELearningIndex,
    endELearningIndex
  );

  const totalELearningPages = Math.ceil(eLearningCourses.length / eLearningPerPage);

  const handleELearningPageChange = (newPage) => {
    setCurrentELearningPage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };

  // Bundle Courses
  const bundlesPerPage = 6;

  const [CurrentBundlePage, setCurrentBundlePage] = useState(1);

  const startBundleIndex = (CurrentBundlePage - 1) * bundlesPerPage;
  const endBundleIndex = startBundleIndex + bundlesPerPage;
  const currentBundleItems = bundles.slice(
    startBundleIndex,
    endBundleIndex
  );

  const totalBundlePages = Math.ceil(bundles.length / bundlesPerPage);

  const handleBundlePageChange = (newPage) => {
    setCurrentBundlePage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };

  //   Event Section
  const eventPerPage = 6;

  const [currentEventPage, setCurrentEventPage] = useState(1);

  const startEventIndex = (currentEventPage - 1) * eventPerPage;
  const endEventIndex = startEventIndex + eventPerPage;
  const currentEventItems = eventData.slice(startEventIndex, endEventIndex);

  const totalEventPages = Math.ceil(eventData.length / eventPerPage);

  const handleEventPageChange = (newPage) => {
    setCurrentEventPage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };

  //   Team Section
  const teamPerPage = 6;

  const [currentTeamPage, setCurrentTeamPage] = useState(1);

  const startTeamIndex = (currentTeamPage - 1) * teamPerPage;
  const endTeamIndex = startTeamIndex + teamPerPage;
  const currentTeamItems = teamData.slice(startTeamIndex, endTeamIndex);

  const totalTeamPages = Math.ceil(teamData.length / teamPerPage);

  const handleTeamPageChange = (newPage) => {
    setCurrentTeamPage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };

  // Email validation Regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <EduorContext.Provider
      value={{
        isHeaderFixed,
        showVideo,
        handleVideoClose,
        handleVideoShow,
        currentBlogItems,
        currentBlogPage,
        handleBlogPageChange,
        totalBlogPages,
        currentCourseItems,
        currentELearningItems,
        currentCoursePage,
        currentELearningPage,
        handleCoursePageChange,
        handleELearningPageChange,
        totalCoursePages,
        totalELearningPages,
        currentEventItems,
        currentEventPage,
        handleEventPageChange,
        totalEventPages,
        currentTeamItems,
        currentTeamPage,
        handleTeamPageChange,
        totalTeamPages,
        isValidEmail,
        isMobileNavOpen,
        handleMobileNavOpen,
        handleMobileNavClose,
        setIsMobileNavOpen,
        currentBundleItems,
        totalBundlePages,
        handleBundlePageChange,
        CurrentBundlePage
      }}
    >
      {children}
    </EduorContext.Provider>
  );
};

export const useEduorContext = () => {
  const context = useContext(EduorContext);
  if (!context) {
    throw new Error("useEduorContext must be used within an EduorProvider");
  }
  return context;
};
