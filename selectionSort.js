async function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    // await pause(100);
    for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[min]) min = j;
    if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}

const createRandomArr = require('./createRandomArr');
const checkSortedArray = require('./checkSortedArray');

let arr = createRandomArr(22);
let result = selectionSort(arr);
console.log(checkSortedArray(result));
