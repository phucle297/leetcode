/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let j = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] > nums2[j]) {
      for (let k = nums1.length - 1; k > i; k--) {
        nums1[k] = nums1[k - 1];
      }
      nums1[i] = nums2[j];
      j++;
    }
  }
  while (nums1[nums1.length - 1] === 0) {
    nums1.pop();
  }
  while (j < nums2.length) {
    nums1.push(nums2[j]);
    j++;
  }
  while (nums1.length < m + n) {
    nums1.push(0);
  }
  console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3);
merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2);
