function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  //Choose the index randomly between start and end
  const toPin = start + Math.floor(Math.random() * (end - start));
  let pivot = arr[toPin];
  let swapIdx = start;
  let offset = 0;
  //Start from the beginning
  for (let i = start; i <= end; i++) {
    //Jump our pivot for swaps
    if (swapIdx === toPin) offset = 1;
    //Jump it for comparisons
    if (i !== toPin && pivot > arr[i]) {
      swap(arr, swapIdx + offset, i);
      swapIdx++;
    }
  }
  // Swap the pivot to swapPoint
  swap(arr, toPin, swapIdx);
  return swapIdx;
}

function pivotOld(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function display(arr, pivot, swapIdx, i) {
  //   let swaps = [];
  //   if (swapIdx != null) swaps[swapIdx] = 1;
  //   if (i != null) swaps[i] = 2;
  //   let pivots = [];
  //   pivots[pivot] = 1;
  //   console.table([arr, swaps, pivots]);
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    // console.log('pivotIndex', pivotIndex);

    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// arr2 = JSON.parse(JSON.stringify(arr1));

// arr1 = [1, 5, 2, 0, 3, 8, 4, 9, 7, 6];
// pivot2(arr1, 2, 7);

// console.log(pivot(arr1, 2, 5));
// console.log(pivot2(arr2, 2, 5));
// console.log(arr1);
// console.log(arr2);

const createRandomArr = require('./createRandomArr');
const checkSortedArray = require('./checkSortedArray');
const len = 10000;
let arr = createRandomArr(len, len);
let res = quickSort(arr);
console.log(checkSortedArray(res));

// console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
