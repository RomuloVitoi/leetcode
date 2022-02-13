/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = '';
  let pivot = 0;
  let letter;

  while (true) {
    for (let i = 0; i < strs.length; i++) {
      if (pivot >= strs[i].length) {
        return prefix;
      }
      
      if (i === 0) {
        letter = strs[i][pivot];
      } else if (strs[i][pivot] !== letter) {
        return prefix;
      }
    }

    prefix += letter;
    pivot++;
    letter = undefined;
  }
};
