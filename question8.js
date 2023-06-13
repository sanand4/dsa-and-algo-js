function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return []; // If the length is odd, it can't be a doubled array
  }

  const frequencyMap = new Map();
  for (const num of changed) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const original = [];
  for (const num of changed) {
    if (frequencyMap.get(num) === 0) {
      continue; // Skip elements that have been used up
    }

    const doubleNum = num * 2;
    if (!frequencyMap.has(doubleNum) || frequencyMap.get(doubleNum) === 0) {
      return []; // If the doubled value doesn't exist or has been used up, return empty array
    }

    original.push(num);
    frequencyMap.set(num, frequencyMap.get(num) - 1);
    frequencyMap.set(doubleNum, frequencyMap.get(doubleNum) - 1);
  }

  return original;
}
