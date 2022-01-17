function solution(clothes) {
  const dic = clothes.reduce((p, c) => {
    let clothesName = c[1];

    if (!p[clothesName]) {
      p[clothesName] = 1;
    } else {
      p[clothesName]++;
    }

    return p;
  }, {});

  const itemList = Object.values(dic);
  return (
    -1 +
    itemList.reduce((p, c) => {
      p = p * (c + 1);
      return p;
    }, 1)
  );
}
