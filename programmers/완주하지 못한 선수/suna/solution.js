function solution(participant, completion) {
  // 참여자를 순서대로 정렬한다
  participant.sort();
  // 완주자를 순서대로 정렬한다
  completion.sort();
  // 참여자의 수만큼 순회를 돈다. 정렬된 참여자와 완주자 배열에서 같은 인덱스 값에 다른 값이 들어있으면 참여자 배열의 해당 인자를 return해준다.
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
