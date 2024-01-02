import Sidebar from "@/component/Sidebar";
import prisma from "@/lib/prisma-client";
import Link from "next/link";
import React from "react";

const getUsers = async () => {
  return prisma.user.findMany({});
};

async function Page() {
  const users = await getUsers();

  return (
    <Sidebar>
      <h3 className="fw-bold text-decoration-underline">Registered Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserID</th>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data: any, i: any) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{data?.userId}</td>
              <td>{data?.name}</td>
              <td>{data?.role}</td>
              <td>{data?.email}</td>
              <td>{data?.phone}</td>
              <td>{data?.gender ? data?.gender : "---"}</td>
              <td>{data?.address}</td>
              <td>
                <Link href={`/admin/users/user_details/${data?.id}`}>
                  <span className="bg-primary small text-white px-3 py-2 rounded text-center">
                    View
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Sidebar>
  );
}

export default Page;
