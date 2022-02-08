/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  const queue = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] > 0) {
        matrix[row][col] = Infinity;
      } else {
        queue.push([row, col, 0]);
      }
    }
  }

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (matrix[x][y] > dist) {
      matrix[x][y] = dist
    }

    for (const [dx, dy] of directions) {
      if (
        x + dx >= 0 &&
        x + dx < matrix.length &&
        y + dy >= 0 &&
        y + dy < matrix[0].length &&
        matrix[x + dx][y + dy] === Infinity
      ) {
        queue.push([x + dx, y + dy, dist + 1])
      }
    }
  }

  return matrix;
};
