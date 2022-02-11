function solution(numbers) {
  /*
   * @numbers:Number[] = [0 또는 양의 정수...]
   * return v:String = 순서를 재배치하여 만들 수 있는 가장 큰 수 문자열
   */
  const stringfiedNums = numbers.map((v) => String(v));
  const sortedArr = stringfiedNums.sort((a, b) => b + a - (a + b));
  let result = "";
  sortedArr.forEach((v) => {
    if (v) result += v;
  });

  return result != 0 ? result : "0";
}

console.log(solution([6, 10, 2, 000]));
