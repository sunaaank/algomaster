function solution(array, c, n) {
  const sums = [];
  function dfs(sum, index, count) {
    // 최대 갯수 또는 마지막 index
    if (count === n || index === array.length - 1) {
      sum += array[index];
      // 최대 무게와 같거나 작을 경우 추가
      if (sum <= c) sums.push(sum);
      return;
    }
    dfs(sum + array[index], index + 1, count + 1);
    dfs(sum, index + 1, count);
  }
  dfs(0, 0, 0);
  // 합 값중 최대값 반환
  return Math.max(...sums);
}

solution([81, 58, 42, 33, 61], 259, 5);
