import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import TermSection from "@/component/terms/TermSection";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUser } from "../../service/userService";

export const metadata = {
  title: 'Moricol Terms & Condition Page',
  description: 'Developed by Opubor Tony',
}
export default async function TermsCondition() {
    const session = await getServerSession(options)

    const user = await getUser(session?.user?.id);

    return (
        <Layout user={user}>
            <BreadcrumbSection title='Terms And Conditions' header='Terms And Conditions'/>
            <TermSection/>
        </Layout>
    )
}