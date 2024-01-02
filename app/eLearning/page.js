import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllELearningSection from "@/component/eLearning/AllELearningSection";
import Layout from "@/component/layout/Layout";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUser } from "../../service/userService";

export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Opubor Tony",
};
export default async function Courses() {
  const session = await getServerSession(options);
  const user = await getUser(session?.user?.id);

  return (
    <Layout user={user}>
      <BreadcrumbSection
        header="E-Learning Courses"
        title="All E-Learning Courses"
      />
      <AllELearningSection user={user} />
    </Layout>
  );
}
