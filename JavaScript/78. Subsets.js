/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const answer = [];

  const backtrack = (arr, index) => {
    answer.push(arr);

    for (let i = index; i < nums.length; i++) {
      backtrack([...arr, nums[i]], i + 1);
    }
  };

  backtrack([], 0);

  return answer;
};
