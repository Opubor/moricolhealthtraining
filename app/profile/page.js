import React from "react";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import ProfileCard from "../../component/profile/ProfileCard";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma-client";
import { redirect } from "next/navigation";
import UpdatePassword from "@/component/profile/UpdatePassword";
import { getUser } from "../../service/userService";

export const metadata = {
  title: "Moricol Health Training",
  description:
    "Explore comprehensive health training courses designed for health workers at our website. Earn valuable certificates through specialized programs tailored to enhance your skills and knowledge in various healthcare fields.Our company takes pride in being recognized as a CPD Certified Training Centre. Our platform offers a range of accredited courses, empowering healthcare practitioners to stay updated on the latest industry standards and best practices. Enroll now for quality education, advance your career, and contribute to improving patient care.",
};

async function Page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/sign-in");
  }

  const user = await getUser(session?.user?.id);
  return (
    <Layout user={user}>
      <BreadcrumbSection header="Profile" title="Profile" />
      <ProfileCard user={user} />
      <UpdatePassword user={user} />
    </Layout>
  );
}

export default Page;
