const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const sum = (oprands) => {
  let sumTotal = 0;
  oprands.forEach((operand) => (sumTotal += operand));
  return sumTotal;
};

const multiply = (oprands) => {
  let mulTotal = 1;
  oprands.forEach((operand) => (mulTotal *= operand));
  return mulTotal;
};

const power = (base, exponent) => base ** exponent;

const factorial = (num) => {
  let fct = 1;
  
  for (let i = 1; i <= num; i++)
    fct *= i;

  return fct;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
