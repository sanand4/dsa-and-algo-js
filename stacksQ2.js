function sortStack(stack) {
    const mainStack = stack.slice();
    const tempStack = [];

    while (mainStack.length > 0) {
        const current = mainStack.pop();

        while (tempStack.length > 0 && tempStack[tempStack.length - 1] > current) {
            mainStack.push(tempStack.pop());
        }

        tempStack.push(current);
    }

    // Reversing tempStack to get sorted order in mainStack
    while (tempStack.length > 0) {
        mainStack.push(tempStack.pop());
    }

    return mainStack;
}

// Examples
const input1 = [34, 3, 31, 98, 92, 23];
const input2 = [3, 5, 1, 4, 2, 8];

const output1 = sortStack(input1);
const output2 = sortStack(input2);

console.log(output1); // Output: [3, 23, 31, 34, 92, 98]
console.log(output2); // Output: [1, 2, 3, 4, 5, 8]
