/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const length = s.length;

  if (length === 0) {
    return 0;
  }

  let lastSeen = {};
  let maxLength = 0;
  let start = 0;
  let end = 0;

  while (end < length) {
    const endChar = s[end];
    const lastSeenIndex = lastSeen[endChar];

    lastSeen[endChar] = end;

    if (lastSeenIndex === undefined || lastSeenIndex < start) {
      maxLength = Math.max(maxLength, end - start + 1);
    } else {
      start = lastSeenIndex + 1;
    }

    end++;
  }

  return maxLength;
};
