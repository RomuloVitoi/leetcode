/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  const end = s.length - 1;

  for (let i = 0; i <= end; i++) {
    const value = symbols[s[i]];
    if (i === end || value >= symbols[s[i + 1]]) {
      sum += value;
    } else {
      sum -= value;
    }
  }

  return sum;
};
