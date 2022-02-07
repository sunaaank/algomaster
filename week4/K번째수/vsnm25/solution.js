function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    const [start, end, target] = commands[i];
    const newArr = array.slice(start - 1, end).sort((a, b) => a - b);

    answer.push(newArr[target - 1]);
  }
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
