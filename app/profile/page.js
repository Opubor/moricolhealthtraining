import React from "react";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import ProfileCard from "../../component/profile/ProfileCard";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma-client";
import { redirect } from "next/navigation";
import UpdatePassword from "@/component/profile/UpdatePassword";

export const metadata = {
  title: "Moricol Health Training",
  description: "Developed by Opubor Tony",
};

const getUser = async (id) => {
  return await prisma.user.findFirst({
    where: { id: id.toString() },
    include: { Enrollment: true, Payment:true },
  });
};
async function Page() {

  const session = await getServerSession(options);
  if (!session) {
    redirect("/sign-in");
  }

  const user = await getUser(session?.user?.id);
  return (
    <Layout>
      <BreadcrumbSection header="Profile" title="Profile" />
      <ProfileCard user={user} />
      <UpdatePassword user={user} />
    </Layout>
  );
}

export default Page;
