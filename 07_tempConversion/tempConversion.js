const ftoc = function (fTemp) {
  const cTemp = (fTemp - 32) * (5 / 9);
  return Number.isInteger(cTemp) ? cTemp : parseFloat(cTemp.toFixed(1));
};

const ctof = function (cTemp) {
  const fTemp = cTemp * (9 / 5) + 32;
  return Number.isInteger(fTemp) ? fTemp : parseFloat(fTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
