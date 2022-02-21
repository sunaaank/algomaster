const solution = (numbers, target) => {
  //연산의 결과가 target의 값과 같은 경우의 수
  let answer = 0;
  //각 node까지의 연산결과들
  let currentNodeResult = [];
  let afterNodeResult = [];

  //currentNodeResult 배열에 numbers 배열 첫 경우의 수 추가
  currentNodeResult.push(0 + numbers[0]);
  currentNodeResult.push(0 - numbers[0]);

  //numbers 배열 순환
  for (let i = 1; i < numbers.length; i++) {
    //currentNodeResult 배열 순환
    for (let j = 0; j < currentNodeResult.length; j++) {
      //numbers 배열의 마지막 인자일 경우 currentNodeResult 배열의 모든 인자와 numbers[i] 인자 간의 +, - 연산을 실행하여 target값과 같은 경우 answer의 값 증가
      if (i === numbers.length - 1) {
        if (
          currentNodeResult[j] + numbers[i] === target ||
          currentNodeResult[j] - numbers[i] === target
        ) {
          answer++;
          continue;
        } else {
          continue;
        }
      }
      //numbers배열의 마지막 인자가 아닐 경우 currentNodeResult 모든 인자와 현재 numbers 인자와 +, - 연산을 실행하여 afterNodeResult 배열에 추가
      afterNodeResult.push(currentNodeResult[j] + numbers[i]);
      afterNodeResult.push(currentNodeResult[j] - numbers[i]);
    }
    //currentNodeResult 배열에 afterNodeResult 배열 할당, afterNodeResult 배열 초기화
    currentNodeResult = afterNodeResult;
    afterNodeResult = [];
  }
  return answer;
};
