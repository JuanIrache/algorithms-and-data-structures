function changeArr(arr2) {
  arr2[0] = 'modified';
  return 'done!';
}
let arr1 = ['original'];
console.log(changeArr(arr1));
// done!
console.log(arr1);
// [ 'modified' ]
