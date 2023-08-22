/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumGap(nums) {
  const n = nums.length;
  if (n < 2) {
    return 0;
  }

  // Find the maximum element in the array
  const maxNum = Math.max(...nums);

  let exp = 1; // Initialize the digit position

  // Perform radix sort
  while (Math.floor(maxNum / exp) > 0) {
    const bucket = Array.from({ length: 10 }, () => []);

    // Distribute the elements into buckets
    for (const num of nums) {
      const digit = Math.floor(num / exp) % 10;
      bucket[digit].push(num);
    }

    // Collect elements from buckets
    nums = [].concat(...bucket);

    exp *= 10; // Move to the next digit position
  }

  // Find the maximum gap
  let maxGap = 0;
  for (let i = 1; i < n; i++) {
    maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
  }

  return maxGap;
}
