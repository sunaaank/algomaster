function solution(n) {
  let answer = 1;
  function dfs(current) {
    if (current === 2) {
      answer *= 2;
    } else {
      answer *= current;
      const next = current - 1;
      dfs(next);
    }
  }
  dfs(n);
  return answer;
}

console.log(solution(5));
