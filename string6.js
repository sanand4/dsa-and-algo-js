function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false; // Different lengths, not possible to obtain goal
  }

  const concatenated = s + s;

  return concatenated.includes(goal);
}
//test
const s = "abcde";
const goal = "cdeab";
const isPossible = rotateString(s, goal);
console.log(isPossible);
