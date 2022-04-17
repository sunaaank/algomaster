function solution(array) {
  let answer = "No";
  let flag = 0;
  let total = array.reduce((a, b) => a + b, 0);
  let n = array.length;

  function dfs(L, sum) {
    if (flag) return;
    if (L === n) {
      // 마지막 레벨일 때 합이 전체합의 절반일 경우
      // 합이 같은 다른 부분집합이 무조건 존재
      // flag 값을 1로 선언하여 재귀 종료
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      // 다음 레벨로 이동, 현재 레벨 값 합에 추가
      dfs(L + 1, sum + array[L]);
      // 다음 재귀에서는 합은 추가 안하고 다음 레벨로 이동
      dfs(L + 1, sum);
    }
  }
  dfs(0, 0);
  return answer;
}

solution([1, 3, 5, 6, 7, 10]);
