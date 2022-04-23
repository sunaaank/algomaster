function solution(n, arr) {
  let total = arr.reduce((prev, cur) => prev + cur);
  let flag = false;

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) flag = true;
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return flag ? "YES" : "NO";
}

let n = 6;
let arr = [1, 3, 5, 6, 7, 10];

console.log(solution(n, arr));
