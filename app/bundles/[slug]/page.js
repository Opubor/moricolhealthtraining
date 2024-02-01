import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import { bundleContents, bundles } from "../../../data/Data";
import ErrorSection from "@/component/error/ErrorSection";
import BundleDetailSection from "../../../component/bundle/BundleDetailSection";
import { getUser } from "../../../service/userService";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata = {
  title: "Moricol Health Training",
  description:
    "Explore comprehensive health training courses designed for health workers at our website. Earn valuable certificates through specialized programs tailored to enhance your skills and knowledge in various healthcare fields.Our company takes pride in being recognized as a CPD Certified Training Centre. Our platform offers a range of accredited courses, empowering healthcare practitioners to stay updated on the latest industry standards and best practices. Enroll now for quality education, advance your career, and contribute to improving patient care.",
};
export default async function CourseDetails({ params }) {
  const { slug } = params; // Destructure 'slug' from 'params'
  const courseDesc = bundles.find((item) => item.slug === slug); // Use 'slug' here
  const currentBundleContents = bundleContents.filter(
    (item) => item?.bundleDataId === courseDesc?.id
  ); // Use 'slug' here
  const session = await getServerSession(options);
  const user = await getUser(session?.user?.id);
  return (
    <Layout user={user}>
      <BreadcrumbSection header="BUNDLE COURSES" title="Bundle Courses" />
      {courseDesc ? (
        <BundleDetailSection
          courseData={courseDesc}
          courseContents={currentBundleContents}
          user={user}
        />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}
