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
    EUR: 0.001,
    GBP: 0.00087,
    USD: 0.0011,
    NGN: 1,
    CAD: 0.0015,
    AUD: 0.0016,
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
