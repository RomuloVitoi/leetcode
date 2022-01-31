/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    answer[i] = sum;
  }

  return answer;
};
