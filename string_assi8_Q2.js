function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "*") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      } else if (stack.length > 0 && stack[stack.length - 1] === "*") {
        stack.pop();
      } else {
        return false; // Invalid string
      }
    }
  }

  while (stack.length > 0) {
    if (stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (stack[stack.length - 1] === "*") {
      stack.pop();
    } else {
      return false; // Invalid string
    }
  }

  return true; // Valid string
}
//test
const s = "()";
const isValidString = isValid(s);
console.log(isValidString);
