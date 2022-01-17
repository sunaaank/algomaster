function solution(phone_book) {
  let temp = String(Number.MAX_SAFE_INTEGER);
  const sortList = phone_book.sort();

  for (let i = 0; i < sortList.length - 1; i++) {
    if (sortList[i].indexOf(temp) === 0) return false;
    temp = sortList[i];
  }

  return true;
}

console.log(solution(["123", "456", "789"]));
