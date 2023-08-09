function deleteMiddle(stack, currentIdx, middleIdx) {
    if (currentIdx === middleIdx) {
        stack.pop(); // Remove the middle element
        return;
    }

    const temp = stack.pop();
    deleteMiddle(stack, currentIdx + 1, middleIdx);

    stack.push(temp);
}

function deleteMiddleElement(stack) {
    const middleIdx = Math.floor(stack.length / 2);
    deleteMiddle(stack, 0, middleIdx);
}

// Examples
const stack1 = [1, 2, 3, 4, 5];
const stack2 = [1, 2, 3, 4, 5, 6];

deleteMiddleElement(stack1);
deleteMiddleElement(stack2);

console.log(stack1); // Output: [1, 2, 4, 5]
console.log(stack2); // Output: [1, 2, 4, 5, 6]
