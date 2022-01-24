function solution(progresses, speeds) {
  const answer = [];
  while (progresses.length > 0) {
    // 배열을 순회하며 개발속도를 더한다.
    progresses = progresses.map((progress, index) => progress + speeds[index]);
    if (progresses[0] >= 100) {
      let count = 0;
      // 100 이상인 진도들은 빼주며 카운트
      while (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        ++count;
      }
      answer.push(count);
    }
  }
  return answer;
}
