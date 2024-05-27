function majorityElement(nums: number[]): number {
  const obj: Record<number, number> = {};
  for (let num of nums) {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;
    if (obj[num] > nums.length / 2) return num;
  }
  return 0;
}
console.log(majorityElement([3, 2, 3]));
