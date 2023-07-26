const fibonacci = function (num) {
  num = Number(num);

  if (num < 0 || isNaN(num)) return "OOPS";

  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
