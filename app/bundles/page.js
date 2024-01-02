import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import AllBundlesSection from '@/component/bundle/AllBundlesSection'
import AllCourseSection from '@/component/course/AllCourseSection'
import Layout from '@/component/layout/Layout'
import { getServerSession } from 'next-auth'
import { options } from "@/app/api/auth/[...nextauth]/options";
import {getUser} from "../../service/userService"
import React from 'react'

async function Page() {
  const session = await getServerSession(options)
  const user = await getUser(session?.user?.id)

  return (
    <Layout user={user}>
      <BreadcrumbSection header='All Bundles' title='All Bundles'/>
      <AllBundlesSection user={user} />
    </Layout>
  )
}

export default Page