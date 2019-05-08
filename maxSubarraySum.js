function maxSubarraySum(arr, len) {
  if (arr.length < len) return null;
  let curr = 0;
  for (let j = 0; j < len; j++) curr += arr[j];
  let max = curr;
  for (let i = 1; i <= arr.length - len; i++) {
    curr -= arr[i - 1];
    curr += arr[i - 1 + len];
    max = Math.max(max, curr);
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([], 4)); //null
