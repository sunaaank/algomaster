// 주어진 리스트를 카테고리별로 map구조로 변환 후 반환해주는 함수
const makeMapObj = (list) => {
  let clothesMap = new Map();
  for (const elem of list) {
    const category = elem[1];
    //해당 map구조내에 category와 동일한 key가 존재한다면 해당 value를 +1해주고 존재하지 않을 경우 새로운 key값을 할당하고 해당 key의 value를 2로 할당해준다.
    clothesMap.has(category)
      ? clothesMap.set(category, clothesMap.get(category) + 1)
      : clothesMap.set(category, 2);
  }
  return clothesMap;
};

//전달받은 map객체를 통해 경우의 수를 반환하는 함수
const solution = (clothes) => {
  let answer = 1;
  const clothesMap = makeMapObj(clothes);
  for (const value of clothesMap.values()) {
    answer = answer * value;
  }
  //옷을 하나도 입지 않았을 경우를 제거
  return answer - 1;
};
