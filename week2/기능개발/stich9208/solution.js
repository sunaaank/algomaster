//maxDays의 값을 반환하는 함수
const setMaxDays = (index, progressArray, speedArray) => {
  return Math.ceil((100 - progressArray[index]) / speedArray[index]);
};

const solution = (progresses, speeds) => {
  //전역 변수 초기화
  let answer = [];
  let funcCount = 1;
  let maxDays = setMaxDays(0, progresses, speeds);
  for (let i = 1; i < progresses.length; i++) {
    const currentDays = setMaxDays(i, progresses, speeds);
    //maxDays보다 걸리는 기간이 적을 경우
    if (maxDays >= currentDays) {
      funcCount++;
      //maxDays보다 걸리는 기간이 클 경우
    } else {
      answer.push(funcCount);
      funcCount = 1;
      maxDays = currentDays;
    }
    //작업목록의 마지막 인자일 경우
    if (i === progresses.length - 1) {
      answer.push(funcCount);
    }
  }
  return answer;
};
