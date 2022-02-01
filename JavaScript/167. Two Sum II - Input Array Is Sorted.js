/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const startValue = numbers[start];
    const endValue = numbers[end];
    const sum = startValue + endValue;

    if (sum === target) {
      return [start + 1, end + 1];
    }

    if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
};
