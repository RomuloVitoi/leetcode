/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
};
