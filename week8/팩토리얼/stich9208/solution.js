const solution = (num) => {
  let answer = 1;

  const DFS = (level) => {
    if (level === 1) {
      return;
    } else {
      answer = answer * level;
      DFS(level - 1);
    }
  };

  DFS(num);
  return answer;
};
