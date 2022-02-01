function solution(bridge_length, weight, truck_weights) {
  // 시간, 다리 위 트럭 무게합, 현재 다리 상황, 현재 진입 트럭
  let time = 0;
  let current_truck_weights = 0;
  const queue = Array(bridge_length).fill(0);

  while (true) {
    // 현재 나오는 요소, 현재 진입할 트럭
    const current_out = queue.shift();
    const current_truck = truck_weights.shift();

    // 현재 나오는 요소가 트럭일 경우 다리 위 트럭 무게합에서 제외
    if (current_out > 0) current_truck_weights -= current_out;
    // 진입하려는 트럭과 현재 다리 위 트럭 무게합이 weight보다 작을 경우 트럭 추가 진입
    if (current_truck_weights + current_truck <= weight) {
      current_truck_weights += current_truck;
      queue.push(current_truck);
    } else {
      // 아닐 경우 다리 트럭 배열 제일 앞으로 재이동 후 빈 공간 0 추가
      truck_weights.unshift(current_truck);
      queue.push(0);
    }
    time += 1;

    // 모든 트럭이 진입한 경우 현재 걸린 시간과 다리 길이의 합을 반환
    if (truck_weights.length === 0) {
      time += bridge_length;
      break;
    }
  }
  return time;
}

solution(100, 100, [10]);
