function solution(m, arr) {
  let answer = [];
  let n = arr.length;
  const check = Array(n).fill(0);
  const temp = Array(n).fill(0);

  function DFS(L) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(2, [3, 6, 9]));
