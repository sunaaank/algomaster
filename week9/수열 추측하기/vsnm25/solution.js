function solution(n, f) {
  let answer;
  let combis = [];

  let temp = Array.from({ length: n }, () => 0);
  let group = Array.from({ length: n }, () => 0);

  function getCombis(l) {
    if (l === n) {
      combis.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (group[i] === 0) {
          temp[l] = i + 1;
          group[i] = 1;
          getCombis(l + 1);
          group[i] = 0;
        }
      }
    }
  }
  getCombis(0);

  function getCombiSum(combi) {
    let sum = 0;
    for (let i = 0; i < combi.length; i++) {
      if (i === 0 || i === combi.length - 1) {
        sum += combi[i];
      } else {
        sum += combi[i] * (n - 1);
      }
    }
    return sum;
  }
  for (let i = 0; i < combis.length; i++) {
    const combi = combis[i];
    const sum = getCombiSum(combi);
    if (sum === f) {
      answer = combi.join(" ");
      break;
    }
  }
  return answer;
}

console.log(solution(4, 16));
