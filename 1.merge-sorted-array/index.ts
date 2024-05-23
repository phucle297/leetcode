/**
 Do not return anything, modify nums1 in-place instead.
 */
function mergeArr(a1: number[], a2: number[]): number[] {
  const c: number[] = [];

  while (a1.length > 0 && a2.length > 0) {
    if (a1[0] > a2[0]) {
      c.push(a2[0]);
      a2.shift();
    } else {
      c.push(a1[0]);
      a1.shift();
    }
  }

  while (a1.length > 0) {
    c.push(a1[0]);
    a1.shift();
  }
  while (a2.length > 0) {
    c.push(a2[0]);
    a2.shift();
  }

  return c;
}

function mergeSort(a: number[]): number[] {
  if (a.length === 1) return a;

  const a1: number[] = [];
  const a2: number[] = [];

  a.forEach((item, index) => {
    if (index < a.length / 2) a1.push(item);
    else a2.push(item);
  });

  const arr1: number[] = mergeSort(a1);
  const arr2: number[] = mergeSort(a2);

  return mergeArr(arr1, arr2);
}
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  const temp = nums1.slice(0, m);
  const result = mergeSort([...temp, ...nums2]);
  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = result[i];
  }
  console.log(nums1);
}
merge1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
