const solution = (timeLimit, scoreArr, timeArr) => {
  let answer = 0;

  const DFS = (index, timeSum, scoreSum) => {
    console.log(index, timeSum, scoreSum);
    if (timeSum > timeLimit) return;
    if (index === scoreArr.length) {
      answer = Math.max(answer, scoreSum);
    } else {
      DFS(index + 1, timeSum + timeArr[index], scoreSum + scoreArr[index]);
      DFS(index + 1, timeSum, scoreSum);
    }
  };
  DFS(0, 0, 0);
  return answer;
};
