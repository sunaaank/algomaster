const traversal = (num) => {
  if (num > 7) return;

  let lChild = num * 2;
  let rChild = num * 2 + 1;

  //순서에 따라 전위, 중위, 후위 출력 설정가능
  console.log(num);
  traversal(lChild);
  traversal(rChild);
};
