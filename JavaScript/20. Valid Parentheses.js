/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (const char of s) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
