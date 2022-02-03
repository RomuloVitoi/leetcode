/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  var reverseArray = function (arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  };

  var findEndIndex = function (arr, start) {
    const length = arr.length;
    while (start < length && arr[start] !== ' ') {
      start++;
    }
    return start;
  };

  const str = s.split('');
  const length = str.length;

  let start = 0;

  while (start < length) {
    end = findEndIndex(str, start);
    reverseArray(str, start, end - 1);
    start = end + 1;
  }

  return str.join('');
};
