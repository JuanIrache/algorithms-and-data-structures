function minSubArrayLen(arr, num) {
  let i = 0;
  let j = 1;
  let min = Infinity;
  let sum = arr[i] + arr[j];
  while (j < arr.length) {
    if (sum >= num) {
      min = Math.min(min, j + 1 - i);
      if (min === 1) return min;
      sum -= arr[i];
      i++;
    } else {
      j++;
      sum += arr[j];
    }
  }
  if (min < Infinity) return min;
  return 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); //3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); //2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0
