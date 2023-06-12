function sortedSquares(nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  const result = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[i] = leftSquare;
      left++;
    } else {
      result[i] = rightSquare;
      right--;
    }
  }

  return result;
}

// Test case
const nums = [-4, -1, 0, 3, 10];
const result = sortedSquares(nums);
console.log(result);
