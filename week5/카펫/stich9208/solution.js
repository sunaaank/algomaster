const solution = (brown, yellow) => {
  //yellow의 값은 최소 1 이상이기에 horizontal과 vertical의 값은 최소 3이상 되어야 한다 (do문에서 h++를 시켜주기 때문에 2로 초기화)
  let h = 2;
  let v;

  //brown의 값을 구하는 함수
  const getBrown = (h, v) => {
    return h * 2 + (v - 2) * 2;
  };

  //yellow의 값을 구하는 함수
  const getYellow = (h, v) => {
    return (h - 2) * (v - 2);
  };

  //horizontal의 값이 높아야 하기에 h의 값을 하나씩 높여주며 v와 비교하며 순회
  do {
    h++;
    v = (brown + yellow) / h;
  } while (getBrown(h, v) !== brown || getYellow(h, v) !== yellow || v > h);
  return [h, v];
};
