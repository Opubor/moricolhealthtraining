"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { editCurrencySchema } from "@/schema/userSchema";

interface Props {
  user: any;
}

function UserCurrency({ user }: Props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(editCurrencySchema),
    defaultValues: user || {},
  });
  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await fetch(`/api/user/${user?.id}/currency`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currency: data.currency,
        }),
      });
      

      return router.refresh();
    } catch (error) {
      return console.log(error);
    }
  };
  const currencies = [
    { name: "EUR" },
    { name: "GBP" },
    { name: "USD" },
    { name: "NGN" },
    { name: "CAD" },
    { name: "AUD" },
  ];
  return (
    <form
      className={` bg-white cursor-pointer border border-gray-600`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <select
        className="border-2 border-themeColor"
        {...register("currency", {
          required: true,
          onChange: handleSubmit(onSubmit),
        })}
      >
        <option value={user?.currency}>{user?.currency}</option>
        {currencies.map((data: any, i: any) => (
          <option
            key={i}
            // selected={user?.currency === data?.name}
            value={data?.name}
            className="border-2 border-themeColor flex justify-between gap-2 items-center px-2 py-1 w-24 hover:bg-lightThemeColor"
          >
            {data?.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default UserCurrency;
