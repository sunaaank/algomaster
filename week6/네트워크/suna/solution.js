function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let count = 0;
  const queue = [];

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count += 1;
      queue.push(i);
      visited[i] = true;

      while (queue.length) {
        const current = queue.shift();
        for (let j = 0; j < n; j++) {
          if (!visited[j] && computers[current][j] === 1) {
            visited[j] = true;
            queue.push(j);
          }
        }
      }
    }
  }

  return count;
}
