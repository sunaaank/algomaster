function solution(array, m) {
  const scores = [];
  function dfs(sum, time, index) {
    // 마지막 index 이고 제한시간보다 작거나 같을 경우
    if (index === array.length) {
      if (time <= m) {
        scores.push(sum);
      }
      return;
    }
    const [score, spend] = array[index];
    // 문제를 풀거나 넘어간 경우로 나눠 재귀
    dfs(sum + score, time + spend, index + 1);
    dfs(sum, time, index + 1);
  }
  dfs(0, 0, 0);
  return Math.max(...scores);
}
console.log(
  solution(
    [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ],
    20
  )
);
