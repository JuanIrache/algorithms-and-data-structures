// const merge = function(arr1, arr2) {
//   let i1 = 0;
//   let i2 = 0;
//   let result = [];
//   for (let i = 0; i < arr1.length + arr2.length; i++) {
//     if (i2 === arr2.length || arr1[i1] < arr2[i2]) {
//       result.push(arr1[i1]);
//       i1++;
//     } else {
//       result.push(arr2[i2]);
//       i2++;
//     }
//   }
//   return result;
// };

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// function mergeSort(arr) {
//   let arrays = [];
//   for (const elt of arr) arrays.push([elt]);
//   while (arrays.length > 1) {
//     newArr = [];
//     for (let i = 0; i < arrays.length; i += 2) newArr.push(merge(arrays[i], arrays[i + 1] || []));
//     arrays = newArr;
//   }
//   return arrays[0];
// }

function mergeSortRec(arr) {
  if (arr.length <= 1) return arr;
  const left = mergeSortRec(arr.slice(0, Math.floor(arr.length / 2)));
  const right = mergeSortRec(arr.slice(Math.floor(arr.length / 2)));
  return merge(left, right);
}

async function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    // await pause(100);
    for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[min]) min = j;
    if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    const val = arr[i];
    while (j > 0 && val < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = val;
  }
  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const pin = arr[start];
  let finalPosition = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pin) {
      if (i > start + 1) [arr[finalPosition + 1], arr[i]] = [arr[i], arr[finalPosition + 1]];
      finalPosition++;
    }
  }
  [arr[start], arr[finalPosition]] = [arr[finalPosition], arr[start]];
  return finalPosition;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pin = pivot(arr);
  return quickSort(arr.slice(0, pin))
    .concat(arr[pin])
    .concat(quickSort(arr.slice(pin + 1)));
}

function quickSort2(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  const pin = pivot(arr, start, end);
  return quickSort2(quickSort2(arr, pin + 1, end), start, pin - 1);
}

const createRandomArr = require('./createRandomArr');
const timer = require('./timer');
const pause = require('./pause');

const len = 2222222;

let arr = createRandomArr(len, len);
let arr2 = JSON.parse(JSON.stringify(arr));

// let res = selectionSort(arr);

// for (let i = 1; i < res.length; i++) {
//   if (res[i] < res[i - 1]) {
//     console.log('mistake!', res[i], res[i - 1]);
//   }
// }

function getDigit(n, d) {
  n = Math.floor(Math.abs(n) / 10 ** d);
  return n % 10;
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
timer(1, 'radix2', i => {
  radixSort2(arr);
});

timer(1, 'radix', i => {
  radixSort(arr);
});

// timer(1, 'quick', i => {
//   quickSort2(arr2);
// });

// timer(1, 'insertion', i => {
//   insertionSort(arr);
// });
