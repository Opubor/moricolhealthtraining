import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllCourseSection from "@/component/course/AllCourseSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Moricol Health Training',
  description: 'Developed by Opubor Tony',
}
export default function Courses() {
    return (
        <Layout>
            <BreadcrumbSection header='In Class Courses' title='In Class Courses'/>
            <AllCourseSection/>
        </Layout>
    )
}