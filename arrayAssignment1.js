function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      // If the complement is in the map, return its index and the current index
      return [numMap[complement], i];
    } else {
      // Add the current number and its index to the map
      numMap[nums[i]] = i;
    }
  }

  // If no solution is found, return an empty array
  return [];
}

// Test case
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
