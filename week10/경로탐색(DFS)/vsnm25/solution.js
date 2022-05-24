function solution() {
  let visited = Array.from({ length: n + 1 });
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let path = [];
  let cnt = 0;

  for (let [a, b] of arr) graph[a][b] = 1;

  function DFS(v) {
    if (v === n) {
      console.log(path);
      cnt++; // 경로의 가짓 수 출력
    } else {
      for (let i = 1; i <= n; i++) {
        if (!visited[i] && graph[v][i]) {
          visited[i] = 1;
          path.push(i);
          DFS(i);
          visited[i] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  visited[1] = 1;
  DFS(1);
  return cnt;
}
