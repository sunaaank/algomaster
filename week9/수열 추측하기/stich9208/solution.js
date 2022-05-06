const solution = (num, final) => {
  let combinations = [];
  let temp = Array.from({ length: num }, () => 0);
  let check = Array.from({ length: num }, () => 0);

  //functions
  //1부터 num까지의 자연수를 이용하여 조합 가능한 모든 수열을 구하는 함수 [combinations 배열]
  const getCombinations = (level) => {
    if (level === num) {
      combinations.push(temp.slice());
    } else {
      for (let i = 0; i < num; i++) {
        if (check[i] === 0) {
          temp[level] = i + 1;
          check[i] = 1;
          getCombinations(level + 1);
          check[i] = 0;
        }
      }
    }
  };

  //각 combination 배열내 인자들(배열)내 존재하는 요소들을 이용하여 파스칼 삼각형을 통해 합을 구하는 함수
  const getSum = (temp) => {
    if (temp.length === 1) {
      //최종 합 (파스칼 삼각형의 가장아래 꼭지점)
      return temp[0];
    } else {
      let tempTemp = [];
      for (let i = 1; i < temp.length; i++) {
        tempTemp[i - 1] = temp[i - 1] + temp[i];
      }
      return getSum(tempTemp);
    }
  };

  //logics
  //combinations배열 완성
  getCombinations(0);

  //combinations 배열을 순회하며 합이 주어진 final 변수와 같을 경우 해당 배열 반환
  for (let i = 0; i < combinations.length; i++) {
    let array = combinations[i];
    let sum = getSum(array);
    if (sum === final) return combinations[i].join(",");
  }
};
