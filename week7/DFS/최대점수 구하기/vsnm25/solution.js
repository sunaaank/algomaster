function solution(array, m) {
  const scores = [];
  function dfs(sum, time, index) {
    if (index === array.length) {
      if (time <= m) {
        scores.push(sum);
      }
      return;
    }
    const [score, spend] = array[index];
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
