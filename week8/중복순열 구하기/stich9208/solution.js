const solution = (num, selectCount) => {
  let answer = [];
  let temp = Array.from({ length: selectCount }, () => 0);

  const DFS = (level) => {
    if (level === selectCount) {
      answer.push(temp.slice());
      return;
    } else {
      for (let i = 1; i <= num; i++) {
        temp[level] = i;
        DFS(level + 1);
      }
    }
  };
  DFS(0);
  return answer;
};
