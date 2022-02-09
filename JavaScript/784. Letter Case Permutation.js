/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const permutations = [];

  const generatePermutations = (str, start) => {
    permutations.push(str);

    for (let i = start; i < str.length; i++) {
      if (str.charCodeAt(i) < 65) {
        continue;
      }

      const newStr = str.substr(0, i) + str[i].toUpperCase() + str.substr(i + 1);
      generatePermutations(newStr, i + 1);
    }
  };

  generatePermutations(s.toLowerCase(), 0);

  return permutations;
};
