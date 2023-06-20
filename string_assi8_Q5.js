function compress(chars) {
  let write = 0;
  let read = 0;
  let count = 1;

  while (read < chars.length) {
    if (chars[read] === chars[read + 1]) {
      count++;
    } else {
      chars[write] = chars[read];
      write++;

      if (count > 1) {
        const countString = count.toString();
        for (let i = 0; i < countString.length; i++) {
          chars[write] = countString[i];
          write++;
        }
      }

      count = 1;
    }

    read++;
  }

  return write;
}
//tests
const chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars)); // Output: 6
console.log(chars.slice(0, 6)); // Output: ["a", "2", "b", "2", "c", "3"]
