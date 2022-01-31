/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let viewed = [];

  for (let i = 0; ; i++) {
    let current = nums[i];
    let j = viewed[current];
    if (j !== undefined) {
      return [j, i];
    }
    viewed[target - current] = i;    
  }
};
