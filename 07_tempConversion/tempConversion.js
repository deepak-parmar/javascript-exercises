const ftoc = function (fTemp) {
  cTemp = (fTemp - 32) * (5 / 9);

  if (Number.isInteger(cTemp))
    return cTemp;

  return parseFloat(cTemp.toFixed(1))
};

const ctof = function (cTemp) {
  fTemp = cTemp * (9 / 5) + 32;

  if (Number.isInteger(fTemp))
    return fTemp;

  return parseFloat(fTemp.toFixed(1))
};

console.log(ctof(0));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
