import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import AllBundlesSection from '@/component/bundle/AllBundlesSection'
import AllCourseSection from '@/component/course/AllCourseSection'
import Layout from '@/component/layout/Layout'
import React from 'react'

function Page() {
  return (
    <Layout>
      <BreadcrumbSection header='All Bundles' title='All Bundles'/>
      <AllBundlesSection/>
    </Layout>
  )
}

export default Page