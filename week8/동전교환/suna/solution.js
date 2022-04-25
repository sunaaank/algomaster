function solution(n, c, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  c.sort((a, b) => b - a);

  function DFS(L, sum) {
    if (sum > m) return;
    if (answer <= L) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i <= n; i++) {
        DFS(L + 1, c[i] + sum);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(3, [1, 2, 5], 15));
