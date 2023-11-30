import EnrollmentSection from '@/component/enrollment/EnrollmentSection'
import React from 'react'

type PageProps = {
  params: { slug: number | string | undefined };
};

function Page({ params }: PageProps) {

  return (
    <div>
      <EnrollmentSection courseId={params?.slug as number} />
    </div>
  )
}

export default Page