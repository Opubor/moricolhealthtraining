"use client";
import { enrollmentSchema } from "@/schema/enrollmentSchema";
import React, { useState, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { bundles, courseDataArray, eLearningCourses } from "@/data/Data";

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
        }),
      });
      setLoading(false);
      let u = await response.json();
      return push(u?.url);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    if (courseType === "inclass") {
      const courseDesc = courseDataArray.find(
        (item) => item.id === Number(courseId)
      );
      let courseName = courseDesc?.title;
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
    }
  }, []);

  return (
    <>
      <h5 className="text- mt-2 fw-bold">
        {course} - ${amount}
      </h5>
      <div className="d-flex align-items-left justify-items-left mt-4 row">
        <p>Please enter your details below as part of the enrolment process</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.course && (
          <p className="text-danger text-sm">Course is required.</p>
        )}
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
              <label>Phne number</label>
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
