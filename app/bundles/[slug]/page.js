import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import { bundleContents, bundles } from "../../../data/Data";
import ErrorSection from "@/component/error/ErrorSection";
import BundleDetailSection from "../../../component/bundle/BundleDetailSection"
import {getUser} from "../../../service/userService"
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Opubor Tony",
};
export default async function CourseDetails({ params }) {
  const { slug } = params; // Destructure 'slug' from 'params'
  const courseDesc = bundles.find((item) => item.slug === slug); // Use 'slug' here
  const currentBundleContents = bundleContents.filter((item) => item?.bundleDataId === courseDesc?.id); // Use 'slug' here
  const session = await getServerSession(options)
  const user = await getUser(session?.user?.id)
  return (
    <Layout>
      <BreadcrumbSection header="BUNDLE COURSES" title="Bundle Courses" />
      {courseDesc ? (
        <BundleDetailSection courseData={courseDesc} courseContents={currentBundleContents} user={user} />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}
