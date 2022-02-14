function solution(brown, yellow) {
  const sum = brown + yellow;
  const answer = [];
  for (let i = 3; i < sum / 2; i++) {
    const remain = sum % i;
    if (remain !== 0) continue;
    const share = sum / i;
    const currentYellow = (i - 2) * (share - 2);
    const currentBrown = sum - currentYellow;
    if (currentYellow === yellow && currentBrown === brown) {
      answer.push(share, i);
      break;
    }
  }
  return answer;
}

solution(10, 2);
solution(8, 1);
solution(24, 24);
