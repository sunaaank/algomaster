function solution(begin, target, words) {
  // 거리를 찾는 거니까 bfs
  // 거리문제지 말그대로
  // bfs로 최단 거리를 구하면 됩니다
  // bfs는 가까운 거부터 봄
  // 이 문제의 관건은 이걸 어떻게 그래프로 표현할것인가
  const nodesArr = [...words, begin];
  const wordLength = begin.length;
  const nodesCount = nodesArr.length;
  const oneNodeToGraph = new Array(nodesCount).fill(0);
  const graph = [];

  nodesArr.forEach((v) => {
    graph.push(new Array(nodesCount).fill(0));
  });

  for (let i = 0; i < nodesCount - 1; i++) {
    for (let j = i + 1; j < nodesCount; j++) {
      let wordA = nodesArr[i];
      let wordB = nodesArr[j];
      let diffCount = 0;

      for (let k = 0; k < wordLength; k++) {
        if (wordA[k] !== wordB[k]) {
          diffCount += 1;
        }
      }

      if (diffCount === 1) {
        graph[i][j] = 1;
        graph[j][i] = 1;
      }
    }
  }

  const distances = new Array(nodesCount).fill(-1);
  let startIdx = nodesCount - 1;
  let endIdx = -1;

  for (let idx = 0; idx < nodesCount; idx++) {
    if (nodesArr[idx] === target) {
      endIdx = idx;
      break;
    }
  }

  if (endIdx === -1) {
    return 0;
  }

  const queue = [startIdx];
  distances[startIdx] = 0;

  while (queue.length) {
    let current = queue.pop();

    if (current === endIdx) {
      break;
    }

    for (let i = 0; i < nodesCount; i++) {
      if (distances[i] === -1 && graph[current][i]) {
        distances[i] = distances[current] + 1;
        queue.push(i);
      }
    }
  }

  if (distances[endIdx] === -1) {
    return 0;
  }

  return distances[endIdx];
}
