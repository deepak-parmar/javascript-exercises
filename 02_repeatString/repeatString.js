const repeatString = function (inputString, times) {
  if (times < 0) return "ERROR";

  let outputString = '';
  for (let i = 0; i < times; i++) {
    outputString += inputString;
  }

  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
