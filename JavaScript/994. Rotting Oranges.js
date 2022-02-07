/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const queue = [];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let minutes = 0;
  let fresh = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        fresh++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length && fresh > 0) {
    let size = queue.length;

    while (size > 0) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        const nextX = x + dx;
        const nextY = y + dy;

        if (
          nextX < 0 || nextX >= grid.length
          || nextY < 0 || nextY >= grid[0].length
          || grid[nextX][nextY] !== 1
        ) continue;

        fresh--;
        grid[nextX][nextY] = 2;
        queue.push([nextX, nextY])
      }

      size--;
    }

    minutes++;
  }

  return fresh > 0 ? -1 : minutes;
};
