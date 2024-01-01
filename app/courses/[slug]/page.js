import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import CourseDetailSection from "@/component/course/CourseDetailSection";
import { courseDataArray, courseDataContents } from "@/data/Data";
import ErrorSection from "@/component/error/ErrorSection";
import prisma from "@/lib/prisma-client";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Opubor Tony",
};
const getUser = async (id) => {
 return await prisma.user.findFirst({
    where: {id: id}
  })
}
export default async function CourseDetails({ params }) {
  const { slug } = params; // Destructure 'slug' from 'params'
  const courseDesc = courseDataArray.find((item) => item.slug === slug); // Use 'slug' here
  const courseContents = courseDataContents.filter((item) => item?.courseDataId === courseDesc?.id); // Use 'slug' here
  const session = await getServerSession(options)
 const user = await getUser(session?.user?.id)
 console.log(user)
  return (
    <Layout>
      <BreadcrumbSection header="Course Details" title="Course Details" />
      {courseDesc ? (
        <CourseDetailSection courseData={courseDesc} courseContents={courseContents} user={user} />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}
