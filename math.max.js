const perfTestAmount = 10000000;
function perfTestMax() {
  const n = "math";
  console.time(n);
  let m = 0;
  let l = perfTestAmount;
  while (l--) {
    m = Math.max(m, Math.random());
  }
  console.timeEnd(n);
}
function perfTestMaxIf() {
  const n = "if";
  console.time(n);
  let m = 0;
  let l = perfTestAmount;
  while (l--) {
    const r = Math.random();
    if (m < r) m = r;
  }
  console.timeEnd(n);
}
function perfTernary() {
  const n = "ternary";
  console.time(n);
  let m = 0;
  let l = perfTestAmount;
  while (l--) {
    const r = Math.random();
    m = m < r ? r : m;
  }
  console.timeEnd(n);
}
function perfTestLogicalAnd() {
  const n = "logical_and";
  console.time(n);
  let m = 0;
  let l = perfTestAmount;
  while (l--) {
    const r = Math.random();
    m = m < r && r;
  }
  console.timeEnd(n);
}

perfTestMaxIf();
perfTernary();
perfTestMax();
perfTestLogicalAnd();
