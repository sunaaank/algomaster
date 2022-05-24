// const arr = [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 1],
//   [2, 3],
//   [2, 5],
//   [3, 4],
//   [4, 2],
//   [4, 5],
// ];
// const nodeNum = 5;

//arr => 경로방향 정보 배열

//nodeNum => 존재하는 노드의 개수

const navigateCount = (arr, nodeNum) => {
  //1부터 n번 node까지 가는 경우의 수
  let answer = 0;
  //방문한 node인지 아닌지 체크하는 배열
  const check = Array.from({ length: nodeNum + 1 }, () => 0);
  //방향 그래프를 나타내는 이중 배열
  // [
  //   [ 0, 0, 0, 0, 0, 0 ],
  //   [ 0, 0, 1, 1, 1, 0 ],
  //   [ 0, 1, 0, 1, 0, 1 ],
  //   [ 0, 0, 0, 0, 1, 0 ],
  //   [ 0, 0, 1, 0, 0, 1 ],
  //   [ 0, 0, 0, 0, 0, 0 ]
  // ]
  let graph = Array.from(Array(nodeNum + 1), () => Array(nodeNum + 1).fill(0));
  //가능한 경로
  let pathArray = [];

  //방향 그래프 생성
  for (let [v, h] of arr) {
    graph[v][h] = 1;
  }

  const DFS = (vIndex) => {
    if (vIndex === nodeNum) {
      answer++;
      //가능한 경로 출력
      console.log(pathArray);
    } else {
      for (let i = 1; i <= nodeNum; i++) {
        //해당 node로 이동 가능한지와 이미 방문한 node인지를 판단
        if (graph[vIndex][i] === 1 && check[i] === 0) {
          check[i] = 1;
          pathArray.push(i);
          DFS(i);
          pathArray.pop();
          check[i] = 0;
        }
      }
    }
  };

  //1부터 시작하기 때문에 처리해야하는 사전 조건
  pathArray.push(1);
  check[1] = 1;
  DFS(1);
  return answer;
};
