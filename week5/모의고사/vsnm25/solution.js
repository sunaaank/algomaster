function correct(array, answers, index, count) {
  if (index === answers.length) return count;
  else {
    if (array[index % array.length] === answers[index]) {
      count += 1;
    }
    index += 1;
    return correct(array, answers, index, count);
  }
}

function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const aCount = correct(a, answers, 0, 0);
  const bCount = correct(b, answers, 0, 0);
  const cCount = correct(c, answers, 0, 0);
  let max = -1;
  const maxCounts = [aCount, bCount, cCount].reduce((acc, cur, index) => {
    if (cur > max) {
      max = cur;
      return [index + 1];
    } else if (cur === max) {
      return acc.concat(index + 1);
    } else {
      return acc;
    }
  }, []);
  return maxCounts.sort((a, b) => a - b);
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
solution([3, 3, 2, 1, 5]);
solution([5, 5, 4, 2, 3]);
