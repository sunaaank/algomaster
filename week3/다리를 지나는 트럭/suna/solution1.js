function solution(bridge_length, weight, truck_weights) {
  // 첫번째 트럭을 다리 위로 올리고 시작함(1칸 이동)
  let turns = 1;
  // 다리를 건넌 트럭
  const end = [];
  // 다리를 건너는 중 트럭
  let on = [truck_weights[0]];
  // 건너기 전 대기중 트럭
  let left = truck_weights.slice(1);
  let on_length = 1;

  while (truck_weights.length !== end.length) {
    turns += 1;
    let ready = left[0];

    if (turns > bridge_length) {
      if (on[0]) end.push(on[0]);
      on.shift();
      if (on[0]) on_length -= 1;
    }

    if (bridge_length - on_length >= 1 && sum([...on, ready]) <= weight) {
      on.push(ready);
      on_length += 1;
      left.shift();
    } else {
      on.push(0);
    }
  }

  return turns;
}

console.log(
  "result",
  solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
);

function sum(arr) {
  return arr.reduce((p, c) => {
    p += c;
    return p;
  }, 0);
}
