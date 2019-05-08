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

const createRandomArr = require('./createRandomArr');
const timer = require('./timer');
const pause = require('./pause');

const len = 2222;

let arr = createRandomArr(len, len);

// let res = selectionSort(arr);

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < arr[i - 1]) {
//     console.log('mistake!', arr[i], arr[i - 1]);
//   }
// }

timer(len, 'bubble', i => {
  bubbleSort(arr);
});

timer(len, 'selection', i => {
  selectionSort(arr);
});

timer(len, 'insertion', i => {
  insertionSort(arr);
});
