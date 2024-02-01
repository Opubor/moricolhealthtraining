import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import TermSection from "@/component/terms/TermSection";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUser } from "../../service/userService";

export const metadata = {
  title: "Moricol Terms & Condition Page",
  description:
    "Explore comprehensive health training courses designed for health workers at our website. Earn valuable certificates through specialized programs tailored to enhance your skills and knowledge in various healthcare fields.Our company takes pride in being recognized as a CPD Certified Training Centre. Our platform offers a range of accredited courses, empowering healthcare practitioners to stay updated on the latest industry standards and best practices. Enroll now for quality education, advance your career, and contribute to improving patient care.",
};
export default async function TermsCondition() {
  const session = await getServerSession(options);

  const user = await getUser(session?.user?.id);

  return (
    <Layout user={user}>
      <BreadcrumbSection
        title="Terms And Conditions"
        header="Terms And Conditions"
      />
      <TermSection />
    </Layout>
  );
}
