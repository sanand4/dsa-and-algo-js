function countWordsAfterDestruction(sequence) {
    const stack = [];
    
    for (const word of sequence.split(' ')) {
        if (stack.length > 0 && stack[stack.length - 1] === word) {
            stack.pop();
        } else {
            stack.push(word);
        }
    }
    
    return stack.length;
}

const input1 = "ab aa aa bcd ab";
const output1 = countWordsAfterDestruction(input1);
console.log(output1);  // Output: 3

const input2 = "tom jerry jerry tom";
const output2 = countWordsAfterDestruction(input2);
console.log(output2);  // Output: 0
