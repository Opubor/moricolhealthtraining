import useSWR from "swr";

export const getCurrencyRates = async () => {
  const params = objectToQueryString({
    access_key: "17b73f42ab4a50b942cfe229fe384d1d",
    base: "EUR",
    symbols: `GBP,EUR,USD,NGN,CAD,AUD`,
  });

  const response = await fetch(`/api/currency/conversion-rates`, {
    next: { revalidate: 604800 },
  });

  let data = await response.json();

  return data?.rates;
};

function objectToQueryString(obj: Record<string, string>) {
  return Object.keys(obj)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    .join("&");
}

function useMoney(amount: number, currency: string) {
  const {
    data: rates,
    isLoading,
    error,
  } = useSWR("currency-rate", getCurrencyRates, {
    dedupingInterval: 604800,
  });

  const initialRates = {
    EUR: 11, // eg. 1 USD === 1.745111 EUR
    GBP: 2.3, // etc...
    USD: 2.1,
    NGN: 1,
    CAD: 3.9,
    AUD: 2.4,
  };

  let money = 0;
  if (isLoading) {
    return (money = 0);
  }
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

export default useMoney;
