const solution = (numbers) => {
  let answer = 0;
  let numberArray = numbers.split("");

  //소수 체크하는 함수
  const checkPrimeNum = (num) => {
    let i = 2;
    if (num <= 1) {
      return false;
    }
    while (i < num) {
      if (num % i === 0) return false;
      i++;
    }
    return true;
  };

  for (let i = 0; i < numberArray.length; i++) {
    if (checkPrimeNum(Number(numberArray[i]))) {
      answer++;
    }
    for (let j = 0; j < numberArray.length; j++) {
      if (j === i) {
        continue;
      }
      if (checkPrimeNum(Number(numberArray[i] + numberArray[j]))) {
        answer++;
      }
    }
  }
  return answer;
};
