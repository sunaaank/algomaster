function solution(n) {
  let visit = Array.from({ length: n + 1 }, () => 0);
  let answer = [];

  function DFS(v) {
    if (v === n + 1) {
      let temp = "";
      for (let i = 0; i < visit.length; i++) {
        if (visit[i]) temp += i + " ";
      }
      answer.push(temp.trim());
    } else {
      visit[v] = 1;
      DFS(v + 1);
      visit[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer.join("\n");
}

console.log(solution(3));
