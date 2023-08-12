function maxAbsoluteDifference(arr) {
    const n = arr.length;
    const LS = new Array(n).fill(0);
    const RS = new Array(n).fill(0);
    const stack = [];

    // Calculate Left Smaller array (LS)
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        LS[i] = stack.length > 0 ? arr[stack[stack.length - 1]] : 0;
        stack.push(i);
    }

    stack.length = 0; // Clear the stack

    // Calculate Right Smaller array (RS)
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        RS[i] = stack.length > 0 ? arr[stack[stack.length - 1]] : 0;
        stack.push(i);
    }

    let maxDiff = 0;

    // Calculate maximum absolute difference
    for (let i = 0; i < n; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(LS[i] - RS[i]));
    }

    return maxDiff;
}

const input1 = [2, 1, 8];
const output1 = maxAbsoluteDifference(input1);
console.log(output1);  // Output: 1

const input2 = [2, 4, 8, 7, 7, 9, 3];
const output2 = maxAbsoluteDifference(input2);
console.log(output2);  // Output: 4

const input3 = [5, 1, 9, 2, 5, 1, 7];
const output3 = maxAbsoluteDifference(input3);
console.log(output3);  // Output: 1
