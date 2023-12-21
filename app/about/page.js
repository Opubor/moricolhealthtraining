import AboutSection3 from "@/component/about/AboutSection3";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CourseSection from "@/component/course/CourseSection";
import FaqSection from "@/component/faq/FaqSection";
import Layout from "@/component/layout/Layout";
import PopularServiceSection2 from "@/component/service/PopularServiceSection2";
export const metadata = {
  title: 'Moricol Health Training',
  description: 'Developed by Opubor Tony',
}
export default function About() {
    return (
        <Layout>
            <BreadcrumbSection header="About us" title="About us"/>
            <section className="tf__about_us_page mt_195 xs_mt_100">
                <AboutSection3 style=''/>
                <PopularServiceSection2/>
                <CourseSection style="tf__popular_courses"/>
                <FaqSection img="images/education.png"/>
                {/* <ActivitySection2 style="tf__activities_slider_area pt_95 pb_100"/> */}
                {/* <BlogSection/> */}
            </section>
        </Layout>
    )
}