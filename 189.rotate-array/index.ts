/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  while (k > nums.length) k -= nums.length;
  const res = [...nums.slice(-k), ...nums.slice(0, -k)];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
};
