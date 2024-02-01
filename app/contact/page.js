import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactPageSection from "@/component/contact/ContactPageSection";
import Layout from "@/component/layout/Layout";
import { getUser } from "../../service/userService";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Moricol Contact Page",
  description:
    "Explore comprehensive health training courses designed for health workers at our website. Earn valuable certificates through specialized programs tailored to enhance your skills and knowledge in various healthcare fields.Our company takes pride in being recognized as a CPD Certified Training Centre. Our platform offers a range of accredited courses, empowering healthcare practitioners to stay updated on the latest industry standards and best practices. Enroll now for quality education, advance your career, and contribute to improving patient care.",
};
export default async function Contact() {
  const session = await getServerSession(options);
  const user = await getUser(session?.user?.id);

  return (
    <Layout user={user}>
      <BreadcrumbSection header="Contact Us" title="Contact us" />
      <ContactPageSection />
    </Layout>
  );
}
