const solution = (weight, arr) => {
  let answer = 0;

  const DFS = (index, sum) => {
    //합이 승차 가능한 무게보다 크다면 바로 return
    if (sum > weight) return;
    //마지막 요소라면 answer에 최대값 할당
    if (index === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(index + 1, sum + arr[index]);
      DFS(index + 1, sum);
    }
  };

  DFS(0, 0);
  return answer;
};
