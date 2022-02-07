const solution = (citations) => {
  //인자로 받은 배열 정렬
  citations = citations.sort((a, b) => a - b);

  //배열의 최솟값이 배열의 길이보다 크거나 같다면 배열의 길이를 반환
  if (citations[0] >= citations.length) {
    return citations.length;
  }

  //베열의 마지막 index부터 순회
  let hIndex = citations.length - 1;
  //현재 hIndex에 해당하는 값(h)이 h이상 존재하지 않을 경우 hIndex의 값 1씩 감소
  while (citations[hIndex] > citations.length - hIndex) {
    hIndex--;
  }

  return citations.length - hIndex - 1;
};

//h값은 citations배열내에 존재하지 않을 수도 있다.
