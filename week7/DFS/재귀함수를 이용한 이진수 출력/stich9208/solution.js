const converter = (num, answer) => {
  //몫
  let quotient = Math.floor(num / 2);
  //나머지
  let remainder = num % 2;

  answer = String(remainder) + answer;
  if (quotient === 0) return answer;
  else {
    return converter(quotient, answer);
  }
};
