function solution(n, m) {
  let arr = Array(m).fill(0);
  console.log("a", arr);
  let count = 0;
  let answer = [];
  function DFS(L) {
    if (L === m) {
      answer.push(arr.slice());
      count++;
    } else {
      for (let i = 1; i <= n; i++) {
        arr[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return [answer, count];
}

console.log(solution(3, 2));
