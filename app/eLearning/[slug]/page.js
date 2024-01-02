import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import { courseDataArray, eLearningCourses, eLearningCoursesContents } from "@/data/Data";
import ErrorSection from "@/component/error/ErrorSection";
import ELearningDetailSection from "@/component/eLearning/ELearningDetailSection";
import {getUser} from "../../../service/userService"
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Opubor Tony",
};
export default async function CourseDetails({ params }) {
  const { slug } = params; // Destructure 'slug' from 'params'
  const courseDesc = eLearningCourses.find((item) => item.slug === slug); // Use 'slug' here
  const eLearningContents = eLearningCoursesContents.filter((item) => item?.eLearningDataId === courseDesc?.id); // Use 'slug' here
  const session = await getServerSession(options)
  const user = await getUser(session?.user?.id)
  return (
    <Layout>
      <BreadcrumbSection header="E-Learning Course Details" title="E-Learning Details" />
      {courseDesc ? (
        <ELearningDetailSection courseData={courseDesc} courseContents={eLearningContents} user={user}  />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}
