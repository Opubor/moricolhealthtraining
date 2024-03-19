"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import RegPrompter from "../RegPrompter";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enrollmentSchema } from "@/schema/enrollmentSchema";
import { toast } from "react-toastify";

function EnrolSession() {
  const { data: session } = useSession();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const promptRegistration = async () => {
    setError(true);
    return setTimeout(() => {
      setError(false);
    }, 9000);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(enrollmentSchema) });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/freeCourse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: data?.userId,
          course: data?.course,
          paymentType: data?.paymentType,
          email: data?.email,
          phone: data?.phone,
          timeTable: data?.timeTable,
        }),
      });
      setLoading(false);
      let resStatus = response.status;
      if (resStatus === 404) {
        return toast.error("Enrolment Error", {
          position: "top-right",
        });
      } else if (resStatus === 200) {
        let res = await response.json();
        return toast.success(res, {
          position: "top-right",
        });
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      {session?.user ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            onClick={() => {
              setValue("userId", session?.user?.id),
                setValue("course", "Infection Control"),
                setValue("email", session?.user?.email),
                setValue("timeTable", "TBD"),
                setValue("phone", session?.user?.phone);
              setValue("paymentType", "Free Course");
            }}
            className="title text-primary small"
          >
            Enrol Course
          </button>
        </form>
      ) : (
        <div
          onClick={() => promptRegistration()}
          className="title text-primary small cursorPointer"
        >
          Enrol Course
        </div>
      )}
      {error && <RegPrompter />}
    </div>
  );
}

export default EnrolSession;
