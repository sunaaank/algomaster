const solution = (participant, completion) => {
  let answer;

  //새로운 map구조 변수 선언
  let mapList = new Map();

  //인자로 받은 participant배열을 map구조로 변경
  for (let item of participant) {
    //해당 key(item)값이 존재할 경우 기존 key값에 해당하는 value + 1 실행
    //해당 key(item)값이 존재하지 않을 경우 새로운 key값과 value를 할당
    mapList.has(item)
      ? mapList.set(item, mapList.get(item) + 1)
      : mapList.set(item, 1);
  }

  //map 구조로 변경한 participant와 completion 배열을 비교
  for (let item of completion) {
    //completion내 존재하는 인자(item)와 일치하는 key값의 value가 1일 경우 해당 key 삭제
    //1이 아닐 경우 -1 실행
    mapList.get(item) === 1
      ? mapList.delete(item)
      : mapList.set(item, mapList.get(item) - 1);
  }

  // participant 배열을 변경한 map구조를 순회하며 남은 key값 반환
  for (let [key, value] of mapList) {
    answer = key;
  }
  return answer;
};
