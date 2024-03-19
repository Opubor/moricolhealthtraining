import { CURRENCIES } from "@/lib/types";
import next from "next";

export async function money(amount: number, currency: CURRENCIES) {
  const initialRates = {
    EUR: 0.00059,
    GBP: 0.0005,
    USD: 0.00064,
    NGN: 1,
    CAD: 0.00087,
    AUD: 0.00098,
  };
  let money = 0;
  if (currency === "EUR") {
    money = initialRates?.EUR * amount;
  } else if (currency === "NGN") {
    money = initialRates?.NGN * amount;
  } else if (currency === "USD") {
    money = initialRates?.USD * amount;
  } else if (currency === "GBP") {
    money = initialRates?.GBP * amount;
  } else if (currency === "CAD") {
    money = initialRates?.CAD * amount;
  } else if (currency === "AUD") {
    money = initialRates?.AUD * amount;
  }

  return money;
}
