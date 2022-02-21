function solution(numbers, target) {
  let v = 0;
  let result = 0;
  const numLength = numbers.length;

  return DFS(1, numLength, target, v, result, numbers);
}

function DFS(x, numLength, target, v, result, numbers) {
  if (x > Math.pow(2, numLength + 1) - 1) return result;
  else {
    if (x % 2 == 0) v += numbers[Math.floor(Math.log2(x)) - 1];
    else if (x % 2 == 1 && x != 1) v -= numbers[Math.floor(Math.log2(x)) - 1];

    if (x > Math.pow(2, numLength) && target == v) {
      result++;
      console.log(v, x);
    }

    result = DFS(x * 2, numLength, target, v, result, numbers);
    result = DFS(x * 2 + 1, numLength, target, v, result, numbers);
  }
  return result;
}
