const solution = (priorities, location) => {
  //출력 횟수
  let count = 1;
  while (priorities.length !== 0) {
    //리스트내 가장 큰 숫자의 인덱스
    let bigIndex = priorities.indexOf(Math.max(...priorities));
    //location과 bigIndex가 같을 경우 바로 count값 return
    if (location === bigIndex) {
      return count;
    }
    let length = priorities.length;
    //배열의 첫 인자부터 bigIndex앞의 인자까지 배열을 자른다
    let moveBackArray = priorities.splice(
      0,
      priorities.indexOf(Math.max(...priorities))
    );
    //자른 배열을 뒤로 붙임
    priorities = [...priorities, ...moveBackArray];
    //배열의 변경에 따른 location 변수의 변경
    location < bigIndex
      ? (location += length - bigIndex)
      : (location -= bigIndex);
    //변경된 배열에서 가장 앞의 인자(가장 큰 값을 가진 인자)제거
    priorities.shift();
    //배열의 길이가 줄었으므로 location도 1 줄어듬
    location -= 1;
    //가장 큰 수가 하나 출력됬으므로 count 증가
    count++;
  }
};
