/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const ans = [];
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const value = nums[i];
    ans[i] = value;
    ans[i + length] = value;
  }

  return ans;
};
