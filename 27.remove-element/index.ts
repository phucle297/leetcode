function removeElement(nums: number[], val: number): number {
  let x = 0;

  while (x < nums.length) {
    if (nums[x] === val) {
      nums.splice(x, 1);
    } else {
      x++;
    }
  }

  return nums.length;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));
