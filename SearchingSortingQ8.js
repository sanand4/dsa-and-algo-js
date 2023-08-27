function find132pattern(nums) {
    const n = nums.length;
    const stack = [];
    let second = -Infinity; // To keep track of the potential '2' in the pattern
    
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < second) {
            return true;
        }
        
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            second = stack.pop();
        }
        
        stack.push(nums[i]);
    }
    
    return false;
}

// Test cases
const nums1 = [1, 2, 3, 4];
console.log(find132pattern(nums1));  // Output: false

const nums2 = [3, 1, 4, 2];
console.log(find132pattern(nums2));  // Output: true

const nums3 = [-1, 3, 2, 0];
console.log(find132pattern(nums3));  // Output: true
