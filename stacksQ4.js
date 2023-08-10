function canArrangeInIncreasingOrder(queue) {
    const n = queue.length;
    const stack = [];
    const secondQueue = [];

    let expectedNumber = 1;

    for (let i = 0; i < n; i++) {
        if (queue[i] === expectedNumber) {
            secondQueue.push(queue[i]);
            expectedNumber++;

            while (stack.length > 0 && stack[stack.length - 1] === expectedNumber) {
                secondQueue.push(stack.pop());
                expectedNumber++;
            }
        } else {
            stack.push(queue[i]);
        }
    }

    while (stack.length > 0) {
        secondQueue.push(stack.pop());
    }

    for (let i = 1; i < n; i++) {
        if (secondQueue[i] < secondQueue[i - 1]) {
            return "No";
        }
    }

    return "Yes";
}

const queue1 = [5, 1, 2, 3, 4];
console.log(canArrangeInIncreasingOrder(queue1)); 

const queue2 = [5, 1, 2, 6, 3, 4];
console.log(canArrangeInIncreasingOrder(queue2)); 
