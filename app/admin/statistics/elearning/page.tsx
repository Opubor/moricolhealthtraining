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
          <h5 className="mt_50">E-LEARNING COURSES STATISTICS</h5>
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
              <td>Care Certificate (15 Standards)</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Care Certificate (15 Standards)";
                  }).length
                }
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Full Online Package</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Full Online Package";
                  }).length
                }
              </td>
            </tr>
            <tr>
              <th scope="row">E-LEARNING COURSES</th>
              <td>Full Online Package + Care Certificate</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course === "Full Online Package + Care Certificate"
                    );
                  }).length
                }
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Principles of Moving & Assisting</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Principles of Moving & Assisting";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Safe Handling of Medication</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Safe Handling of Medication";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Dementia Awareness</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Dementia Awareness";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Food Safety Principles</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Food Safety Principles";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Safeguarding Adults</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Safeguarding Adults";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Dysphagia Awareness</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Dysphagia Awareness";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Epilepsy & Emergency Medication</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Epilepsy & Emergency Medication";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Equality, Diversity & Inclusion</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Equality, Diversity & Inclusion";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>COVID-19 Infection, Prevention, Identification & Control</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course ===
                      "COVID-19 Infection, Prevention, Identification & Control"
                    );
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>General Data Protection Regulation (GDPR)</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course ===
                      "General Data Protection Regulation (GDPR)"
                    );
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Handling Hazardous Substances (COSHH)</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course === "Handling Hazardous Substances (COSHH)"
                    );
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>First Aid Principles</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "First Aid Principles";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Role of a Fire Marshal</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Role of a Fire Marshal";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Health & Safety Essentials</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Health & Safety Essentials";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Conflict Resolution and Personal Safety</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course === "Conflict Resolution and Personal Safety"
                    );
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Mental Health in the Workplace</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Mental Health in the Workplace";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Food Safety, Nutrition and Hydration</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course === "Food Safety, Nutrition and Hydration"
                    );
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Disability and Autism Awareness</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Disability and Autism Awareness";
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
