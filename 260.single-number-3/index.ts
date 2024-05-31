function singleNumber(nums: number[]): number[] {
  const set = new Set<number>();
  for (let num of nums) {
    if (set.has(num)) set.delete(num);
    else set.add(num);
  }
  return Array.from(set);
}
singleNumber([1, 2, 1, 3, 2, 5]);
