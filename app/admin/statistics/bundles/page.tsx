import Sidebar from "@/component/Sidebar";
import prisma from "@/lib/prisma-client";
import React from "react";

const getEnrolledUsers = async () => {
  return prisma.enrollment.findMany({});
};

async function Page() {
  const enrollments = await getEnrolledUsers();

  return (
    <Sidebar>
      {/* ===Statistics=== */}
      <div className="w-100 border-top mt-4">
        {/* <h1>IN-CLASS PROGRAMS STATISTICS</h1> */}
        <div className="tf__heading_area ">
          <h5 className="mt_50">BUNDLE COURSES STATISTICS</h5>
        </div>

        {/* ===Core and Mandatory Courses=== */}
        <table className="table table-striped bg-primary w-100" border={3}>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Course</th>
              <th scope="col">No. of registration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>Bundle 1</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 1";
                  }).length
                }
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Bundle 2</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 2";
                  }).length
                }
              </td>
            </tr>
            <tr>
              <th scope="row">BUNDLE COURSES</th>
              <td>Bundle 3</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 3";
                  }).length
                }
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Bundle 4</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 4";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Bundle 5</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 5";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Bundle 6</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 6";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Bundle 7</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 7";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Bundle 8</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 8";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Bundle 9</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 9";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Bundle 10</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 10";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Bundle 11</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Bundle 11";
                  }).length
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Sidebar>
  );
}

export default Page;
