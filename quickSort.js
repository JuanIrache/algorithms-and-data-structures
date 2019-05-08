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

// function pivot(arr, start = 0, end = arr.length - 1) {
//   const toPin = Math.floor(Math.random() * arr.length);
//   const pin = arr[toPin];
//   let swapIdx = start;
//   let offset = 0;
//   for (let i = start; i <= end; i++) {
//     if (arr[i] < pin) {
//       if (i !== swapIdx + offset) [arr[swapIdx + offset], arr[i]] = [arr[i], arr[swapIdx + offset]];
//       swapIdx++;
//       if (swapIdx === toPin) offset = 1;
//     }
//   }
//   [arr[toPin], arr[swapIdx]] = [arr[swapIdx], arr[toPin]];
//   return swapIdx;
// }

// function pivot(arr, start = 0, end = arr.length - 1) {
//   //random pivot index
//   const toPin = Math.floor(Math.random() * arr.length);
//   const pin = arr[toPin];
//   console.log('TCL: pivot -> pin', pin);
//   let finalPosition = start;
//   let nextToSwap = start;
//   console.log(arr);

//   for (let i = start; i <= end; i++) {
//     if (arr[i] < pin) {
//       [arr[nextToSwap], arr[i]] = [arr[i], arr[nextToSwap]];
//       console.log(arr);

//       finalPosition++;
//       nextToSwap++;
//       //   if (nextToSwap === toPin) nextToSwap++;
//       console.log('TCL: pivot -> nextToSwap', arr[nextToSwap]);
//       console.log('TCL: pivot -> finalPosition', arr[finalPosition]);
//     }
//   }
//   [arr[toPin], arr[finalPosition]] = [arr[finalPosition], arr[toPin]];
//   return finalPosition;
// }

// function pivot2(arr, start = 0, end = arr.length - 1) {
//   console.log('TCL: arr', arr);
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   //we pick a random array position
//   const pivotIndex = Math.floor(Math.random() * arr.length);
//   console.log('TCL: pivotIndex', pivotIndex);
//   let pivot = arr[pivotIndex];
//   console.log('TCL: pivot', pivot);
//   let swapIdx = start;
//   //loop from the beginning, as start is probably not the pivotIndex
//   for (let i = start; i <= end; i++) {
//     console.log('TCL: arr', arr);
//     //we make sure we are not changing the pivot position yet
//     console.log(pivot + ' vs ' + arr[i]);

//     if (i !== pivotIndex && pivot > arr[i]) {
//       //skip pivot for now

//       console.log('swap', swapIdx, i);
//       swap(arr, swapIdx, i);
//       if (swapIdx === pivotIndex) swapIdx++;
//       swapIdx++;
//     }
//   }

//   // We swap with the randomized index
//   swap(arr, pivotIndex, swapIdx);
//   console.log('TCL: swapIdx', swapIdx);
//   console.log('TCL: arr', arr);
//   return swapIdx;
// }

//good one
// function pivot(arr, start = 0, end = arr.length - 1) {
//   const pin = arr[start];
//   let finalPosition = start;
//   for (let i = start + 1; i <= end; i++) {
//     if (arr[i] < pin) {
//       if (i > start + 1) [arr[finalPosition + 1], arr[i]] = [arr[i], arr[finalPosition + 1]];
//       finalPosition++;
//     }
//   }
//   [arr[start], arr[finalPosition]] = [arr[finalPosition], arr[start]];
//   return finalPosition;
// }

// function quickSortOld(arr) {
//   if (arr.length <= 1) return arr;
//   const pin = pivot(arr);
//   return quickSortOld(arr.slice(0, pin))
//     .concat(arr[pin])
//     .concat(quickSortOld(arr.slice(pin + 1)));
// }

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  const pin = pivot(arr, start, end);
  return quickSort(quickSort(arr, pin + 1, end), start, pin - 1);
}

// let arr = [5, 5, 12, 12, 8, 4, 10, 13, 13, 5, 5, 16, 17, 14, 0, 1, 13, 10, 13, 9, 12, 13];

// console.log(pivot(arr, 5, 13));

const createRandomArr = require('./createRandomArr');
// const timer = require('./timer');
// const pause = require('./pause');

const len = 20;

let arr = createRandomArr(len, len);

// let arr = [5, 6, 1, 4, 9, 0, 1];

let res = quickSort(arr);

for (let i = 1; i < res.length; i++) {
  if (res[i] < res[i - 1]) {
    console.log('mistake!', res[i - 1], res[i]);
  }
}

// console.log(arr);
// console.log(res, arr[res]);

// console.log(testPivot(arr, res));

// function testPivot(arr, index) {
//   for (let i = 0; i < index; i++) {
//     if (arr[i] > arr[index]) return false;
//   }
//   for (let i = index + 1; i < arr.length; i++) {
//     if (arr[i] < arr[index]) return false;
//   }
//   return true;
// }

// timer(1, 'quick1', i => {
//   quickSort(arr);
// });

// timer(1, 'quick2', i => {
//   quickSort2(arr);
// });
