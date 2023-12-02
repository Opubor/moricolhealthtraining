import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import { bundleContents, bundles } from "../../../data/Data";
import ErrorSection from "@/component/error/ErrorSection";
import BundleDetailSection from "../../../component/bundle/BundleDetailSection"
export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Azizur Rahman",
};
export default function CourseDetails({ params }) {
  const { slug } = params; // Destructure 'slug' from 'params'
  const courseDesc = bundles.find((item) => item.slug === slug); // Use 'slug' here
  const currentBundleContents = bundleContents.filter((item) => item?.bundleDataId === courseDesc?.id); // Use 'slug' here

  return (
    <Layout>
      <BreadcrumbSection header="BUNDLE COURSES" title="Bundle Courses" />
      {courseDesc ? (
        <BundleDetailSection courseData={courseDesc} courseContents={currentBundleContents} />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}
