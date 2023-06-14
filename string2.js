function isStrobogrammatic(num) {
  const mapping = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const chLeft = num[left];
    const chRight = num[right];

    if (!mapping.hasOwnProperty(chLeft) || mapping[chLeft] !== chRight) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
//test
const num = "69";
const isStrobogrammaticNumber = isStrobogrammatic(num);
console.log(isStrobogrammaticNumber);
