import { options } from "@/app/api/auth/[...nextauth]/options";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import TermSection from "@/component/terms/TermSection";
import { getUser } from "../../service/userService";
import { getServerSession } from "next-auth";
export const metadata = {
  title: 'Moricol Privacy & Policy Page',
  description: 'Developed by Opubor Tony',
}
export default async function PrivacyPolicy() {
    const session = await getServerSession(options)
    const user = await getUser(session?.user?.id);

    return (
        <Layout user={user}>
            <BreadcrumbSection title='Privacy Policy' header='Privacy Policy'/>
            <TermSection/>
        </Layout>
    )
}