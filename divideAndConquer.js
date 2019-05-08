// const pairs = {
//   96: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
//   3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
//   98: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
//   22: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
//   22: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
//   40: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
//   89: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100]
// };

// for (const key in pairs) {
//   const found = search(pairs[key], Number(key));
//   console.log(key, pairs[key][found]);
// }

const createRandomArr = require('./createRandomArr');
const timer = require('./timer');

// let preAarr = createRandomArr(100, 100);
// const arr = Array.from(new Set(preAarr.sort((a, b) => a - b)));
// console.log(arr);
// arr = [
//   1,
//   3,
//   4,
//   6,
//   9,
//   10,
//   11,
//   12,
//   15,
//   16,
//   17,
//   20,
//   21,
//   22,
//   23,
//   24,
//   25,
//   26,
//   27,
//   28,
//   31,
//   33,
//   36,
//   37,
//   39,
//   41,
//   42,
//   43,
//   44,
//   46,
//   49,
//   51,
//   53,
//   55,
//   56,
//   58,
//   59,
//   60,
//   61,
//   62,
//   65,
//   67,
//   68,
//   69,
//   71,
//   72,
//   73,
//   74,
//   79,
//   81,
//   82,
//   84,
//   86,
//   90,
//   92,
//   93,
//   94,
//   95,
//   97,
//   98,
//   100
// ];

function search(arr, elt) {
  let low = 0;
  let high = arr.length;
  let guess = Math.floor(low + (high - low) / 2);
  while (elt !== arr[guess]) {
    if (high - low <= 1) return null;
    if (elt > arr[guess]) low = guess + 1;
    else if (elt < arr[guess]) high = guess;
    guess = Math.floor(low + (high - low) / 2);
  }
  return guess;
}

function searchRecursive(arr, elt, mem = 0) {
  let guess = Math.floor(arr.length / 2);
  if (elt === arr[guess]) return mem + guess;
  if (arr.length <= 1) return null;
  if (elt > arr[guess]) return searchRecursive(arr.slice(guess + 1), elt, mem + guess + 1);
  if (elt < arr[guess]) return searchRecursive(arr.slice(0, guess), elt, mem);
}

// console.log(search(arr, arr[15]));
// console.log(search(arr, arr[40]));
// console.log(search(arr, arr[50]));
// console.log(search(arr, 101));
// console.log(searchRecursive(arr, arr[15]));
// console.log(searchRecursive(arr, arr[1]));
// console.log(searchRecursive(arr, arr[40]));
// console.log(searchRecursive(arr, arr[50]));

const lens = 25000;

let arr = createRandomArr(lens, lens);
arr = arr.sort((a, b) => a - b);

const toSearch = createRandomArr(lens, lens);

timer(lens, 'recursive', i => {
  searchRecursive(arr, toSearch[i]);
});

timer(lens, 'loop', i => {
  search(arr, toSearch[i]);
});
