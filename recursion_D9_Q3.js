function factorial(N) {
  if (N === 0 || N === 1) {
    return 1; // Factorial of 0 and 1 is 1
  }

  let result = 1;
  for (let i = 2; i <= N; i++) {
    result *= i;
  }

  return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(4)); // Output: 24
