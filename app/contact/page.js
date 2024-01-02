import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactPageSection from "@/component/contact/ContactPageSection";
import Layout from "@/component/layout/Layout";
import { getUser } from "../../service/userService";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const metadata = {
  title: 'Moricol Contact Page',
  description: 'Developed by Opubor Tony',
}
export default async function Contact() {
    const session = await getServerSession(options)
    const user = await getUser(session?.user?.id);

    return (
        <Layout user={user}>
            <BreadcrumbSection header='Contact Us' title="Contact us"/>
            <ContactPageSection/>
        </Layout>
    )
}