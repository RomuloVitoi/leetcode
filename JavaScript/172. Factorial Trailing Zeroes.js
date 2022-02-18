/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  if (n === 0) return 0;
  
  const divBy5 = Math.floor(n / 5);
  return divBy5 + trailingZeroes(divBy5);
};
