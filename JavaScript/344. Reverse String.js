/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const end = s.length - 1;
  const middle = Math.floor((end) / 2);

  for (let i = 0; i <= middle; i++) {
    let temp = s[i];
    let j = end - i;
    s[i] = s[j];
    s[j] = temp;
  }

  return s;
};
