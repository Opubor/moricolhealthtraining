import EnrollmentSection from "@/component/enrollment/EnrollmentSection";
import React from "react";

type PageProps = {
  params: { slug: number | string | undefined };
};

function Page({ params }: PageProps) {
  return (
    <div className="enrollment p-2">
      <div className="enrollmentlogo">
        <img src="/images/moricollogo.jpeg" />
      </div>
      <h2 className="fw-bold text-decoration-underline">COURSE ENROLLMENT</h2>
      <EnrollmentSection courseId={params?.slug as number} />
    </div>
  );
}

export default Page;
