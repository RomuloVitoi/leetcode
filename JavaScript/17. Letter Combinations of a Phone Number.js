/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const answer = [];

  const generateCombinations = (i, prefix) => {
    if (digits.length === i) {
      answer.push(prefix);
      return;
    }

    for (const letter of map[digits[i]]) {
      generateCombinations(i + 1, prefix + letter);
    }
  }

  generateCombinations(0, '');

  return answer;
};
