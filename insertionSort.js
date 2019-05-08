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

function insertionSortColt(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

const createRandomArr = require('./createRandomArr');
const timer = require('./timer');

const len = 11111;

let arr = createRandomArr(len, len);

// let res = insertionSort(arr);

// for (let i = 1; i < res.length; i++) {
//   if (res[i] < res[i - 1]) {
//     console.log('mistake!', res[i], res[i - 1]);
//   }
// }

timer(len, 'colt', i => {
  insertionSortColt(arr);
});

timer(len, 'mine', i => {
  insertionSort(arr);
});
