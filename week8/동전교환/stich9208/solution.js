const solution = (change, coinArr) => {
  let answer = 0;
  const length = coinArr.length;

  const DFS = (total, count) => {
    if (total > change) return;
    if (total === change) {
      if (answer === 0 || answer > count) {
        answer = count;
      }
      return;
    } else {
      for (let i = 0; i < length; i++) {
        DFS(total + coinArr[i], count + 1);
      }
    }
  };

  DFS(0, 0);
  return answer;
};
