import RegisterSection from "@/component/authentication/RegisterSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Moricol Health Training',
  description: 'Developed by Azizur Rahman',
}
export default function SignUp() {
    return (
        <Layout>
            <BreadcrumbSection header='Sign Up' title='Sign Up'/>
            <RegisterSection/>
        </Layout>
    )
}