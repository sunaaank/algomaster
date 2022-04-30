function solution(numbers, count) {
  let answer = 0;
  const store = [];
  const stack = [];

  function dfs(line) {
    if (line === count) {
      const initial =
        store.findIndex(
          (selected) => JSON.stringify(selected) === JSON.stringify(stack)
        ) < 0;
      // 중복된 조합이 아닐 경우
      if (initial) {
        answer += 1;
        store.push(stack.slice());
      }
    } else {
      for (let i = 0; i < numbers.length; i++) {
        const selected = numbers[i];
        // 이전에 이미 선택한 숫자일 경우
        if (stack.includes(selected)) continue;
        else {
          stack[line] = selected;
          dfs(line + 1);
          // 첫번째 뽑은 숫자의 조합이 모두 끝난 경우 초기화
          if (line === 0) stack.splice(0, count);
        }
      }
    }
  }

  dfs(0);
  return answer;
}

console.log(solution([3, 6, 9], 2));
