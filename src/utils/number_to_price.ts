export const priceToUSDT = (price: number) => {
  const numberToDouble = price.toFixed(2);
  return parseFloat(numberToDouble)
    .toLocaleString("en-UD", {
      style: "currency",
      currency: "USD",
    })
    .replace("$", "");
};
