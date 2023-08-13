function firstNonRepeatingCharIndex(s) {
    const charCount = new Map();
    
    // Count the occurrences of each character
    for (let i = 0; i < s.length; i++) {
        if (charCount.has(s[i])) {
            charCount.set(s[i], charCount.get(s[i]) + 1);
        } else {
            charCount.set(s[i], 1);
        }
    }
    
    // Find the index of the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1; // No non-repeating character found
}

// Test cases
console.log(firstNonRepeatingCharIndex("leetcode")); // Output: 0
console.log(firstNonRepeatingCharIndex("loveleetcode")); // Output: 2
console.log(firstNonRepeatingCharIndex("aabb")); // Output: -1
