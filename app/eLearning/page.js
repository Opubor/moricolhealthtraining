import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllELearningSection from "@/component/eLearning/AllELearningSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Moricol Health Training',
  description: 'Developed by Azizur Rahman',
}
export default function Courses() {
    return (
        <Layout>
            <BreadcrumbSection header='E-Learning Courses' title='All E-Learning Courses'/>
            <AllELearningSection/>
        </Layout>
    )
}