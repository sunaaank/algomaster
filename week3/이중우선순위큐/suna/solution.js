function solution(operations) {
  let qu = [];
  for (let x of operations) {
    if (x.startsWith("D")) {
      let number = x.slice(2);
      let sliceIndex;
      if (number > 0) {
        sliceIndex = qu.indexOf(Math.max(...qu));
      } else {
        sliceIndex = qu.indexOf(Math.min(...qu));
      }
      if (qu.length > 0) qu.splice(sliceIndex, 1);
    } else {
      let number = Number(x.slice(2));
      qu.push(number);
    }
  }

  return qu.length > 0 ? [Math.max(...qu), Math.min(...qu)] : [0, 0];
}
