"use client";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { paypalPaymentSchema } from "@/schema/enrollmentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
// import { BsCheck2Circle } from "react-icons/bs";

function Page() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId");
  const payerId = searchParams.get("PayerID");
  const token = searchParams.get("token");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(paypalPaymentSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/enrollment/confirm-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentId: data?.paymentId,
          payerId: data?.payerId,
          token: data?.token,
        }),
      });
      setLoading(false);

      if (response.status === 200) {
        return push("/order-status/success");
      } else if (response.status !== 200) {
        return push("/order-status/fail");
      }
    } catch (error) {
      setLoading(false);
      return console.log(error);
    }
  };

  return (
    <div className="orderStatus p-4 container">
      <div className="paypalenrlogo mt-4">
        <img src={"/images/paypal.png"} alt="PaymentGateway" />
      </div>
      <p className="small text-center d-none lg:d-block">
        Please click the
        <span className="text-primary italic fw-bold">
          'Confirm Payment'
        </span>{" "}
        button below to securely complete <br></br>
        your transaction and finalize your purchase. Thank you for choosing
        Moricol!
      </p>

      <p className="small text-center d-block lg:d-none">
        Please click the
        <span className="text-primary italic fw-bold">
          'Confirm Payment'
        </span>{" "}
        button below to securely complete your transaction and finalize your
        purchase. Thank you for choosing Moricol!
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <button
          onClick={() => {
            setValue("paymentId", paymentId),
              setValue("payerId", payerId),
              setValue("token", token);
          }}
          className="bg-primary text-white small px-4 py-2 rounded mt-4"
        >
          {loading ? "Loading..." : "Confirm Payment"}
        </button>
      </form>
      <div className="mt-4 mb_195">
        <Link href={"/"} className="text-success p-2 rounded">
          Back to Home page
        </Link>
      </div>
    </div>
  );
}

export default Page;
