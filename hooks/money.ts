import { CURRENCIES } from "@/lib/types";
import next from "next";

export async function money(amount: number, currency: CURRENCIES) {
  const initialRates = {
    EUR: 0.0010, 
    GBP: 0.00087, 
    USD: 0.0011,
    NGN: 1,
    CAD: 0.0015,
    AUD: 0.0016,
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
