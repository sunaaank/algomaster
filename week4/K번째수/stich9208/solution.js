const solution = (array, commands) => {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let startIndex = commands[i][0] - 1;
    let endIndex = commands[i][1];
    let answerIndex = commands[i][2] - 1;
    let slicedArray = array.slice(startIndex, endIndex);

    slicedArray.sort((a, b) => a - b);
    answer.push(slicedArray[answerIndex]);
  }
  return answer;
};
