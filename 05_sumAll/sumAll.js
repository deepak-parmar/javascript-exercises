const sumAll = function (startingNum, endingNum) {
  if (
    typeof startingNum != "number" ||
    typeof endingNum != "number" ||
    startingNum < 0 ||
    endingNum < 0
  )
    return "ERROR";

  // swap values of endingNum is smaller than startinNum
  if (endingNum < startingNum)
    [startingNum, endingNum] = [endingNum, startingNum];

  let sum = 0;
  for (let n = startingNum; n <= endingNum; n++)
    sum += n;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
