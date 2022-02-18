/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  const wordSet = new Set();
  let answer = '';
  
  words.sort();

  for (const word of words) {
    if (word.length === 1 || wordSet.has(word.slice(0, -1))) {
      wordSet.add(word);
      if (word.length > answer.length) {
        answer = word;
      }
    }
  }

  return answer
};
