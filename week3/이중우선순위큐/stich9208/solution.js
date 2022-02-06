const solution = (operations) => {
  let answer = [];

  const parentIndex = (index) => {
    return Math.floor((index - 1) / 2);
  };

  const leftChildIndex = (index) => {
    return index * 2 + 1;
  };

  const rightChildIndex = (index) => {
    return index * 2 + 2;
  };

  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };

  const delMin = (array) => {
    let leafCount = Math.ceil(array.length / 2);
    let minNum = array[0];
    let minIndex = 0;
    for (let i = array.length - leafCount; i < array.length; i++) {
      if (array[i] < minNum) {
        minNum = array[i];
        minIndex = i;
      }
    }
    array.splice(minIndex, 1);
  };

  const delMax = (array) => {
    array.shift();
  };

  const insert = (array, elem) => {
    array.push(elem);
    if (array.length === 1) {
      return;
    }
    let index = array.length - 1;
    while (
      array[parentIndex(index)] &&
      array[parentIndex(index)] < array[index]
    ) {
      swap(array, parentIndex(index), index);
      index = parentIndex(index);
    }
  };

  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i].split(" ");
    console.log(answer);
    console.log(operation);
    switch (operation[0]) {
      case "I":
        insert(answer, Number(operation[1]));
        break;
      case "D":
        if (answer.length <= 1) {
          answer.pop();
          break;
        }
        Number(operation[1]) < 0 ? delMin(answer) : delMax(answer);
        break;
    }
  }
  return answer.length === 0 ? [0, 0] : [answer[0], Math.min(...answer)];
};
