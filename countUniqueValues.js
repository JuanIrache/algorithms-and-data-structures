function countUniqueValuesFreq(arr) {
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

function countUniqueValuesSet(arr) {
  return new Set(arr).size;
}

console.log(countUniqueValuesObj([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValuesObj([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValuesObj([]));
console.log(countUniqueValuesObj([-2, -1, -1, 0, 1]));
