function solution(n, computers) {
  let answer = 0;

  const memory = {};
  function dfs(i, j) {
    if (computers[i][j] === 0 || i === j) return;
    else {
      if (memory[i] === undefined || memory[j] === undefined) {
        memory[i] = j;
        memory[j] = i;
        console.log(memory);
        answer += 1;
      }

      if (i + 1 >= n) return;
      else dfs(i + 1, j);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j);
    }
  }
  console.log(memory, answer);
}
solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
