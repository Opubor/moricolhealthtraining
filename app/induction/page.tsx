import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import { courseDataArray, eLearningCourses, eLearningCoursesContents, inductionOrientation } from "@/data/Data";
import ErrorSection from "@/component/error/ErrorSection";
import ELearningDetailSection from "@/component/eLearning/ELearningDetailSection";
import InductionDetailSection from "@/component/induction/InductionDetailSection";
export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Opubor Tony",
};
export default function CourseDetails() {
  const courseDesc = inductionOrientation.find((item) => item) // Use 'slug' here

  return (
    <Layout>
      <BreadcrumbSection header="Induction & Orientation Details" title="Induction & Orientation Details" />
      {courseDesc ? (
        <InductionDetailSection />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}
