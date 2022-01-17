function solution(phone_book) {
  let answer = true;
  for (let i = 0; i < phone_book.length; i++) {
    for (let j = i + 1; j < phone_book.length; j++) {
      if (phone_book[j].includes(phone_book[i])) {
        answer = false;
        break;
      }
    }
    if (!answer) break;
  }
  return answer;
}
