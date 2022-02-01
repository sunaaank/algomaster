function solution(jobs) {
  let answer = 0;
  let eachSecSum = 0;
  let totalSec = 0;
  let time = 0;
  const length = jobs.length;
  const startTimeKey = 0;
  const remainingTimeKey = 1;
  let eventQueue = [];

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
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  const bubbleDown = (array, keyIndex) => {
    let index = 0;
    while (
      array[leftChildIndex(index)] &&
      array[leftChildIndex(index)][keyIndex] < array[index][keyIndex]
    ) {
      let smallerIndex = leftChildIndex(index);
      if (
        array[rightChildIndex(index)] &&
        array[rightChildIndex(index)][keyIndex] < array[smallerIndex][keyIndex]
      ) {
        smallerIndex = rightChildIndex(index);
      }
      swap(array, smallerIndex, index);
      index = smallerIndex;
    }
  };

  const bubbleUp = (array, keyIndex) => {
    let index = array.length - 1;
    while (
      array[parentIndex(index)] &&
      array[parentIndex(index)][keyIndex] > array[index][keyIndex]
    ) {
      swap(array, parentIndex(index), index);
      index = parentIndex(index);
    }
  };

  const pull = (array, keyIndex) => {
    const elem = array.shift();
    bubbleDown(array, keyIndex);
    return elem;
  };

  const add = (array, elem, keyIndex) => {
    array.push(elem);
    bubbleUp(array, keyIndex);
  };

  bubbleUp(jobs, startTimeKey);

  while (jobs.length !== 0 || eventQueue.length !== 0) {
    if (jobs.length !== 0 && totalSec >= jobs[0][0]) {
      add(eventQueue, pull(jobs, startTimeKey), remainingTimeKey);
      continue;
    }
    if (eventQueue.length !== 0) {
      let doneJob = pull(eventQueue, remainingTimeKey);
      eachSecSum += totalSec + doneJob[1] - doneJob[0];
      totalSec += doneJob[1];
    } else {
      totalSec += jobs[0][1];
    }
  }
  answer = eachSecSum / length;
  return answer;
}
