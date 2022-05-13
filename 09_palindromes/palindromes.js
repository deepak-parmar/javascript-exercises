const palindromes = function (words) {
  let wordRegex = /[^\W\_\,\.\(\:\)\-\|\\\/ ]/gi
  let wordClean = words.match(wordRegex).join('').toLowerCase()
  let wordReverse = wordClean.split('').reverse().join('')
  return wordClean === wordReverse
};

palindromes("A car, a! man, a maraca.")

// Do not edit below this line
module.exports = palindromes;
