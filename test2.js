function changeArr(arr2) {
  return function() {
    console.log('array in the closure:', arr2);
  };
}
let arr1 = ['original'];
let run = changeArr(arr1);
arr1 = 'not an array';
run();
// array in the closure: [ 'original' ]
console.log('array in outer:', arr1);
// array in outer: not an array

// let arr1 = ['original'];
// function changeArr() {
//   arr1 = ['modified'];
//   return 'done!';
// }
// debugger;
// console.log(changeArr());
// // done!
// console.log(arr1);
// // [ 'modified' ]

// function changeArr(arr2) {
//   arr2 = ['modified'];
//   return 'done!';
// }
// let arr1 = ['original'];
// console.log(changeArr(arr1));
// // done!
// console.log(arr1);
// // [ 'original' ]

// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     alert(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// debugger;
// init();
