import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import AllTeamMemberSection from "@/component/team/AllTeamMemberSection";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getUser } from "../../service/userService";

export const metadata = {
  title: 'Moricol Team Page',
  description: 'Developed by Opubor Tony',
}
export default async function Team() {
    const session = await getServerSession(options)
    const user = await getUser(session?.user?.id);

    return (
        <Layout user={user}>
            <BreadcrumbSection header='Team' title='Team'/>
            <AllTeamMemberSection/>
        </Layout>
    )
}