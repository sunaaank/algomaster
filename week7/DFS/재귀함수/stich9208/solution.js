const printNum = (num) => {
  if (num < 1) return;
  else {
    printNum(num - 1);
    console.log(num);
  }
};
