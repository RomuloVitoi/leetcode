/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) {
    return false;
  }

  const map = new Map();
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    map.set(String.fromCharCode(i), 0);
  }
 
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], map.get(s1[i]) + 1);
  }

  for (let i = 0; i < s2.length; i++) {
    map.set(s2[i], map.get(s2[i]) - 1);

    if (i < s1.length - 1) {
      continue;
    }

    if (i > s1.length - 1) {
      map.set(s2[i - s1.length], map.get(s2[i - s1.length]) + 1)
    }

    if (Array.from(map.values()).every((v) => v === 0)) {
      return true;
    }
  }

  return false;
};