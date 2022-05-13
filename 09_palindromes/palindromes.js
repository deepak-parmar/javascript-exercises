const palindromes = function (words) {
  const wordRegex = /[^\W!\_\,\.\(\:\)\-\|\\\/ ]/gi
  const wordClean = words.match(wordRegex).join('').toLowerCase()
  const wordReverse = wordClean.split('').reverse().join('')
  return wordClean === wordReverse
};

palindromes("A car, a! man, a maraca.")

// Do not edit below this line
module.exports = palindromes;
