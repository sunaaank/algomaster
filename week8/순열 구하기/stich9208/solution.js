const solution = (pickNum, arr) => {
  let answer = [];
  const length = arr.length;

  let temp = Array.from({ length: pickNum }, () => 0);
  let check = Array.from({ length: length }, () => 0);

  const DFS = (level) => {
    if (level === pickNum) {
      answer.push(temp.slice());
      return;
    } else {
      for (let i = 0; i < length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[level] = arr[i];
          DFS(level + 1);
          check[i] = 0;
        }
      }
    }
  };
  DFS(0);
  return answer;
};
