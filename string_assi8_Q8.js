function buddyStrings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    // Check if there are duplicate characters in s
    let seen = new Set();
    for (let char of s) {
      if (seen.has(char)) {
        return true;
      }
      seen.add(char);
    }
    return false;
  }

  let differences = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      differences.push(i);
    }
  }

  if (differences.length === 2) {
    let [i, j] = differences;
    if (s[i] === goal[j] && s[j] === goal[i]) {
      return true;
    }
  }

  return false;
}
//test
let s = "ab";
let goal = "ba";
console.log(buddyStrings(s, goal));
