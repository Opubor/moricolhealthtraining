import AboutSection3 from "@/component/about/AboutSection3";
import AboutSection4 from "@/component/about/AboutSection4";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CourseSection from "@/component/course/CourseSection";
import FaqSection from "@/component/faq/FaqSection";
import Layout from "@/component/layout/Layout";
import PopularServiceSection2 from "@/component/service/PopularServiceSection2";
import TeamSection from "@/component/team/TeamSection";
import TeamSection2 from "@/component/team/TeamSection2";
import TeamSection3 from "@/component/team/TeamSection3";
import { getUser } from "../../service/userService";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Moricol Health Training",
  description:
    "Explore comprehensive health training courses designed for health workers at our website. Earn valuable certificates through specialized programs tailored to enhance your skills and knowledge in various healthcare fields.Our company takes pride in being recognized as a CPD Certified Training Centre. Our platform offers a range of accredited courses, empowering healthcare practitioners to stay updated on the latest industry standards and best practices. Enroll now for quality education, advance your career, and contribute to improving patient care.",
};
export default async function About() {
  const session = await getServerSession(options);
  const user = await getUser(session?.user?.id);

  return (
    <Layout user={user}>
      <BreadcrumbSection header="About us" title="About us" />
      <section className="tf__about_us_page mt_195 xs_mt_100">
        <AboutSection4 style="" />
        <AboutSection3 style="" />
        <TeamSection2 style="tf__team_3 pt_100 pb_100" />
        <TeamSection3 style="tf__team_3 pt_100 pb_100" />
        <TeamSection style="tf__team_3 pt_100 pb_100" />
        <PopularServiceSection2 />
        <CourseSection style="tf__popular_courses" />
        <FaqSection img="images/education.png" />{" "}
        {/* <ActivitySection2 style="tf__activities_slider_area pt_95 pb_100"/> */}
        {/* <BlogSection/> */}
      </section>
    </Layout>
  );
}
