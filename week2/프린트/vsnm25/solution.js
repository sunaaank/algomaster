function solution(priorities, location) {
  let order = 0;
  while (true) {
    // 첫번째 문서 최대값 확인
    const flag = priorities.shift();
    const isMax = flag >= Math.max.apply(null, priorities);
    // 최대값이고 내 인쇄이면 종료
    // 아니면 다시 배열로 push
    if (isMax) {
      order += 1;
      if (location === 0) break;
    } else {
      priorities.push(flag);
    }
    // 제일 앞이면 뒤로 이동 아니면 한칸 앞으로 이동
    location = location > 0 ? location - 1 : priorities.length - 1;
  }
  return order;
}
