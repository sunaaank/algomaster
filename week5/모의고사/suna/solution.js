function solution(answers) {
  // 수포자 삼인방정보를 담은 배열을 만들어준다.
  const members = [
    { pattern: [1, 2, 3, 4, 5], count: 0 },
    { pattern: [2, 1, 2, 3, 2, 4, 2, 5], count: 0 },
    { pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], count: 0 },
  ];

  // 수포자삼인방의 시험결과를 순서대로 맞춰본다.
  members.forEach((member, index) => {
    answers.forEach((v, i) => {
      // 수포자한명의 패턴과 정답을 하나하나 맞춰본다.
      let pickPatternLength = member.pattern.length;
      if (member.pattern[i % pickPatternLength] === v) members[index].count++;
    });
  });

  // 수포자 삼인방의 점수를 담은 배열을 만들고 그 중 가장 큰 값을 구해준다.
  const membersCount = members.map((v) => v.count);
  const maxCorrectCount = Math.max(...membersCount);
  // 가장 높은 점수를 획득한 수포자를 찾아 리턴해준다.
  const filteredWinMembers = membersCount.reduce((p, c, i) => {
    if (c === maxCorrectCount) {
      p.push(i + 1);
    }

    return p;
  }, []);
  return filteredWinMembers;
}
