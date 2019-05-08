function mergeSort(arr) {
  const merge = function(arr1, arr2) {
    let i1 = 0;
    let i2 = 0;
    let result = [];
    for (let i = 0; i < arr1.length + arr2.length; i++) {
      if (i2 === arr2.length || arr1[i1] < arr2[i2]) {
        result.push(arr1[i1]);
        i1++;
      } else {
        result.push(arr2[i2]);
        i2++;
      }
    }
    return result;
  };
  let arrays = [];
  for (const elt of arr) arrays.push([elt]);
  while (arrays.length > 1) {
    newArr = [];
    for (let i = 0; i < arrays.length; i += 2) newArr.push(merge(arrays[i], arrays[i + 1] || []));
    arrays = newArr;
  }
  return arrays[0];
}

console.log(mergeSort([8, 2, 7, 0, 8, 4, 3, 1, 5, 7, 9, 4]));
