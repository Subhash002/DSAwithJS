function maxProfit(prices) {
  let firstBuy = Number.NEGATIVE_INFINITY;
  let firstSell = 0;
  let secondBuy = Number.NEGATIVE_INFINITY;
  let secondSell = 0;

  for (let price of prices) {
    firstBuy = Math.max(firstBuy, -price);
    firstSell = Math.max(firstSell, firstBuy + price);
    secondBuy = Math.max(secondBuy, firstSell - price);
    secondSell = Math.max(secondSell, secondBuy + price);
  }

  return secondSell;
}
