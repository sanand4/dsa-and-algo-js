function findNthTerm(a, d, N) {
  var NthTerm = a + (N - 1) * d;
  return NthTerm;
}
//test
var result1 = findNthTerm(2, 1, 5);
console.log(result1); // Output: 6

var result2 = findNthTerm(5, 2, 10);
console.log(result2); // Output: 23
