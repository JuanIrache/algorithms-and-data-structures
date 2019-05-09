function averagePair(arr, avg) {
  if (arr.length < 2) return false;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const target = avg * 2;
    const actual = arr[i] + arr[j];
    if (actual === target) return true;
    if (actual < target) i++;
    else j--;
  }
  return false;
}

//division (slightly slower)

function averagePairDiv(arr, avg) {
  if (arr.length < 2) return false;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const target = avg;
    const actual = (arr[i] + arr[j]) / 2;
    if (actual === target) return true;
    if (actual < target) i++;
    else j--;
  }
  return false;
}

//colt's

function averagePairColt(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

//benchmarking
const createRandomArr = require('./createRandomArr');
const timer = require('./timer');

const len = 10000;
let arr = createRandomArr(len, len);

arr = arr.sort((a, b) => a - b);

const checks = createRandomArr(len, len);

timer(len, 'mine', i => {
  averagePair(arr, checks[i]);
});

timer(len, 'div', i => {
  averagePairDiv(arr, checks[i]);
});

timer(len, 'colts', i => {
  averagePairColt(arr, checks[i]);
});

// console.log(averagePair([1, 2, 3], 2.5)); //true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
// console.log(averagePair([], 4)); //false
