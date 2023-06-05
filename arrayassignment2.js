function removeElement(nums, val) {
  let k = 0; // Variable to keep track of the number of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // If the current element is not equal to val, move it to the kth position
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Test case
const nums = [3, 2, 2, 3];
const val = 3;
const k = removeElement(nums, val);
console.log("k:", k);
console.log("nums:", nums.slice(0, k));
