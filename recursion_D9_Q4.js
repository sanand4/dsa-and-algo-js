const calculateExponent = (N, P) => {
  const result = Math.pow(N, P);
  return result;
};

// Example usage
const N = 5;
const P = 2;
const exponent = calculateExponent(N, P);
console.log(exponent); // Output: 25
