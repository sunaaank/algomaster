function solution(numbers) {
  let answer = new Set();
  const arr = numbers.split("");

  function combineNumber(arr, cur) {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr];
        temp.splice(i, 1);
        if (isPrime(parseInt(cur + arr[i]))) answer.add(parseInt(cur + arr[i]));
        combineNumber(temp, cur + arr[i]);
      }
    }
  }
  combineNumber(arr, "");

  return answer.size;
}

function isPrime(number) {
  let result = true;
  if (number < 2) return false;
  if (number <= 3) return result;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

solution("17");
