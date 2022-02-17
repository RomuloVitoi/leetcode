/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const counts = {
    0: 0,
    1: 0,
    2: 0,
  };

  for (const num of nums) {
    counts[num]++;
  }

  let start = 0;
  let end = counts[0];

  for (let i = 0; i < end; i++) nums[i] = 0;

  start += counts[0];
  end += counts[1];

  for (let i = start; i < end; i++) nums[i] = 1;

  start += counts[1];
  end += counts[2];

  for (let i = start; i < end; i++) nums[i] = 2;
};
