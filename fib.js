function fib(i, last, prev) {
  if (!last) {
    last = 1;
  } else if (!prev) {
    prev = 1;
  } else {
    const remLast = last;
    last = last + prev;
    prev = remLast;
  }
  if (i <= 1) return last;
  return fib(i - 1, last, prev);
}

// let visual;
// function fib(n, index) {
//   let baseFunction;
//   if (!index) {
//     baseFunction = true;
//     visual = [[]];
//     index = 0;
//   }
//   let result;
//   let position;
//   if (n <= 2) {
//     result = 1;
//   } else {
//     const recursion1 = fib(n - 1, index + 1);
//     const recursion2 = fib(n - 2, index + 1);
//     result = recursion1.result + recursion2.result;
//     position = recursion1.position;
//   }
//   visual[index] = visual[index] || [];
//   if (n <= 2) {
//     visual[index].push(result);
//   } else {
//     visual[index][position] = result;
//   }
//   if (baseFunction) {
//     // visual.forEach(line => console.log(`${line.filter(n => !isNaN(n)).join()} = ${line.reduce((a, v) => a + v)}`));
//     console.table(visual);
//     return result;
//   }
//   return { result, position: visual[index].length };
// }

// let visual;
// function fib(n, index) {
//   let baseFunction;
//   if (!index) {
//     baseFunction = true;
//     visual = [[]];
//     index = 0;
//   }
//   let result;
//   if (n <= 2) {
//     result = 1;
//   } else {
//     result = fib(n - 1, index + 1) + fib(n - 2, index + 1);
//   }
//   visual[index] = visual[index] || [];
//   visual[index] = (visual[index] || []).concat(result);
//   if (baseFunction) console.table(visual); //visual.forEach(line => console.log(line.join()));
// //   if (baseFunction) visual.forEach(line => console.log(`${line.join()} = ${line.reduce((a, v) => a + v)}`));
//   return result;
// }

// console.log(fib(4)); // 3
console.log(fib(10000)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465

const timer = require('./timer');

// timer(10000, 'mine', i => {
//   fib(i);
// });
// timer(10000, 'colt', i => {
//   fibColt(i);
// });

// fib(5)
// |------------------------ fib(3);
// fib(4)                    |---------- fib(1)
// |---------------fib(2)    fib(2)      |
// fib(3)          |         |           1
// |----- fib(1)   1         1
// fib(2) |
// |      1
// 1
