const removeFromArray = function (inputArray, ...args) {
  const outputArray = [];

  inputArray.forEach(element => {
    if (!args.includes(element)) outputArray.push(element);
  });

  return outputArray;
};

// ALTERNATIVE LOOOOONG SOLUTION
/*

const removeFromArray = function (inputArray, ...args) {
  args = args.reverse();

  // extract numeric arguments
  const numArgs = args.filter((arg) => {
    if (!isNaN(arg) && typeof arg == 'number')
      return arg
  });

  // sort in descending order, maximum argument should be removed first
  numArgs.sort((a, b) => {
    if (b < a) return -1;
    if (b > a) return 1;
    return 0;
  });

  // extract string arguments
  const strArgs = args.filter((arg) => isNaN(arg));

  // Remove numeric arguments first
  if (numArgs.length >= 0) {
    numArgs.forEach((arg) => {
      inputArray.splice(arg - 1, 1);
    });
  }

  // Remove string elements
  if (strArgs.length >= 0) {
    strArgs.forEach((arg) => {
      if (inputArray.includes(arg))
        inputArray.splice(inputArray.indexOf(arg), 1);
    });
  }

  return inputArray;
};

*/

// Do not edit below this line
module.exports = removeFromArray;
