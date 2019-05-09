//Naive approach

function sameNaive(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (const elt of arr1) {
    const squareIndex = arr2.indexOf(elt ** 2);
    if (squareIndex === -1) return false;
    arr2.splice(squareIndex, 1);
  }
  return true;
}

//Refactored solution

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const frequency = function(arr) {
    let result = {};
    for (const elt of arr) {
      result[elt] = (result[elt] || 0) + 1;
    }
    return result;
  };
  const freq1 = frequency(arr1);
  const freq2 = frequency(arr2);

  for (const key in freq1) {
    if (freq2[key ** 2] !== freq1[key]) return false;
  }
  return true;
}

// console.log(same([1, 2, 3], [4, 1, 9])); //true
// console.log(same([1, 2, 3], [1, 9])); //false
// console.log(same([1, 2, 1], [4, 4, 1])); //false

//benchmarking
const createRandomArr = require('./createRandomArr');
const timer = require('./timer');

const randArr = createRandomArr(80000);
const randArrSq = randArr.map(v => v * v);

timer(1, 'same', () => {
  same(randArr, randArrSq);
});

timer(1, 'sameNaive', () => {
  sameNaive(randArr, randArrSq);
});
