import AboutSection3 from "@/component/about/AboutSection3";
import AboutSection from "@/component/about/AboutSection";
import BannerSection3 from "@/component/banner/BannerSection3";
import BundleSection from "@/component/bundle/BundleSection";
import CategorySection3 from "@/component/category/CategorySection3";
import CategorySection from "@/component/category/CategorySection";
import ContactSection from "@/component/contact/ContactSection";
import CourseSection2 from "@/component/course/CourseSection2";
import ELearning from "@/component/eLearning/ELearning";
import FooterSection2 from "@/component/footer/FooterSection2";
import NavbarSection from "@/component/navbar/NavbarSection";
import TeamSection from "@/component/team/TeamSection";
import TopbarSection from "@/component/topbar/TopbarSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
import FaqSection from "@/component/faq/FaqSection";

export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Azizur Rahman",
};
export default function Home3() {
  return (
    <div className="home_3">
      <TopbarSection style="tf__topbar tf__topbar_2" />
      <NavbarSection style="main_menu_3"/>
      <BannerSection3 />
      <CategorySection3 /> 
      <AboutSection3 style="about_3" />
      <CourseSection2 />
      <ELearning />
      <ContactSection />
      <BundleSection />
      <CategorySection />
      <AboutSection />
      {/* <CounterSection /> */}
      <TeamSection style="tf__team_3 pt_100 pb_100" />
      <FaqSection img="images/education.png"/>
      {/* <ContactSection2 /> */}
      {/* <ActivitySection2 style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100" /> */}
      {/* <BlogSection2 /> */}
      <FooterSection2 style="tf__footer_3" logo="images/moricollogo.jpeg" />
      {/* <VideoModal /> */}
      <ScrollToTopButton style="style-3" />
    </div>
  );
}
