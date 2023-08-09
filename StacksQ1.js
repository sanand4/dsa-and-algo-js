function nearestGreaterFrequency(arr) {
    const frequencyMap = new Map();
    const stack = [];
    const result = [];

    // Calculate frequency of each element
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Iterate through the array in reverse order
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && frequencyMap.get(arr[i]) >= frequencyMap.get(arr[stack[stack.length - 1]])) {
            stack.pop();
        }

        if (stack.length === 0) {
            result.unshift(-1); // Add -1 when no greater frequency element found
        } else {
            result.unshift(arr[stack[stack.length - 1]]);
        }

        stack.push(i);
    }

    return result;
}

// Examples
const input1 = [1, 1, 2, 3, 4, 2, 1];
const input2 = [1, 1, 1, 2, 2, 2, 2, 11, 3, 3];

const output1 = nearestGreaterFrequency(input1);
const output2 = nearestGreaterFrequency(input2);

console.log(output1); // Output: [-1, -1, 1, 2, 2, 1, -1]
console.log(output2); // Output: [2, 2, 2, -1, -1, -1, -1, 3, -1, -1]
