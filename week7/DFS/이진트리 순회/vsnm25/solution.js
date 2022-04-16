// 3번 문제
function dps3(n, t) {
  console.log(n);
  if (t <= 2) {
    t += 1;
    dps3(n * 2, t);
    dps3(n * 2 + 1, t);
  } else {
    return;
  }
}
function solution3() {
  dps3(1, 1);
}
solution3();
