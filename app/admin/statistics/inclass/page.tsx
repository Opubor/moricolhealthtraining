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
          <h5 className="mt_50">IN-CLASS COURSES STATISTICS</h5>
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
              <td>Level 2 Award in Basic Life Support</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course === "Level 2 Award in Basic Life Support"
                    );
                  }).length
                }
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Level 2 Award in Safe Handling and Medication</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course ===
                      "Level 2 Award in Safe Handling and Medication"
                    );
                  }).length
                }
              </td>
            </tr>
            <tr>
              <th scope="row">CORE AND MANDATORY COURSES</th>
              <td>Level 2 Award in Health, Safety and Fire</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course ===
                      "Level 2 Award in Health, Safety and Fire"
                    );
                  }).length
                }
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Level 2 Award in Infection Prevention and Control</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course ===
                      "Level 2 Award in Infection Prevention and Control"
                    );
                  }).length
                }
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Level 2 Award in Moving, Assisting and Hoisting</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course ===
                      "Level 2 Award in Moving, Assisting and Hoisting"
                    );
                  }).length
                }
              </td>
            </tr>
          </tbody>
        </table>

        {/* ===First Aid & Fire Safety=== */}
        <table className="table table-striped bg-primary w-100 mt-4" border={3}>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Course</th>
              <th scope="col">No. of registration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">FIRST AID & FIRE SAFETY</th>
              <td>Level 3 Award in First Aid at Work</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course === "Level 3 Award in First Aid at Work"
                    );
                  }).length
                }
              </td>
            </tr>
          </tbody>
        </table>

        {/* ===Clinical=== */}
        <table className="table table-striped bg-primary w-100 mt-4" border={3}>
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
              <td>Level 2 Award in Catheter Care</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Level 2 Award in Catheter Care";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Level 2 Award in Diabetes Awareness</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course === "Level 2 Award in Diabetes Awareness"
                    );
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>
                Level 2 Award in Epilepsy and Emergency Medication Awareness
              </td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course ===
                      "Level 2 Award in Epilepsy and Emergency Medication Awareness"
                    );
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row">CLINICAL</th>
              <td>Level 2 Award in Oxygen Therapy</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Level 2 Award in Oxygen Therapy";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Level 2 Award in Stoma Care Awareness</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course === "Level 2 Award in Stoma Care Awareness"
                    );
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Level 3 Award in PEG Feeding</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Level 3 Award in PEG Feeding";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Level 3 Award in Tracheostomy</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Level 3 Award in Tracheostomy";
                  }).length
                }
              </td>
            </tr>
          </tbody>
        </table>

        {/* ===Specialist=== */}
        <table className="table table-striped bg-primary w-100 mt-4" border={3}>
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
              <td>Level 2 Award in Autism Spectrum</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Level 2 Award in Autism Spectrum";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Level 2 Award in Pressure Care Management</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course ===
                      "Level 2 Award in Pressure Care Management"
                    );
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row">SPECIALIST</th>
              <td>Level 2 Award in Stroke Awareness</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Level 2 Award in Stroke Awareness";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Level 2 Award in Understanding Mental Health</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course ===
                      "Level 2 Award in Understanding Mental Health"
                    );
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Level 3 Award in Dementia</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Level 3 Award in Dementia";
                  }).length
                }
              </td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td>Level 3 Award in Medication Competency and Management</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return (
                      data?.course ===
                      "Level 3 Award in Medication Competency and Management"
                    );
                  }).length
                }
              </td>
            </tr>
          </tbody>
        </table>

        {/* ===Health and Safety=== */}
        <table className="table table-striped bg-primary w-100 mt-4" border={3}>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Course</th>
              <th scope="col">No. of registration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">HEALTH & SAFETY</th>
              <td>Level 3 Award in Food Safety</td>
              <td className="fw-bold">
                {
                  enrollments?.filter((data: any) => {
                    return data?.course === "Level 3 Award in Food Safety";
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
