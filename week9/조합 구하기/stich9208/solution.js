const solution = (num, count) => {
  let answer = [];
  let temp = Array.from({ length: count }, () => 0);
  let check = Array.from({ length: num }, () => 0);

  const DFS = (level) => {
    if (level === count) answer.push(temp.slice());
    else {
      for (let i = 1; i <= num; i++) {
        if (check[i - 1] !== 1) {
          check[i - 1] = 1;
          temp[level] = i;
          DFS(level + 1);
          check[i - 1] = 0;
        }
      }
    }
  };
  DFS(0);
  return answer;
};
