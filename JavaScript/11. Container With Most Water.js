/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;

  while (start < end) {
    const left = height[start];
    const right = height[end];
    const area = (end - start) * Math.min(left, right);

    max = Math.max(max, area);

    if (left > right) {
      end--;
    } else {
      start++;
    }
  }

  return max;
};
