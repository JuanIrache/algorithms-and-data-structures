function maxSubarraySum(arr, num) {
  var max = 0;

  var front = 0,
    back = num - 1;

  while (back < arr.length) {
    console.log(back, arr.length);

    let subarr = arr.splice(front, back + 1);

    let sum = subarr.reduce((total, item) => total + item);

    console.log(`sum=`, sum);

    front++;

    back++;
    console.log('TCL: maxSubarraySum -> back', back);
    console.log(arr.length);
  }
  console.log('out');
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
