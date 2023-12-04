import ResetPasswordForm from "@/component/form/ResetPasswordForm";
import prisma from "@/lib/prisma-client";
import Link from "next/link";
import React from "react";
import ForgotPassword from "../forgotPassword/page";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

async function Page({ searchParams }: Props) {
  if (searchParams?.token) {
    const user = await prisma.user.findUnique({
      where: {
        resetPasswordToken: searchParams?.token as string,
      },
    });

    if (!user) {
      return <div> Invalid token</div>;
    }

    return <ResetPasswordForm token={searchParams?.token as string} />;
  } else {
    return <ForgotPassword />;
  }
}

export default Page;
