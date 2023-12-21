import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import CourseDetailSection from "@/component/course/CourseDetailSection";
import { courseDataArray, courseDataContents } from "@/data/Data";
import ErrorSection from "@/component/error/ErrorSection";
export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Opubor Tony",
};
export default function CourseDetails({ params }) {
  const { slug } = params; // Destructure 'slug' from 'params'
  const courseDesc = courseDataArray.find((item) => item.slug === slug); // Use 'slug' here
  const courseContents = courseDataContents.filter((item) => item?.courseDataId === courseDesc?.id); // Use 'slug' here
 
  return (
    <Layout>
      <BreadcrumbSection header="Course Details" title="Course Details" />
      {courseDesc ? (
        <CourseDetailSection courseData={courseDesc} courseContents={courseContents} />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}
