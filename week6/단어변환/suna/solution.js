function solution(begin, target, words) {
  // 거리를 찾는 거니까 bfs
  // bfs로 최단 거리를 구하기
  // bfs는 가까운 노드부터 탐색함
  // 이 문제의 관건은 이걸 어떻게 그래프로 표현할것인가

  // 시작단어를 포함하여 사용할 노드들을 담은 배열을 만든다
  const nodesArr = [...words, begin];
  const nodesCount = nodesArr.length;

  // 단어의 글자수를 체크한다(모든 단어의 글자수는 같다)
  const wordLength = begin.length;

  // 각 노드의 연결관계를 그래프로 표현하기 위해 2차원 배열로 된 그래프를 만든다.
  // 각 연결망은 0으로 초기화해둔다.
  // ex) nodesCount가 3이라면, graph의 초기화 상태는 [[0,0,0], [0,0,0], [0,0,0]]
  const graph = [];
  nodesArr.forEach((v) => {
    graph.push(new Array(nodesCount).fill(0));
  });

  // node를 두쌍씩 돌며 각 쌍이 몇글자의 차이가 있는지를 확인한다.(조건1: 단어는 1글자의 차이만 있어야 다른 단어로 변환될 수 있다.)
  for (let i = 0; i < nodesCount - 1; i++) {
    for (let j = i + 1; j < nodesCount; j++) {
      let wordA = nodesArr[i];
      let wordB = nodesArr[j];
      let diffCount = 0;

      // 두개의 단어의 동일한 자리에 있는 글자가 같은지 체크하고, 같지 않으면 diffCount를 올려준다.
      for (let k = 0; k < wordLength; k++) {
        if (wordA[k] !== wordB[k]) {
          diffCount += 1;
        }
      }

      // 두개의 단어의 글자 차이가 1개라면, 두 단어 사이의 관계를 변환될 수 있는 것으로 보고 그래프를 연결해준다.
      if (diffCount === 1) {
        graph[i][j] = 1;
        graph[j][i] = 1;
      }
    }
  }

  // 이제 노드들의 최단 거리를 구해보자
  const distances = new Array(nodesCount).fill(-1);
  // nodesArr의 마지막에 start 단어를 넣었으니, startIdx는 마지막 인덱스로 잡아준다.
  let startIdx = nodesCount - 1;
  // 타겟 인덱스를 찾기 전이므로 없는 인덱스값(-1)를 넣어준다.
  let endIdx = -1;

  // 노드를 하나씩 돌면서, 타겟 단어를 찾아 endIdx를 잡아준다.
  for (let idx = 0; idx < nodesCount; idx++) {
    if (nodesArr[idx] === target) {
      endIdx = idx;
      break;
    }
  }

  // 만약 타겟 대상이 words에 포함되어있지 않으면, 변환할 수 없으므로 0을 리턴한다.(조건2: words에 있는 단어로만 변환할 수 있다.)
  if (endIdx === -1) {
    return 0;
  }

  // 시작노드부터 연결된 노드들을 탐색하기 위한 큐를 만들어준다.
  const queue = [startIdx];
  // 시작노드는 출발점이기 때문에 거리는 0이다.
  distances[startIdx] = 0;

  while (queue.length) {
    // 큐의 뒤에 들어있는 인덱스 부터 하나씩 꺼낸다.
    let current = queue.pop();
    // 만약 지금 큐에 있는 인덱스(시작인덱스)가 타겟인덱스와 같다면 종료한다.
    if (current === endIdx) {
      break;
    }

    for (let i = 0; i < nodesCount; i++) {
      // 노드를 하나씩 돌면서, 아직 탐색하지 않은 노드(거리가 -1)이고, 현재 노드와의 관계가 있으면
      if (distances[i] === -1 && graph[current][i]) {
        // 탐색한 노드에는 이전까지의 거리에 1을 더한 값을 저장한다.
        distances[i] = distances[current] + 1;
        // 탐색한 노드에 이어진 노드를 탐색하기 위해 현재 노드인덱스를 큐에 넣는다.
        queue.push(i);
      }
    }
  }

  // 만약 타겟 인덱스에 도달하지 못했다면 0을 리턴해준다.
  if (distances[endIdx] === -1) {
    return 0;
  }

  // 타겟인덱스에 도달했을 때의 거리를 리턴해준다.
  return distances[endIdx];
}
