function findMax(arr, index) {
  if (index === arr.length - 1) {
    return arr[index];
  } else {
    let current = arr[index];
    let max = findMax(arr, index + 1);
    if (current > max) {
      return current;
    } else {
      return max;
    }
  }
}

// Example usage
let arr = [1, 4, 3, -5, -4, 8, 6];
let maxElement = findMax(arr, 0);
console.log(maxElement); // Output: 8

arr = [1, 4, 45, 6, 10, -8];
maxElement = findMax(arr, 0);
console.log(maxElement); // Output: 45
