/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const queue = [[sr, sc]];
  const previousColor = image[sr][sc];

  if (previousColor === newColor) {
    return image;
  }

  const xLimit = image.length - 1;
  const yLimit = image[0].length - 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    image[x][y] = newColor;

    if (y < yLimit && image[x][y + 1] === previousColor)
      queue.push([x, y + 1]);

    if (y > 0 && image[x][y - 1] === previousColor)
      queue.push([x, y - 1]);

    if (x < xLimit && image[x + 1][y] === previousColor)
      queue.push([x + 1, y]);
    
    if (x > 0 && image[x - 1][y] === previousColor)
      queue.push([x - 1, y]);
  }

  return image;
};
