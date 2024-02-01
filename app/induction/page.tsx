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
  description:
    "Explore comprehensive health training courses designed for health workers at our website. Earn valuable certificates through specialized programs tailored to enhance your skills and knowledge in various healthcare fields.Our company takes pride in being recognized as a CPD Certified Training Centre. Our platform offers a range of accredited courses, empowering healthcare practitioners to stay updated on the latest industry standards and best practices. Enroll now for quality education, advance your career, and contribute to improving patient care.",
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
