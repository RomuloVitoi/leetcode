/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;

  const binary = n.toString(2);
  for (let i = 1; i < binary.length; i++) {
    if (binary[i] !== '0') return false;
  }

  return true;
};
