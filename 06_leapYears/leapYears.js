const leapYears = function(year) {
  return new Date(`February 29, ${year}`).getDate() === 29 ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
