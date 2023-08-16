class FrontMiddleBackQueue {
    constructor() {
        this.queue = [];
    }
    
    pushFront(val) {
        this.queue.unshift(val);
    }
    
    pushMiddle(val) {
        const middleIndex = Math.floor(this.queue.length / 2);
        this.queue.splice(middleIndex, 0, val);
    }
    
    pushBack(val) {
        this.queue.push(val);
    }
    
    popFront() {
        if (this.queue.length === 0) return -1;
        return this.queue.shift();
    }
    
    popMiddle() {
        if (this.queue.length === 0) return -1;
        const middleIndex = Math.floor((this.queue.length - 1) / 2);
        return this.queue.splice(middleIndex, 1)[0];
    }
    
    popBack() {
        if (this.queue.length === 0) return -1;
        return this.queue.pop();
    }
}
const q = new FrontMiddleBackQueue();
q.pushFront(1);
q.pushBack(2);
q.pushMiddle(3);
q.pushMiddle(4);
console.log(q.popFront()); // Output: 1
console.log(q.popMiddle()); // Output: 3
console.log(q.popMiddle()); // Output: 4
console.log(q.popBack()); // Output: 2
console.log(q.popFront()); // Output: -1
