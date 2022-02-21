function solution(numbers, target) {
  let answer = 0;
  function dfs(sign, index, sum) {
    if (!numbers[index]) {
      if (sum === target) answer += 1;
    } else {
      sum += numbers[index] * sign;
      dfs(1, index + 1, sum);
      dfs(-1, index + 1, sum);
    }
  }
  dfs(1, 0, 0);
  dfs(-1, 0, 0);

  return answer / 2;
}
