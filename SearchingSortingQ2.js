function sortColors(nums) {
    let low = 0;
    let high = nums.length - 1;
    let current = 0;

    while (current <= high) {
        if (nums[current] === 0) {
            // Swap current element with the one at low pointer
            [nums[low], nums[current]] = [nums[current], nums[low]];
            low++;
            current++;
        } else if (nums[current] === 2) {
            // Swap current element with the one at high pointer
            [nums[current], nums[high]] = [nums[high], nums[current]];
            high--;
        } else {
            // Increment current pointer when element is 1
            current++;
        }
    }
}

const nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]

const nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2); // Output: [0, 1, 2]
