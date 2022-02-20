/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let sum = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const letterValue = columnTitle[i].charCodeAt(0) - 64;
    sum = sum * 26 + letterValue;
  }

  return sum;
};
