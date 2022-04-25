function solution(array, sum) {
  const answer = [];
  function dfs(level, count) {
    if (level >= sum) {
      if (level === sum) answer.push(count);
      return;
    } else {
      for (let i = 0; i < array.length; i++) {
        dfs(level + array[i], count + 1);
      }
    }
  }
  dfs(0, 0);
  return Math.min(...answer);
}

console.log(solution([1, 2, 5], 15));
