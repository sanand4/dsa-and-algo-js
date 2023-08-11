function countRemainingWords(words) {
    const stack = [];

    for (const word of words) {
        if (stack.length > 0 && stack[stack.length - 1] === word) {
            stack.pop(); // Destroy similar words
        } else {
            stack.push(word);
        }
    }

    return stack.length;
}

// Example usage
const input1 = ["ab", "aa", "aa", "bcd", "ab"];
const output1 = countRemainingWords(input1);
console.log("Output 1:", output1); // Output: 3

const input2 = ["tom", "jerry", "jerry", "tom"];
const output2 = countRemainingWords(input2);
console.log("Output 2:", output2); // Output: 0
