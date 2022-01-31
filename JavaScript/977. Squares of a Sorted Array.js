/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const ans = [];
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const startSquare = nums[start] ** 2;
    const endSquare = nums[end] ** 2;

    if (endSquare > startSquare) {
      ans.unshift(endSquare);
      end--;
    } else {
      ans.unshift(startSquare)
      start++;
    }
  }

  return ans;
};
