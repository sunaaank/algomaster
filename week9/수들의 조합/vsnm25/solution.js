function solution(array, k, d) {
  let answer = 0;
  const temp = Array.from({ length: k }, () => 0);
  // 오름차순 정렬
  const sorted = array.sort((a, b) => a - b);

  function dfs(l) {
    if (l === k) {
      const current = temp.slice();
      const sum = current.reduce((acc, cur) => acc + cur, 0);
      // 배수일경우 증가
      if (sum % d === 0) answer += 1;
    } else {
      for (let i = 0; i < sorted.length; i++) {
        // 이미 뽑은 경우 제외
        if ((l > 0 && temp.includes(sorted[i])) || temp[l - 1] > sorted[i])
          continue;
        else {
          temp[l] = sorted[i];
          dfs(l + 1);
          temp[l] = 0;
        }
      }
    }
  }
  dfs(0);
  return answer;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));
