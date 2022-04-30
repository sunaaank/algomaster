function solution(n, r) {
  let answer = 0;
  let topNum = 1;
  let bottomNum = 1;
  function dfs(top, bottom, topLoop) {
    // 분모 기준 2를 곱해야하는 경우
    if (bottom === 2) {
      // 분자 값이 2보다 큰 경우 남은 횟수만큼 곱 반복
      if (top > 2) {
        for (let i = top; i > topLoop; i--) {
          topNum *= i;
        }
      } else {
        topNum *= 2;
      }
      // 분자를 분모로 나눈 값을 answer에 합한 후 초기화
      bottomNum *= 2;
      answer += topNum / bottomNum;
      topNum = 1;
      bottomNum = 1;
    } else {
      // 아닌 경우 재귀
      topNum *= top;
      bottomNum *= bottom;
      dfs(top - 1, bottom - 1, topLoop);
    }
  }

  dfs(n - 1, r - 1, n - r);
  dfs(n - 1, r, n - r - 1);
  return answer;
}

console.log(solution(5, 3));
