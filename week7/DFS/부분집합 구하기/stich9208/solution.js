const getSubSet = (num) => {
  let answer = [];
  let subset = Array.from({ length: num + 1 }, () => 0);

  const DFS = (idx) => {
    if (idx === num + 1) {
      let temp = "";
      for (let i = 1; i <= num; i++) {
        if (subset[i] === 1) {
          temp += i + " ";
        }
      }
      if (temp.length > 0) answer.push(temp.trim());
    } else {
      subset[idx] = 1;
      DFS(idx + 1);
      subset[idx] = 0;
      DFS(idx + 1);
    }
  };

  DFS(1);
  return answer;
};
