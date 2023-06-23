function isPowerOfTwo(n) {
  if (n <= 0) {
    return false; // Negative numbers and zero are not powers of two
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false; // If n is not divisible by 2, it's not a power of two
    }
    n /= 2;
  }

  return true;
}

// Example usage:
console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3)); // Output: false
