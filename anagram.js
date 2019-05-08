function validAnagram(first, second) {
  if (first.length !== second.length) return false;
  let count = {};
  for (const char of first) count[char] = (count[char] || 0) + 1;
  for (const char of second) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}

//COlt's

function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

const createRandomString = require('./createRandomString');
const timer = require('./timer');

const randString = createRandomString(4000);

timer(1000, () => {
  validAnagram2(randString, randString);
});

timer(1000, () => {
  validAnagram(randString, randString);
});
