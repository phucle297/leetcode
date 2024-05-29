function maxProfit(prices: number[]): number {
  let min = prices[0];
  let max = 0;

  for (let current of prices) {
    min = Math.min(min, current);
    max = Math.max(max, current - min);
  }

  return max;
}
