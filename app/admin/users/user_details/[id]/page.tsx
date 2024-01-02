import Sidebar from "@/component/Sidebar";
import prisma from "@/lib/prisma-client";
import React from "react";

const getUser = async (id: string) => {
  return await prisma.user.findFirst({
    where: { id: id },
    include: {
      Enrollment: true,
      Payment: true,
      CompanyEnrollment: true,
    },
  });
};

type PageProps = {
  params: { id: string };
};

async function Page({ params }: PageProps) {
  const user = await getUser(params.id);
  return (
    <Sidebar>
      <div className="card" style={{ width: '25rem' }}>
        <img
          src="/images/moricollogo.jpeg"
          className="card-img-top"
          alt="User Avatar"
        />

        <div className="card-body">
          <h5 className="card-title">{user?.name} - ({user?.role})</h5>
          <p className="card-text">ID: {user?.userId}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Email: {user?.email}</li>
            <li className="list-group-item">Phone: {user?.phone}</li>
            <li className="list-group-item">Location: {user?.name}</li>
            {user?.gender && (
              <li className="list-group-item">Gender: {user?.gender}</li>
            )}
            {user?.address && (
              <li className="list-group-item">Address: {user?.address}</li>
            )}
            {user?.businessType && (
              <li className="list-group-item">Business Type: {user?.businessType}</li>
            )}
            {user?.registrationNumber && (
              <li className="list-group-item">Reg. Number: {user?.registrationNumber}</li>
            )}
            {user?.industry && (
              <li className="list-group-item">Industry: {user?.industry}</li>
            )}
          </ul>
        </div>
      </div>
    </Sidebar>
  );
}

export default Page;
