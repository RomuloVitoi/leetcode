/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const answer = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    answer[i] = new Array(i + 1);
    answer[i][0] = 1;
    answer[i][i] = 1;

    for (let j = 1; j < Math.ceil((i + 1) / 2); j++) {
      const sum = answer[i - 1][j - 1] + answer[i - 1][j];
      answer[i][j] = sum;
      answer[i][i - j] = sum;
    }
  }

  return answer;
};
