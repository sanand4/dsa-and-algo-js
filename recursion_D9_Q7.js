function getPermutations(str) {
  var result = [];

  // Helper function to swap characters at positions i and j in a string
  function swapChars(s, i, j) {
    var charArray = s.split("");
    var temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join("");
  }

  // Recursive function to generate permutations
  function generatePermutations(s, start, end) {
    if (start === end) {
      result.push(s);
    } else {
      for (var i = start; i <= end; i++) {
        s = swapChars(s, start, i);
        generatePermutations(s, start + 1, end);
        s = swapChars(s, start, i); // backtrack
      }
    }
  }

  generatePermutations(str, 0, str.length - 1);
  return result;
}
//test
var input1 = "ABC";
var output1 = getPermutations(input1);
console.log(output1); // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]

var input2 = "XY";
var output2 = getPermutations(input2);
console.log(output2); // Output: ["XY", "YX"]
