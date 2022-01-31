/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let one = 1;
  let two = 1;

  for (let i = 1; i < n; i++) {
    let temp = two;
    two = one + two;
    one = temp;
  }

  return two;
};
