/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const combinations = (n, k, next, combs, comb) => {
    if (comb.length === k)
      combs.push(comb);

    for (let i = next; i <= n; i++) {
      combs = combinations(n, k, i + 1, combs, [...comb, i]);
    }

    return combs;
  }

  return combinations(n, k, 1, [], []);
};
