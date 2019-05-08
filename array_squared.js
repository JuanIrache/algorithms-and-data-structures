//Naive approach

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (const elt of arr1) {
    const squareIndex = arr2.indexOf(elt ** 2);
    if (squareIndex === -1) return false;
    arr2.splice(squareIndex, 1);
  }
  return true;
}

//Refactored solution

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   const frequency = function(arr) {
//     let result = {};
//     for (const elt of arr) {
//       result[elt] = (result[elt] || 0) + 1;
//     }
//     return result;
//   };
//   const freq1 = frequency(arr1);
//   const freq2 = frequency(arr2);

//   for (const key in freq1) {
//     if (freq2[key ** 2] !== freq1[key]) return false;
//   }
//   return true;
// }

//Colt's naive

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

//Colt's refactor

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   //   console.log(frequencyCounter1);
//   //   console.log(frequencyCounter2);
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false

const createRandomArr = require('./createRandomArr');
const timer = require('./timer');

const randArr = createRandomArr(40000);

timer(10000, () => {
  same(randArr, randArr);
});
