
function firstBadVersion(n) {
  let left = 1;
  let right = n;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
// Example usage:
const bad = 4;
const isBadVersion = function(version) {
  return version >= bad;
};

const n = 5;
const result = firstBadVersion(n);

console.log(result); // Output: 4
