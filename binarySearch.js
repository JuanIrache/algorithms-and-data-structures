function binarySearch(arr, elt) {
  let low = 0;
  let high = arr.length;
  let curr;
  while (low !== high) {
    curr = low + Math.floor((high - 1 - low) / 2);
    if (arr[curr] === elt) return curr;
    if (arr[curr] < elt) {
      low = curr + 1;
    } else {
      high = curr;
    }
  }
  return -1;
}

function binarySearchColt(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); // -1

const createRandomArr = require('./createRandomArr');
const timer = require('./timer');

const lens = 10000000;

let arr = createRandomArr(lens, lens);
arr = arr.sort((a, b) => a - b);

const toSearch = createRandomArr(lens, lens);

timer(lens, 'mine', i => {
  binarySearch(arr, toSearch[i]);
});

timer(lens, 'colt', i => {
  binarySearchColt(arr, toSearch[i]);
});
