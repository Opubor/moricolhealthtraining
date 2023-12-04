import Sidebar from "@/component/Sidebar";
import prisma from "@/lib/prisma-client";
import Link from "next/link";
import React from "react";

const getUsers = async () => {
  return prisma.user.findMany({});
};
const getEnrolledUsers = async () => {
  return prisma.enrollment.findMany({});
};

async function Page() {
  const users = await getUsers();
  const enrolledUsers = await getEnrolledUsers();
  return (
    <Sidebar>
      <div className="container">
        <div className="dashboard">
          <div className="subDashboard bg-warning p-4 border rounded d-flex flex-column align-items-center justify-items-center">
            <h4 className="fw-bold">{users.length}</h4>
            <p className="fw-bold">Users</p>
          </div>
          <div className="subDashboard bg-warning p-4 border rounded d-flex flex-column align-items-center justify-items-center">
            <h4 className="fw-bold">{enrolledUsers.length}</h4>
            <p className="fw-bold">Enrollments</p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Page;
