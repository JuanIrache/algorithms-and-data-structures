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

//testing
const createRandomArr = require('./createRandomArr');
const checkSortedArray = require('./checkSortedArray');

let arr = createRandomArr(1111);

arr = insertionSort(arr);

console.log(checkSortedArray(arr));
