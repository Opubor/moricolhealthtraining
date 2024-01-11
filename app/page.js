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
import WorkSection from "@/component/work/WorkSection";
import TopbarSection from "@/component/topbar/TopbarSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
import FaqSection from "@/component/faq/FaqSection";
import InductionSection from "@/component/induction/InductionSection";
import VideoModal from "@/component/modal/VideoModal";
import TeamSection3 from "@/component/team/TeamSection3";
import TeamSection2 from "@/component/team/TeamSection2";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { getUser } from "@/service/userService";

export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Opubor Tony",
};
export default async function Home3() {
  const session = await getServerSession(options)
  const user = await getUser(session?.user?.id)
  return (
    <div className="home_3">
      <TopbarSection style="tf__topbar tf__topbar_2" />
      <NavbarSection style="main_menu_3" user={user} />
      <BannerSection3 />
      <CategorySection3 />
      <AboutSection3 style="about_3" />
      <CourseSection2 />
      <ELearning user={user} />
      <InductionSection />
      <ContactSection />
      <BundleSection user={user} />
      <WorkSection />
      <CategorySection />
      <AboutSection />
      <TeamSection2 style="tf__team_3 pt_100 pb_100" />
      <TeamSection3 style="tf__team_3 pt_100 pb_100" />
      <TeamSection style="tf__team_3 pt_100 pb_100" />
      <FaqSection img="/images/education.png" />

      <VideoModal />

      <FooterSection2 style="tf__footer_3" />
      <ScrollToTopButton style="" />
    </div>
  );
}
