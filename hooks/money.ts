import { CURRENCIES } from "@/lib/types";
import next from "next";

export async function money(amount: number, currency: CURRENCIES) {
  const initialRates = {
    EUR: 11, // eg. 1 USD === 1.745111 EUR
    GBP: 2.3, // etc...
    USD: 2.1,
    NGN: 1,
    CAD: 3.9,
    AUD: 2.4,
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
