function firstUniqChar(s) {
  const freqMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (freqMap.get(char) === 1) {
      return i; // Return the index of the first non-repeating character
    }
  }

  return -1; // Return -1 if there are no non-repeating characters
}

// Test Example 1
console.log(firstUniqChar("leetcode")); // Output: 0

// Test Example 2
console.log(firstUniqChar("loveleetcode")); // Output: 2

// Test Example 3
console.log(firstUniqChar("aabb")); // Output: -1
