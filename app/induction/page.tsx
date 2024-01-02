import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import {
  courseDataArray,
  eLearningCourses,
  eLearningCoursesContents,
  inductionOrientation,
} from "@/data/Data";
import ErrorSection from "@/component/error/ErrorSection";
import ELearningDetailSection from "@/component/eLearning/ELearningDetailSection";
import InductionDetailSection from "@/component/induction/InductionDetailSection";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getUser } from "@/service/userService";
export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Opubor Tony",
};
export default async function CourseDetails() {
  const courseDesc = inductionOrientation.find((item) => item); // Use 'slug' here
  const session = await getServerSession(options);
  const user = await getUser(session?.user?.id as string);
  return (
    <Layout user={user}>
      <BreadcrumbSection
        header="Induction & Orientation Details"
        title="Induction & Orientation Details"
      />
      {courseDesc ? (
        <InductionDetailSection user={user} />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}
