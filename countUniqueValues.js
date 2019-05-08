function countUniqueValuesObj(arr) {
  let uniques = {};
  for (const elt of arr) uniques[elt] = true;
  return Object.keys(uniques).length;
}

function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

function countUniqueValuesC(arr) {
  return new Set(arr).size;
}

const createRandomArr = require('./createRandomArr');
const timer = require('./timer');

let arr = createRandomArr(10000, 10000);
arr = arr.sort((a, b) => a - b);

timer(10000, 'obj', () => {
  countUniqueValuesObj(arr);
});
// timer(10000, 'obj2', () => {
//   countUniqueValuesObj2(arr);
// });
timer(10000, 'plain', () => {
  countUniqueValues(arr);
});
timer(10000, 'C', () => {
  countUniqueValuesC(arr);
});

// console.log(countUniqueValuesObj([1, 1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValuesObj([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValuesObj([]));
// console.log(countUniqueValuesObj([-2, -1, -1, 0, 1]));