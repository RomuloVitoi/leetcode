/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();

  while (true) {
    n = String(n).split('').map(n => parseInt(n)).reduce((p, n) => p + n ** 2, 0);

    if (n === 1) {
      return true;
    }

    if (set.has(n)) {
      return false;
    }

    set.add(n);
  }
};
