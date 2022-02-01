function solution(jobs) {
  // 현재 시간, 요청시간으로부터 걸린 작업시간들의 합, 우서순위 큐, 작업 갯수
  let time = 0;
  let time_from_request = 0;
  const priority = [];
  const jobs_length = jobs.length;
  jobs.sort((a, b) => a[0] - b[0]);

  while (jobs.length > 0) {
    for (let j = 0; j < jobs.length; j++) {
      // 요청시점이 현재 시간보다 작거나 같을 경우 우선순위 큐에 포함
      if (jobs[j][0] <= time) priority.push(jobs[j]);
      else {
        // 우선순위 큐에 포함된 작업 없을 경우 현재 인덱스의 작업 요청시점으로 이동
        if (priority.length === 0) {
          time = jobs[j][0];
          priority.push(jobs[j]);
          continue;
        } else break;
      }
    }
    // 우선순위 큐에 담긴 작업목록을 작업시간을 기준으로 오름차순 정렬
    priority.sort((a, b) => a[1] - b[1]);
    const min_time_work = priority[0];
    // 최소 작업시간 작업 진행
    time += min_time_work[1];
    time_from_request += time - min_time_work[0];

    //우선순위 큐 초기화, 진행한 작업 목록에서 제외
    priority.length = 0;
    jobs.splice(jobs.indexOf(min_time_work), 1);
  }
  return Math.floor(time_from_request / jobs_length);
}

solution(
  [
    [0, 3],
    [1, 9],
    [2, 6],
  ],
  9
);
