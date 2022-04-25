function solution(n, m) {
  const array = Array.from({ length: m }, () => 0);
  let count = 0;
  const answer = [];

  function dfs(l) {
    // m 번만큼 숫자를 뽑았을 경우
    if (l === m) {
      answer.push(array.slice());
      count++;
    } else {
      // 1 ~ n 까지 해당 숫자를 뽑았을 모든 경우
      for (let i = 1; i <= n; i++) {
        array[l] = i;
        dfs(l + 1);
      }
    }
  }
  dfs(0);
  return [answer, count];
}

console.log(solution(3, 2));
