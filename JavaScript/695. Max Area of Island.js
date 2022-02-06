/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const dfs = (x, y) => {
    if (x >= 0 && x < grid.length
      && y >= 0 && y < grid[0].length
      && grid[x][y] === 1) {
      grid[x][y] = 0;

      return 1 + dfs(x - 1, y)
        + dfs(x, y + 1)
        + dfs(x + 1, y)
        + dfs(x, y - 1);
    }

    return 0;
  }

  let maxArea = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === 1) {
        maxArea = Math.max(maxArea, dfs(x, y));
      }
    }
  }

  return maxArea;
};
