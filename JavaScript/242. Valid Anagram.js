/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (t.length !== s.length) return false;

  const chars = {};

  for (const c of s) {
    if (chars[c]) chars[c]++
    else chars[c] = 1;
  }

  for (const c of t) {
    if (chars[c]) chars[c]--;
    else return false;
  }

  return Object.values(chars).every(v => v === 0);
}
