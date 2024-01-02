"use client";
import { editCurrencySchema } from "@/schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";



function NonUserCurrency() {
  const router = useRouter();
  const [currencyValue, setCurrencyValue] = useState("");

  const getCurrency = async () => {
    try {
      if (!localStorage.getItem("currency")) {
        localStorage.setItem("currency", "NGN");
      }
      let currency = localStorage.getItem("currency") as string;
      setCurrencyValue(currency);
      return router.refresh();
    } catch (error) {
      return console.log(error);
    }
  };
  const defaultCurrency = { currency: currencyValue };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(editCurrencySchema),
    defaultValues: defaultCurrency || {},
  });
  const onSubmit = async (data: FieldValues) => {
    try {
      localStorage.setItem("currency", data?.currency);
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

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <form
    className={`px-2`}
    onSubmit={handleSubmit(onSubmit)}
    >
      <select
        className="border-2 py-2 px-3 rounded"
        {...register("currency", {
          required: true,
          onChange: handleSubmit(onSubmit),
        })}
      >
        {/* <option value={"CUR"}>CUR</option> */}
        <option value={defaultCurrency?.currency}>
          {defaultCurrency?.currency}
        </option>
        {currencies.map((data: any, i: any) => (
          <option
            key={i}
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

export default NonUserCurrency;
