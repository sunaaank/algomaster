function solution(n) {
  const visits = Array.from({ length: n }, () => 0);
  const answer = [];

  function dfs(i) {
    // i 와 n + 1이 같을때 즉 레벨이 3이 됐을때 종료
    if (i === n + 1) {
      let temp = "";
      for (let i = 0; i < visits.length; i++) {
        if (visits[i]) temp += i + " ";
      }
      answer.push(temp.trim());
    } else {
      // 해당 레벨에서 방문 후 1로 선언
      visits[i] = 1;
      dfs(i + 1);
      // 재귀 순휘 후 해당 레벨 방문 0 으로 선언
      visits[i] = 0;
      dfs(i + 1);
    }
  }

  dfs(1);
  return answer.join("\n");
}

solution(3);
