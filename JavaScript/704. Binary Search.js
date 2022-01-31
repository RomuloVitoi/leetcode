var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let pivot = start + Math.floor((end - start) / 2);

    if (nums[pivot] === target) {
      return pivot;
    }

    if (nums[pivot] > target) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
  }

  return -1;
};
