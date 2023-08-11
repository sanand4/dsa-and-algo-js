class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    size() {
        return this.items.length;
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseFirstK(queue, k) {
    if (k < 1 || k > queue.size()) {
        return "Invalid value of k";
    }

    const stack = [];
    for (let i = 0; i < k; i++) {
        stack.push(queue.dequeue());
    }

    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }

    for (let i = 0; i < queue.size() - k; i++) {
        queue.enqueue(queue.dequeue());
    }

    return queue;
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

const k = 3;
console.log("Original Queue:", queue.items);
const reversedQueue = reverseFirstK(queue, k);
console.log(`Queue with reversed first ${k} elements:`, reversedQueue.items);
