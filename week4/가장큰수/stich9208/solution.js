const solution = (numbers) => {
  //각 인자들을 string형으로 변환하며 3번씩 반복한 값으로 치환 ex) 12 => "121212"
  //3번씩 반복한 이유는 문제에서 numbers의 인자는 1000이하의 값이라고 했기 때문에
  numbers = numbers.map((number) => String(number).repeat(3));

  //numbers배열의 string타입 인자들을 정렬
  numbers.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    return -1;
  });

  //3번 반복해줬던 인자들 다시 기존 값으로 복구
  numbers = numbers.map((number) => number.substring(0, number.length / 3));

  //numbers 배열의 인자들이 모두 0일 경우의 예외처리
  return numbers[0] === "0" ? "0" : numbers.join("");
};

//모든 인자가 0일 경우의 예외처리에서 처음은 Number, parseInt, string * 1등의 치환방법을 사용했으나 모두 실패
//이유를 찾아보니 javascript의 Number객체는 길이 제한이 있기 때문

/* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number
JavaScript Number 타입은 Java 혹은 C#의 double 타입처럼 IEEE 754 64비트 바이너리 배정 밀도 값입니다. 
즉, 분수 값을 나타낼 수 있지만 저장할 수 있는 값에는 몇 가지 제한이 있습니다. 
Number는 소수점 이하 17자리 정도만 유지하며 산술은 반올림의 대상이 됩니다. 
Number가 가질 수 있는 가장 큰 값은 1.8E308 입니다. 그보다 더 큰 값은 특별한 Number 상수인 Infinity으로 대체됩니다.*/

//형변환이 아닌 배열의 인자를 확인하여 예외처리하는 방향으로 적용
