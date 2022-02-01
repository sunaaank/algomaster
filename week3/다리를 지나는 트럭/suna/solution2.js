function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  // onBridge =ß [[current_truck_weight, on_bridge_time]]
  let onBridge = [[0, 0]];
  let weightOnBridge = 0;

  while (onBridge.length > 0 || truck_weights.length > 0) {
    time++;
    // 다리 위 첫번째 트럭의 올라간 시간에서 다리 길이를 더한 시간이 현재 시간과 같다면
    if (onBridge[0][1] + bridge_length === time) {
      // 다리 위 첫번째 트럭을 꺼내고
      let finishedTruckWeight = onBridge.shift()[0];
      // 꺼낸 트럭의 무게를 다리 위 무게에서 빼준다
      weightOnBridge -= finishedTruckWeight;
    }

    // 트럭 대기열이 있고,
    // 다리 위 트럭의 무게 + 대기열 트럭이 올라갔을 때의 무게가 허용무게보다 크지 않으면
    if (
      truck_weights.length > 0 &&
      weightOnBridge + truck_weights[0] <= weight
    ) {
      // 트럭 대기열에서 첫번째 트럭을 꺼낸다
      let nextTruckWeight = truck_weights.shift();
      // 올라가는 트럭의 무게와 당시 시간을 트럭 위 배열에 더해준다
      onBridge.push([nextTruckWeight, time]);
      // 다리 위 트럭 무게에 올라가는 트럭 무게를 더해준다
      weightOnBridge += nextTruckWeight;
    }
  }
  return time;
}
