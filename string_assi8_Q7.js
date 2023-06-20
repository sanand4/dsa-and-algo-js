function decodeString(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "]") {
      let decodedString = "";

      while (stack[stack.length - 1] !== "[") {
        decodedString = stack.pop() + decodedString;
      }

      stack.pop(); // Pop the opening bracket '['

      let repeatCount = "";

      while (stack.length && !isNaN(stack[stack.length - 1])) {
        repeatCount = stack.pop() + repeatCount;
      }

      repeatCount = parseInt(repeatCount);

      const repeatedString = decodedString.repeat(repeatCount);
      stack.push(...repeatedString);
    } else {
      stack.push(char);
    }
  }

  return stack.reverse().join("");
}
//test
const s = "3[a]2[bc]";
console.log(decodeString(s));
