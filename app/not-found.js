import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import Layout from "@/component/layout/Layout";
import { getUser } from "../service/userService";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata = {
  title: 'Moricol 404 Page',
  description: 'Developed by Opubor Tony',
}
export default async function NotFound() {
  const session = await getServerSession(options)
  const user = await getUser(session?.user?.id);

  return (
        <Layout user={user}>
            <BreadcrumbSection header='404 Page' title='404'/>
            <ErrorSection type='Page'/>
        </Layout>
  )
}