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
import InductionSection from "@/component/induction/InductionSection";
import VideoModal from "@/component/modal/VideoModal";

export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Azizur Rahman",
};
export default function Home3() {
  return (
    <div className="home_3">
      <TopbarSection style="tf__topbar tf__topbar_2" />
      <NavbarSection style="main_menu_3" />
      <BannerSection3 />
      <CategorySection3 />
      <AboutSection3 style="about_3" />
      <CourseSection2 />
      <ELearning />
      <InductionSection />
      <ContactSection />
      <BundleSection />
      <CategorySection />
      <AboutSection />
      <TeamSection style="tf__team_3 pt_100 pb_100" />
      <FaqSection img="/images/education.png" />

      {/* <VideoModal /> */}

      <FooterSection2 style="tf__footer_3" />
      <ScrollToTopButton style="style-3" />
    </div>
  );
}
