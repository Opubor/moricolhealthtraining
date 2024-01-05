"use client";
import useMoney from "@/hooks/useMoney";
import { CURRENCIES } from "@/lib/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  currency: CURRENCIES;
  price: number;
}
function Currency({ currency, price }: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  const [currencyValue, setCurrencyValue] = useState("NGN");

  const getCurrency = async () => {
    try {
      let currency = localStorage.getItem("currency") as string;
      setCurrencyValue(currency);
      return router.refresh();
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    getCurrency();
  }, []);
  return (
    <span>
      {new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: session ? currency : (currencyValue as string),
      }).format(
        useMoney(
          price,
          session ? (currency as CURRENCIES) : (currencyValue as string)
        )
      )}
    </span>
  );
}

export default Currency;
