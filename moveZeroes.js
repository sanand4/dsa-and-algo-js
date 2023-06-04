function moveZeroes(nums) {
  let insertPos = 0;

  // Move non-zero elements to the beginning of the array
  for (let num of nums) {
    if (num !== 0) {
      nums[insertPos] = num;
      insertPos++;
    }
  }

  // Fill the remaining positions with zeros
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
}

// Test Example 1
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

// Test Example 2
let nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]
