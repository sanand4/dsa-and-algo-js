function lengthOfLIS(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const n = nums.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

// Test cases
const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums1));  // Output: 4

const nums2 = [0, 1, 0, 3, 2, 3];
console.log(lengthOfLIS(nums2));  // Output: 4

const nums3 = [7, 7, 7, 7, 7, 7, 7];
console.log(lengthOfLIS(nums3));  // Output: 1
