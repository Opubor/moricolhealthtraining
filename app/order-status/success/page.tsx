import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
// import { BsCheck2Circle } from "react-icons/bs";

async function Page() {
  const session = await getServerSession(options);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* <BsCheck2Circle size={200} className="text-lime-500" /> */}
      <h1 className="text-2xl font-semibold">Order Confirmed!</h1>
      <p className="text-gray-400 text-xs lg:text-sm font-semibold">
        Enrolment Successful
      </p>
      <p>
        Congratulations on successfully enrolling in our health training
        courses! We are thrilled to welcome you to MORICOL
      </p>
      <p>Thank you for choosing MORICOL for your health education journey. We look forward to supporting you in achieving your learning goals</p>
      <p>You will receive a follow-up shortly to commence your classes.</p>

      <div className="mt-8">
        <Link
          href={"/"}
          className="bg-success hover:bg-lime-800 rounded-lg px-8 py-4 text-white text-lg font-semibold"
        >
          Back to Home page
        </Link>
      </div>
    </div>
  );
}

export default Page;
