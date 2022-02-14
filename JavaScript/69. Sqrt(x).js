/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;

  let left = 1;
  let right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    const pow = mid * mid;
    if (pow > x) {
      right = mid - 1;
    } else if (pow < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};
