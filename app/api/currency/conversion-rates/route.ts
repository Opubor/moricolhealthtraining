export async function GET(request: Request) {
    const params = objectToQueryString({
      access_key: "17b73f42ab4a50b942cfe229fe384d1d",
      base: "EUR",
      symbols: `GBP,EUR,USD,NGN,CAD,AUD`,
    });
    return await fetch(`http://data.fixer.io/api/latest?${params}`, {
      next: { revalidate: 604800 },
    });
  }
  
  function objectToQueryString(obj: Record<string, string>) {
    return Object.keys(obj)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
      .join("&");
  }
  