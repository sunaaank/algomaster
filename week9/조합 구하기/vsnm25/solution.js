function solution(n, m) {
  const answer = [];
  const temp = Array.from({ length: m }, () => 0);

  function dfs(l) {
    if (l === m) {
      const current = temp.slice();
      answer.push(current);
    } else {
      for (let i = 1; i <= n; i++) {
        if (l > 0 && (temp.includes(i) || i < temp[l - 1])) {
          continue;
        } else {
          temp[l] = i;
          dfs(l + 1);
          temp[l] = 0;
        }
      }
    }
  }
  dfs(0);
  console.log(answer.map((set) => set.join(" ")).join("\n"));
  return answer.length;
}

console.log(solution(4, 2));
