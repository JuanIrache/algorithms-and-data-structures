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

const pairs = {
  96: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
  3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
  98: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
  22: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
  22: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
  40: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100],
  89: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 16, 19, 22, 26, 39, 40, 57, 70, 89, 95, 96, 100]
};

for (const key in pairs) {
  const found = search(pairs[key], Number(key));
  console.log(key, pairs[key][found]);
}

const createRandomArr = require('./createRandomArr');

let preAarr = createRandomArr(100, 100);
const arr = Array.from(new Set(preAarr.sort((a, b) => a - b)));

console.log(search(arr, arr[15]));
console.log(search(arr, arr[40]));
console.log(search(arr, arr[50]));
console.log(search(arr, 101));
console.log(searchRecursive(arr, arr[15]));
console.log(searchRecursive(arr, arr[1]));
console.log(searchRecursive(arr, arr[40]));
console.log(searchRecursive(arr, arr[50]));
