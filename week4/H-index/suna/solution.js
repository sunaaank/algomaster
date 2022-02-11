// test case...예외처리...이렇게 간단할리 없지...

function solution(citations) {
  /*
   * @citations = [h1, h2, h3 ...]
   * 발표 논문 n편 = citations.length
   * h = 논문당 인용 횟수
   */

  // citations를 돌면서 각 인자에 대해 나머지 인자보다 같거나 큰 횟수가 해당 인자값 이상인지 체크
  // 해당되는 인자 중 가장 큰 값을 return

  const sorted = citations.sort((a, b) => b - a);
  let index = 0;
  while (sorted[index] >= index + 1) {
    index++;
  }

  return index;
}
