const solution = (array, pickNum, multipleNum) => {
  //조건에 일치하는 요소들을 확인 하기 위해 answer변수를 배열로 선언,
  //문제는 가지수를 구하기 때문에 굳이 배열로 선언해 주지 않아도 무방하다.
  //ex) answer = 0;
  let answer = [];
  let temp = Array.from({ length: pickNum }, () => 0);
  let check = Array.from({ length: array.length }, () => 0);

  const DFS = (level, total, passedIndex) => {
    if (level === pickNum) {
      if (total % multipleNum === 0) {
        //ex) answer += 1
        answer.push(temp.slice());
        return;
      }
    } else {
      for (let i = passedIndex; i < array.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[level] = array[i];
          DFS(level + 1, total + array[i], i);
          check[i] = 0;
        }
      }
    }
  };
  DFS(0, 0, 0);
  //ex) return answer
  return answer.length;
};
