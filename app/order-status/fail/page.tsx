import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
// import { BsCheck2Circle } from "react-icons/bs";

async function Page() {
  const session = await getServerSession(options);

  return (
    <div className="orderStatus p-4 container">
      <div className="enrollmentlogo">
        {/* <img src="/images/moricollogo.jpeg" /> */}
      </div>
      <h1 className="fw-bold mt-4">Payment Error!</h1>
      <p className="mt-4 text-center">Oops Network Error. </p>
      <div className="mt-4 mb_195">
        <Link href={"/"} className="bg-success text-white p-2 rounded">
          Retry Payment
        </Link>
      </div>
    </div>
  );
}

export default Page;
