function solution(n, m) {
  let answer = [];
  let dy = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
  function DFS(n, m) {
    if (dy[n][m] > 0) return dy[n][m];
    if (m === 0 || n === m) return 1;
    else return (dy[n][m] = DFS(n - 1, m - 1) + DFS(n - 1, m));
  }
  answer = DFS(n, m);
  return answer;
}

console.log(solution(5, 3));
