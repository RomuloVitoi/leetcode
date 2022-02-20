/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const count = {};
  const result = [];

  for (const num of nums1) {
    if (count[num]) count[num]++;
    else count[num] = 1;
  }

  for (const num of nums2) {
    if (count[num]) {
      count[num]--;
      result.push(num);
    }
  }

  return result;
};
