const fibonacci = function (num) {
  num = Number(num)
  
  if (num < 0) return "OOPS"

  if (!isNaN(num))
    if (num <= 1) return num
    else return fibonacci(num-1) + fibonacci(num-2)
  else return "OOPS"

};

// Do not edit below this line
module.exports = fibonacci;
