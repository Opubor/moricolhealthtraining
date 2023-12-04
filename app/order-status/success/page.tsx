import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
// import { BsCheck2Circle } from "react-icons/bs";

async function Page() {
  const session = await getServerSession(options);

  return (
    <div className="orderStatus p-4">
      <div className="enrollmentlogo">
        <img src="/images/moricollogo.jpeg" />
      </div>
      <h1 className="fw-bold mt-4"> Enrolment Successful!</h1>
      <p className="mt-4 text-center">
        Congratulations on successfully enrolling in our health training
        courses! We are thrilled to welcome you to MORICOL
      </p>
      <p className="mt-2 text-center">
        Thank you for choosing MORICOL for your health education journey. We
        look forward to supporting you in achieving your learning goals
      </p>
      <p className="mt-2 text-center">
        You will receive a follow-up shortly to commence your classes.
      </p>
      <div className="mt-4 mb-4">
        <Link href={"/"} className="bg-success text-white p-2 rounded">
          Back to Home page
        </Link>
      </div>
    </div>
  );
}

export default Page;
