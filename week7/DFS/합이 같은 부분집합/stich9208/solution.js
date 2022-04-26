const solution = (length, arr) => {
  let answer = "No";
  //배열내 자연수 총합
  const sum = arr.reduce((acc, curr) => acc + curr);

  //자연수의 집합이므로 총합의 반이 소수점으로 나눠지면 답은 No이다.
  if (sum % 2 !== 0) return answer;

  //재귀 함수 선언
  const DFS = (index, total) => {
    if (index === length) {
      //total의 수가 집합의 총합의 반과 같은 수일 경우 answer를 Yes로 변경하고 바로 return
      if (total === sum / 2) {
        answer = "Yes";
        return;
      }
    } else {
      //해당 index의 수를 더하는 경우의 수
      DFS(index + 1, total + arr[index]);
      //해당 index의 수를 더하지 않는 경우의 수
      DFS(index + 1, total);
    }
  };

  DFS(0, 0);
  return answer;
};
