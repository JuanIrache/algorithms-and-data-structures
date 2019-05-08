function areThereDuplicatesFreq(...args) {
  let freqs = {};
  for (const elt of args) {
    if (freqs[elt]) return true;
    freqs[elt] = true;
  }
  return false;
}

function areThereDuplicatesOneline() {
  return new Set(arguments).size !== arguments.length;
}

//colt's

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

function areThereDuplicatesPoint(...args) {
  // Two pointers
  args.sort((a, b) => a - b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

const createRandomArr = require('./createRandomArr');
const timer = require('./timer');

const len = 10000;
const arr = createRandomArr(len, len);

timer(len, 'freqs', i => {
  areThereDuplicatesFreq(...arr);
});

timer(len, 'oneline', i => {
  areThereDuplicatesOneline(...arr);
});

timer(len, 'colts', i => {
  areThereDuplicates(...arr);
});

timer(len, 'pointer', i => {
  areThereDuplicatesPoint(...arr);
});

// console.log(areThereDuplicatesPoint(...arr));
// console.log(areThereDuplicates(...arr));
// console.log(areThereDuplicatesOneline(...arr));
// console.log(areThereDuplicatesFreq(...arr));

// console.log(areThereDuplicatesPoint(1, 2, 3)); //false
// console.log(areThereDuplicatesPoint(1, 2, 2)); //true
// console.log(areThereDuplicatesPoint('a', 'b', 'c', 'a')); //true
