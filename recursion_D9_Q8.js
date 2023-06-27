function getProductOfArrayElements(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
//test
var arr1 = [1, 2, 3, 4, 5];
var result1 = getProductOfArrayElements(arr1);
console.log(result1); // Output: 120

var arr2 = [1, 6, 3];
var result2 = getProductOfArrayElements(arr2);
console.log(result2); // Output: 18
