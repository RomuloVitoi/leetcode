/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let pivot = start + Math.floor((end - start) / 2);

    if (nums[pivot] === target) {
      return pivot;
    }

    if (nums[pivot] > target) {
      if (start === end) {
        return start;
      }

      end = pivot;
    } else {
      if (start === end) {
        return start + 1;
      }

      start = pivot + 1;
    }
  }
};
