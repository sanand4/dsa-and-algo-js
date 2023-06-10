function findDisjointElements(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const disjoint1 = [...set1].filter((num) => !set2.has(num));
  const disjoint2 = [...set2].filter((num) => !set1.has(num));
  return [disjoint1, disjoint2];
}

// Test case
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const result = findDisjointElements(nums1, nums2);
console.log(result);
