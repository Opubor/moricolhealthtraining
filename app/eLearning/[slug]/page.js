import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import { courseDataArray, eLearningCourses, eLearningCoursesContents } from "@/data/Data";
import ErrorSection from "@/component/error/ErrorSection";
import ELearningDetailSection from "@/component/eLearning/ELearningDetailSection";
export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Opubor Tony",
};
export default function CourseDetails({ params }) {
  const { slug } = params; // Destructure 'slug' from 'params'
  const courseDesc = eLearningCourses.find((item) => item.slug === slug); // Use 'slug' here
  const eLearningContents = eLearningCoursesContents.filter((item) => item?.eLearningDataId === courseDesc?.id); // Use 'slug' here

  return (
    <Layout>
      <BreadcrumbSection header="E-Learning Course Details" title="E-Learning Details" />
      {courseDesc ? (
        <ELearningDetailSection courseData={courseDesc} courseContents={eLearningContents} />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}
