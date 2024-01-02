import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllCourseSection from "@/component/course/AllCourseSection";
import Layout from "@/component/layout/Layout";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getUser } from "@/service/userService";

export const metadata = {
  title: 'Moricol Health Training',
  description: 'Developed by Opubor Tony',
}
export default async function Courses() {
    const session = await getServerSession(options)
    const user = await getUser(session?.user?.id);

    return (
        <Layout user={user}>
            <BreadcrumbSection header='In Class Courses' title='In Class Courses'/>
            <AllCourseSection/>
        </Layout>
    )
}