/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const permutations = [];

  const createPermutations = (current) => {
    if (current.length === nums.length) {
      permutations.push(current);
      return;
    }

    for (const number of nums) {
      if (!current.includes(number)) {
        createPermutations([...current, number]);
      }
    }
  }

  createPermutations([]);

  return permutations;
};
