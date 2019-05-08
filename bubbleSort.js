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

const createRandomArr = require('./createRandomArr');
const timer = require('./timer');

const len = 9989;

let arr = createRandomArr(len, len);

let res = bubbleSort(arr);

for (let i = 1; i < res.length; i++) {
  if (res[i] < res[i - 1]) {
    console.log('mistake!', res[i], res[i - 1]);
    console.log(res);
  }
}
