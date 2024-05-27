function removeDuplicates2(nums: number[]): number {
  let obj: Record<number, number> = {};
  const res = [];
  for (let num of nums) {
    if (obj[num]) {
      if (obj[num] === 1) {
        obj[num]++;
      } else continue;
    } else {
      obj[num] = 1;
    }
    res.push(num);
  }
  for (let i = 0; i < res.length; i++) {
    nums[i] = res[i];
  }
  return res.length;
}

removeDuplicates2([1, 1, 1, 2, 2, 3]);
