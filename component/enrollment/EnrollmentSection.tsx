"use client";
import { enrollmentSchema } from "@/schema/enrollmentSchema";
import React, { useState, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  addOns,
  bundles,
  courseDataArray,
  courseDataContents,
  eLearningCourses,
  inductionOrientation,
  timeTable,
} from "@/data/Data";
import Image from "next/image";
import { toast } from "react-toastify";

interface Props {
  courseId: number;
}

function EnrollmentSection({ courseId }: Props) {
  const searchParams = useSearchParams();
  const courseType = searchParams.get("type");
  const { push } = useRouter();

  const [course, setCourse] = useState("");
  const [amount, setAmount] = useState("");

  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(enrollmentSchema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/enrollment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: data?.userId,
          email: data?.email,
          phone: data?.phone,
          course: data?.course,
          timeTable: data?.timeTable,
          noOfDays: data?.noOfDays,
        }),
      });
      setLoading(false);
      let x = response.status;
      if (x === 404) {
        return toast.error("Course not found", {
          position: "top-right",
        });
      } else if (x === 200) {
        let res = await response.json();
        return push(res?.url);
      }
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    if (courseType === "inclass") {
      const courseDesc = courseDataContents.find(
        (item) => item.id === Number(courseId)
      );
      let courseName = courseDesc?.content;
      setAmount(courseDesc?.price as string);
      return setCourse(courseName as string);
    } else if (courseType === "eLearningCourse") {
      const courseDesc = eLearningCourses.find(
        (item) => item.id === Number(courseId)
      );
      let courseName = courseDesc?.title;
      setAmount(courseDesc?.price as string);
      return setCourse(courseName as string);
    } else if (courseType === "bundle") {
      const courseDesc = bundles.find((item) => item.id === Number(courseId));
      let courseName = courseDesc?.title;
      setAmount(courseDesc?.price as string);
      return setCourse(courseName as string);
    } else if (courseType === "induction") {
      const courseDesc = inductionOrientation.find((item) => item?.id === 0);
      let courseName = courseDesc?.title;
      setAmount(courseDesc?.price as string);
      return setCourse(courseName as string);
    } else if (courseType === "addOns") {
      const courseDesc = addOns.find((item) => item?.id === Number(courseId));
      let courseName = courseDesc?.name;
      setAmount(courseDesc?.price as string);
      return setCourse(courseName as string);
    }
  }, []);

  return (
    <>
      {courseType === "addOns" ? (
        <>
          <h5 className="mb-2 mt-2 fw-bold">
            {course} - &#8358;{amount}
          </h5>
        </>
      ) : (
        <>
          <h5 className="mb-2 mt-2 fw-bold">
            {course} - &#8358;{amount}
          </h5>
          {/* === Time-table forInclass, E-Learning, Induction */}
          {["inclass", "eLearningCourse", "induction"].includes(
            courseType as string
          ) && (
            <input
              type="hidden"
              value="Your time table will be forwarded to you by Moricol Team"
              {...register("timeTable", { required: true })}
            />
          )}
          {/* ===Bundle 4 */}
          {courseType === "bundle" && course === "Bundle 4" && (
            <div className="border rounded p-3">
              <h6 className="fw-bold">Time Table</h6>
              <input
                type="hidden"
                value="8hrs Daily/6 days/48hrs total/ Monday – Saturday/ 9am-5pm"
                {...register("timeTable", { required: true })}
              />
              <p className="mt-1">
                8hrs Daily/6 days/48hrs total/ Monday – Saturday/ 9am-5pm
              </p>
            </div>
          )}
          {/* ===Bundle 5=== */}
          {courseType === "bundle" && course === "Bundle 5" && (
            <div className="border rounded p-3">
              <h6 className="fw-bold">Time Table</h6>
              <input
                type="hidden"
                value="Enjoy the flexibility of learning at your own pace and comfort"
                {...register("timeTable", { required: true })}
              />
              <p>
                Enjoy the flexibility of learning at your own pace and comfort
              </p>
            </div>
          )}
          {/* ===Bundle 1-3=== */}
          {courseType === "bundle" &&
            ["Bundle 1", "Bundle 2", "Bundle 3"].includes(course) && (
              <div className="d-md-flex w-md-50 gap-2">
                {timeTable.map((data) => (
                  <div className="form-check">
                    <input
                      type="radio"
                      value={`${data?.name} - ${data?.description}`}
                      id={`gateway-${data.id}`}
                      className="form-check-input"
                      {...register("timeTable", { required: true })}
                      checked
                    />
                    <label
                      htmlFor={`gateway-${data.id}`}
                      className={`form-check-label border p-2`}
                    >
                      <div className="border rounded p-3">
                        <h6 className="fw-bold">{data?.name}</h6>
                        <p>{data?.description}</p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}
        </>
      )}
      <div className="d-flex align-items-left justify-items-left mt-2 row overflow-hidden">
        <p>Please enter your details below as part of the enrolment process</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__login_imput">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-danger text-sm">Email is required.</p>
              )}
            </div>
          </div>

          <div className="col-xl-12 mt-4">
            <div className="tf__login_imput">
              <label>Phone number</label>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="text-danger text-sm">Phone Number is required.</p>
              )}
            </div>
          </div>

          {courseType === "addOns" && course !== "Computer Appreciation" && (
            <div className="col-xl-12 mt-4">
              <div className="tf__login_imput">
                <label>No. of Days</label>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  {...register("noOfDays", { required: true })}
                />
                {errors.noOfDays && (
                  <p className="text-danger text-sm">No of Days is required.</p>
                )}
              </div>
            </div>
          )}

          <div className="col-xl-12">
            <div className="d-flex align-items-center justify-items-center w-100 mt-3">
              <button
                onClick={() => {
                  setValue("userId", session?.user.id),
                    setValue("course", course);
                }}
                type="submit"
                className="btn btn-success w-100"
              >
                {loading ? "Loading" : "Enroll"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default EnrollmentSection;
