function maxProfit2(prices: number[]): number {
  let maxProfit = 0;
  let k = 0;
  let cur = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[k]) {
      k = i;
      continue;
    }
    if (prices[i] - prices[k] + cur > cur) {
      cur += prices[i] - prices[k];
      k = i;
    }
    maxProfit = Math.max(maxProfit, cur);
  }
  return maxProfit;
}
