class DataStream {
    constructor(value, k) {
        this.value = value;
        this.k = k;
        this.stream = [];
    }
    
    consec(num) {
        this.stream.push(num);
        if (this.stream.length >= this.k) {
            const lastKIntegers = this.stream.slice(-this.k);
            return lastKIntegers.every(val => val === this.value);
        }
        return false;
    }
}

// Example usage
const dataStream = new DataStream(4, 3);
console.log(dataStream.consec(4)); // Output: false
console.log(dataStream.consec(4)); // Output: false
console.log(dataStream.consec(4)); // Output: true
console.log(dataStream.consec(3)); // Output: false
