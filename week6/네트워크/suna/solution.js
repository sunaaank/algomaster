function solution(n, computers) {
  // 섬나라 개수를 찾는 문제와 동일함
  // 체크한 컴퓨터를 구별하기 위한 용도로, visited 배열을 만들어준다. (boolean 또는 0/1로 표현 가능)
  const visited = new Array(n).fill(false);
  // count: 네트워크의 개수
  let count = 0;
  const queue = [];

  // 컴퓨터를 하나씩 탐색함
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 해당 컴퓨터가 체크한 적 없는 컴퓨터라면, 네트워크 대수를 추가하고,
      count += 1;
      // 그 컴퓨터와 연결된 다른 컴퓨터를 체크하기 위해 컴퓨터 인덱스를 queue에 넣어준다.
      queue.push(i);
      // 해당 컴퓨터는 체크했다고 표시해준다.
      visited[i] = true;

      // 체크한 컴퓨터와 연결되어있는 컴퓨터가 있는지 확인하는 과정을 해준다.
      // 연결된 컴퓨터를 모두 체크했다면 큐에는 남아있는 컴퓨터가 없을 것이기 때문에 반복문이 종료된다.
      while (queue.length) {
        // current: 가장 최근에 체크한 컴퓨다
        const current = queue.shift();
        for (let j = 0; j < n; j++) {
          // 컴퓨터를 하나씩 탐색하며, 아직 체크하지 않은 컴퓨터이고, 가장 최근에 체크한 컴퓨터와 연결되어 있다면
          if (!visited[j] && computers[current][j] === 1) {
            // 해당 컴퓨터와 연결된 다른 컴퓨터가 있는지 확인하기 위해 큐에 넣어준다.
            queue.push(j);
            // 해당 컴퓨터는 체크완료했다고 표시해준다.
            visited[j] = true;
          }
        }
      }
    }
  }

  // 발견한 네트워크의 대수를 리턴해준다.
  return count;
}
