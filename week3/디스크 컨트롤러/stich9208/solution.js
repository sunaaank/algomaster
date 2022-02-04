function solution(jobs) {
  //변수 part
  //모든 작업을 마치는데 걸린 시간(각 작업을 마칠때마다 증가시켜준다)
  let totalSec = 0;
  //각각의 작업들이 요청 시작부터 마칠때까지의 걸린 시간의 합
  let eachSecSum = 0;
  //타임라인
  let time = 0;
  //우선순위 큐 배열
  let eventQueue = [];
  const length = jobs.length;
  const remainingTimeKey = 1;

  //힙 메서드 선언 part
  //이진 트리에서 부모의 인덱스를 구하는 메서드
  const parentIndex = (index) => {
    return Math.floor((index - 1) / 2);
  };

  //이진 트리에서 왼쪽 자식의 인덱스를 구하는 메서드
  const leftChildIndex = (index) => {
    return index * 2 + 1;
  };

  //이진 트리에서 오른쪽 자식의 인덱스를 구하는 메서드
  const rightChildIndex = (index) => {
    return index * 2 + 2;
  };

  //인자로 받은 배열내에서 선택한 두 index의 값을 서로 바꾼다
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };

  //이진트리의 root node부터 차례로 자식들을 비교해가며 최소값을 root node로 위치하도록 하는 메서드
  const bubbleDown = (array, keyIndex) => {
    let index = 0;
    if (!array[leftChildIndex(index)]) {
      return;
    } else {
      if (!array[rightChildIndex(index)]) {
        if (array[index][keyIndex] <= array[leftChildIndex(index)][keyIndex]) {
          return;
        } else {
          swap(array, index, leftChildIndex(index));
          return;
        }
      }
    }
    while (array[leftChildIndex(index)]) {
      let smallerIndex;
      if (
        array[rightChildIndex(index)] &&
        array[leftChildIndex(index)][keyIndex] < array[index][keyIndex]
      ) {
        smallerIndex =
          array[leftChildIndex(index)][keyIndex] <
          array[rightChildIndex(index)][keyIndex]
            ? leftChildIndex(index)
            : rightChildIndex(index);
      } else {
        if (
          array[rightChildIndex(index)] &&
          array[rightChildIndex(index)][keyIndex] < array[index][keyIndex]
        ) {
          smallerIndex = rightChildIndex(index);
        } else {
          break;
        }
      }
      swap(array, smallerIndex, index);
      index = smallerIndex;
    }
  };

  //이진트리의 leaf부터 차례로 부모를 비교해가며 최소값을 root node로 위치하도록 하는 메서드
  const bubbleUp = (array, keyIndex) => {
    if (array.length > 1) {
      let index = array.length - 1;
      while (
        array[parentIndex(index)] &&
        array[parentIndex(index)][keyIndex] > array[index][keyIndex]
      ) {
        swap(array, parentIndex(index), index);
        index = parentIndex(index);
      }
    }
  };

  //heap 배열내에 존재하는 최소값을 제거 후 최솟값이 root node에 오도록 정렬
  const pull = (array, keyIndex) => {
    let elem;
    if (array.length >= 2) {
      swap(array, 0, array.length - 1);
      elem = array.pop();
      bubbleDown(array, keyIndex);
    } else {
      elem = array.pop();
    }
    return elem;
  };

  //heap 배열에 새로운 인자를 추가 후 최솟값이 root node에 오도록 정렬
  const add = (array, elem, keyIndex) => {
    array.push(elem);
    bubbleUp(array, keyIndex);
  };

  //로직 part
  //초기 주어진 jobs 배열을 작업 요청 시점 순대로 나열
  jobs.sort((a, b) => a[0] - b[0]);

  while (!(jobs.length === 0 && eventQueue.length === 0)) {
    //jobs 배열을 순회하며 배열내 첫번째 인자의 작업 요청 시점이 현재 진행중인 타임라인과 일치할 경우 해당 작업을 jobs배열에서 제거하는 동시에 이벤트 큐에 추가
    while (jobs.length !== 0) {
      if (jobs[0][0] === time) {
        add(eventQueue, jobs.shift(), remainingTimeKey);
      } else {
        break;
      }
    }
    //현재 타임라인이 바로 이전의 작업을 마치고 난 후의 시간과 동일하거나 더 클 경우 이벤트 큐에서 작업에 걸리는 시간(remainingTime)이 가장 작은 작업을 실행
    if (eventQueue.length !== 0 && time >= totalSec) {
      let doneJob = pull(eventQueue, remainingTimeKey);
      totalSec = doneJob[1] + time;
      eachSecSum += totalSec - doneJob[0];
    }
    //매번 time의 값을 1씩 증가
    time++;
  }
  //각 작업의 평균값 반환
  return Math.floor(eachSecSum / length);
}
