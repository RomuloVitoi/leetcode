/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const answer = [];

  const backtrack = (l, r, s) => {
    if (l > r) return;

    if (l === 0 && r === 0) {
      answer.push(s);
      return;
    }

    if (l > 0) backtrack(l - 1, r, s + '(');
    if (r > 0) backtrack(l, r - 1, s + ')');
  };

  backtrack(n, n, '');

  return answer;
};
