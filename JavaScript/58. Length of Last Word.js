/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let end = s.length - 1;
  while (s[end] === ' ') end--;

  let start = end;
  while (start >= 0 && s[start] !== ' ') start--;
    
  return end - start;
};
