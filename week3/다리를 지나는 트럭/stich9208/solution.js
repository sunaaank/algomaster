const solution = (bridge_length, weight, truck_weights) => {
  //변수 part
  //경과 시간 변수 선언
  let sec = 0;
  //인자로 받은 다리의 길이 만큼의 배열 생성후 모든 인자를 0으로 할당 => 다리를 건너는 중인 트럭의 상태를 반영하게 될 배열
  let bridgeArray = new Array(bridge_length).fill(0);

  //배열내 모든 값의 합을 구하는 함수 getSum 선언
  const getSum = (array) => {
    return array.reduce((a, b) => (a += b));
  };

  //로직 part
  //위에서 선언한 bridgeArray배열의 길이가 0이 아닐 경우 계속 순회 => bridgeArray의 길이가 0이 될 경우 모든 트럭이 다리를 건넜다는 의미
  while (bridgeArray.length !== 0) {
    //truck_weights 배열의 길이가 0이 되었을 경우 => 트럭들이 모두 다리를 건너거나 건너는 중일 경우
    if (truck_weights.length === 0) {
      //다리를 건너는 중인 트럭을 하나씩 제거 하며 경과시간 증가
      bridgeArray.shift();
      sec++;
      //아직 출발하지 않은 트럭이 존재할 경우
    } else {
      //다리 내 존재하는 트럭을 먼저 한칸씩 이동
      bridgeArray.shift();
      //다음 건너올 트럭의 무게외 다리내에 존재하는 트럭들의 무게가 다리가 지탱할 수 있는 무게보다 적거나 같을 경우
      if (getSum(bridgeArray) + truck_weights[0] <= weight) {
        //truck_weights 배열의 첫번째인자를 제거하는 동시에 제거한 인자를 bridgeArray내 마지막 인자로 추가, 경과시간 증가 => 트럭이 출발하여 다리로 진입
        bridgeArray.push(truck_weights.shift());
        sec++;
        //다음 건너올 트럭의 무게외 다리내에 존재하는 트럭들의 무게가 다리가 지탱할 수 있는 무게보다 클 경우
      } else {
        //새로 진입하는 트럭없이 다리내에 존재하는 트럭들만 한칸 이동하였다, 경과시간 증가
        bridgeArray.push(0);
        sec++;
      }
    }
  }
  return sec;
};
