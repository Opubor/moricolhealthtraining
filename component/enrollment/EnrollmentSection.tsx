"use client";
import { enrollmentSchema } from "@/schema/enrollmentSchema";
import React, { useState, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { courseDataArray, eLearningCourses } from "@/data/Data";

interface Props {
  courseId: number;
}

function EnrollmentSection({ courseId }: Props) {
  const searchParams = useSearchParams();
  const courseType = searchParams.get("type");
  const { push } = useRouter();

  const [course, setCourse] = useState("");

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
      ); // Use 'slug' here
      let courseName = courseDesc?.title;
      return setCourse(courseName as string);
    } else if (courseType === "eLearningCourse") {
      const courseDesc = eLearningCourses.find(
        (item) => item.id === Number(courseId)
      ); // Use 'slug' here
      let courseName = courseDesc?.title;
      return setCourse(courseName as string);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input
          // type="hidden"
          value={course}
          {...register("course", { required: true })}
        />
        <input
          // type="hidden"
          value={amount}
          {...register("amount", { required: true })}
        /> */}
        {errors.course && (
          <p className="text-danger text-sm">Course is required.</p>
        )}{" "}
       
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__login_imput">
              <label>email</label>
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

          <div className="col-xl-12">
            <div className="tf__login_imput">
              <label>phone number</label>
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
            <div className="tf__login_imput">
              <button
                onClick={() => {
                  setValue("userId", session?.user.id),
                    setValue("course", course);
                }}
                type="submit"
                className="common_btn"
              >
                {loading ? "Loading" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default EnrollmentSection;
