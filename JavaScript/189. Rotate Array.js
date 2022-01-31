/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const moves = k % nums.length;
  const end = nums.splice(-moves);
  nums.unshift(...end);
};
