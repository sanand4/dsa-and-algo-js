function findWinner(n, k) {
    if (n === 1) {
        return 1;
    }

    let circle = Array.from({ length: n }, (_, i) => i + 1);
    let current = 0;

    while (circle.length > 1) {
        current = (current + k - 1) % circle.length;
        circle.splice(current, 1);
    }

    return circle[0];
}

// Example usage
const n1 = 5, k1 = 2;
console.log(findWinner(n1, k1));  // Output: 3

const n2 = 6, k2 = 5;
console.log(findWinner(n2, k2));  // Output: 1
