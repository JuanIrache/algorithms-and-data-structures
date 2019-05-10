function flatten(arr) {
  let result = [];
  for (const elt of arr) {
    if (!Array.isArray(elt)) {
      result.push(elt);
    } else {
      result = result.concat(flatten(elt));
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
