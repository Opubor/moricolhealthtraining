import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllFaqSection from "@/component/faq/AllFaqSection";
import Layout from "@/component/layout/Layout";
import { getUser } from "../../service/userService";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata = {
  title: 'Moricol FAQ Page',
  description: 'Developed by Opubor Tony',
}
export default async function Faq() {
    const session = await getServerSession(options)
    const user = await getUser(session?.user?.id);

    return (
        <Layout user={user}>
            <BreadcrumbSection title='FAQ' header="FAQ"/>
            <AllFaqSection/>
        </Layout>
    )
}