import { options } from "@/app/api/auth/[...nextauth]/options";
import EnrollmentSection from "@/component/enrollment/EnrollmentSection";
import { getUser } from "@/service/userService";
import { getServerSession } from "next-auth";
import React from "react";

type PageProps = {
  params: { slug: number | string | undefined };
};

async function Page({ params }: PageProps) {
  const session = await getServerSession(options);
  const user = await getUser(session?.user?.id as string);
  return (
    <div className="enrollment p-2">
      <div className="enrollmentlogo mt-4">
        <img src="/images/moricollogo.jpeg" />
      </div>
      <h4 className="fw-bold text-decoration-underline">REGISTRATION</h4>
      <EnrollmentSection courseId={params?.slug as number} user={user} />
    </div>
  );
}

export default Page;
