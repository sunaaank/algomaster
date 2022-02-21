function solution(numbers, target) {
  let answer = 0;
  function dfs(type, index, sum, stack) {
    if (!numbers[index]) {
      console.log(stack, sum);
      if (sum === target) {
        answer += 1;
      }
    } else {
      sum += numbers[index] * type;
      console.log(sum, numbers[index] * type);
      const update = stack.concat(numbers[index] * type);
      dfs(1, index + 1, sum, update);
      dfs(-1, index + 1, sum, update);
    }
  }
  dfs(1, 0, 0, []);
  dfs(-1, 0, 0, []);

  return answer / 2;
}
solution([1, 1, 1, 1, 1], 3);
