function removeDuplicates3(nums: number[]): number {
  let x: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 2]) {
      nums[x++] = nums[i];
    }
  }
  return x;
}
