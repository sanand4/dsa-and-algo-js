function reverseWords(s) {
  const words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = reverseString(words[i]);
  }

  return words.join(" ");
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
//tests
const s = "Let's take LeetCode contest";
const reversed = reverseWords(s);
console.log(reversed);
