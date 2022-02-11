function solution(array, commands) {
  /* commands = [[i, j, k], ...]
   * i = 배열 시작 index-1값부터: 추출포함
   * j = 배열 마지막 index-1값까지: 추출포함
   * k = i부터 j까지 원소로 이루어진 정렬된 새 배열의 리턴시킬 값 index
   */
  // commands의 원소 개수만큼 반복문을 돈다.
  // 그 반복문 안에서 각 k번째값을 찾아 return해준다
  return commands.map((arr) => {
    const [i, j, k] = arr;
    // Array.slice(startIndex:추출포함, endIndex:추출포함안함)
    const sortedNewArray = array.slice(i - 1, j).sort((a, b) => a - b);
    return sortedNewArray[k - 1];
  });
}
