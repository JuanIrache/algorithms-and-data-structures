function getDigit(n, d) {
  n = Math.floor(Math.abs(n) / 10 ** d);
  return n % 10;
}

function digitCountMine(num) {
  num = Math.abs(num);
  let i = 0;
  while (num / 10 ** i >= 1) i++;
  return i;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(arr) {
  let max = 0;
  for (const elt of arr) if (digitCount(elt) > max) max = digitCount(elt);
  return max;
}

function radixSort(arr) {
  const loops = maxDigits(arr);
  let buckets = [arr];
  for (let i = 0; i < loops; i++) {
    let newBuckets = [];
    for (let oldBucket of buckets) {
      if (oldBucket != null) {
        for (let num of oldBucket) {
          const bucketNum = getDigit(num, i);
          if (newBuckets[bucketNum] == null) {
            newBuckets[bucketNum] = [num];
          } else {
            newBuckets[bucketNum].push(num);
          }
        }
      }
    }
    buckets = newBuckets;
  }
  let result = [];
  for (let bucket of buckets) {
    if (bucket != null) {
      for (let num of bucket) {
        result.push(num);
      }
    }
  }
  return result;
}

//////////colt's

function getDigit2(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount2(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount2(nums[i]));
  }
  return maxDigits;
}

function radixSort2(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit2(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// console.log(getDigit(0, 0));
// console.log(getDigit(10, 1));
// console.log(getDigit(210, 2));
// console.log(getDigit(3210, 3));
// console.log(getDigit(43210, 4));
// console.log(getDigit(543210, 5));

let arr = [1, 10, 210, 3210, 43210, 543210];
console.log(radixSort(arr));
