const solution = (answers) => {
  //변수 선언 part
  //수포자 1, 2, 3
  let sp1 = [1, 2, 3, 4, 5];
  let sp2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let sp3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  //정답수를 기록할 배열
  let eachCount = [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ];
  let answer = [];

  //answers 배열을 순회하며 정답일 경우 각 객체의 count값 증가
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === sp1[i % sp1.length]) {
      eachCount[0].count++;
    }
    if (answers[i] === sp2[i % sp2.length]) {
      eachCount[1].count++;
    }
    if (answers[i] === sp3[i % sp3.length]) {
      eachCount[2].count++;
    }
  }

  //정답수가 많은 순서대로 정렬
  eachCount.sort((a, b) => b.count - a.count);
  //max값의 index answer배열에 추가
  answer.push(eachCount[0].id);

  //eachCount 배열을 순회하며 max값과 같을 경우 아이디를 answer 배열에 추가
  let i = 1;
  while (i < 3) {
    if (eachCount[0].count !== eachCount[i].count) break;
    answer.push(eachCount[i].id);
    i++;
  }
  return answer;
};

//eachCount 배열이 이미 아이디값의 오름차순으로 초기화 되어있다 => 따로 answer 배열 정렬 불필요
