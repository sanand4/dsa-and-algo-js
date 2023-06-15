function reverseStr(s, k) {
  const arr = s.split("");
  const n = arr.length;

  for (let i = 0; i < n; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, n - 1);

    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }
  }

  return arr.join("");
}
//tests
const s = "abcdefg";
const k = 2;
const reversed = reverseStr(s, k);
console.log(reversed);
