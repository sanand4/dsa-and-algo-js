class RecentCounter {
    constructor() {
        this.requests = [];
    }

    ping(t) {
        this.requests.push(t);
        while (this.requests[0] < t - 3000) {
            this.requests.shift();
        }
        return this.requests.length;
    }
}

// Example usage
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));   
console.log(recentCounter.ping(100));  
console.log(recentCounter.ping(3001)); 
console.log(recentCounter.ping(3002)); 
