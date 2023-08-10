function reverseNumberUsingStack(number) {
    const stack = [];
    const numStr = number.toString();

    for (let digit of numStr) {
        stack.push(digit);
    }

    let reversedStr = "";
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }

    return parseInt(reversedStr, 10);
}

const input1 = 365;
console.log(reverseNumberUsingStack(input1)); // Output: 563

const input2 = 6899;
console.log(reverseNumberUsingStack(input2)); // Output: 9986
