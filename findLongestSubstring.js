//*mine based on colt
function findLongestSubstring(str) {
  let i = 0;
  let max = 0;
  let freq = {};
  for (let j = 0; j < str.length; j++) {
    const char = str[j];
    if (freq[char]) i = Math.max(i, freq[char]);
    max = Math.max(max, j - i + 1);
    freq[char] = j + 1;
  }
  return max;
}

//*mine initially veeery bad!
function findLongestSubstringBad(str) {
  if (str.length < 2) return str.length;
  let i = 0;
  let j = 0;
  let max = 1;
  let freq = { [str[i]]: 1 };
  while (j < str.length) {
    let valid = true;
    for (const key in freq) if (freq[key] > 1) valid = false;
    if (valid) max = Math.max(max, j - i + 1);
    if (valid || j - i === 1) {
      j++;
      freq[str[j]] = (freq[str[j]] || 0) + 1;
    } else {
      freq[str[i]]--;
      i++;
    }
  }
  return max;
}

//colt's
function findLongestSubstringColt(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

const createRandomString = require('./createRandomString');
const timer = require('./timer');

const randString = createRandomString(4000);

timer(1000, 'mine', () => {
  findLongestSubstring(randString);
});
timer(1000, 'mine slow', () => {
  findLongestSubstring(randString);
});

timer(1000, 'colt', () => {
  findLongestSubstringColt(randString);
});

// console.log(findLongestSubstring('')); //0
// console.log(findLongestSubstring('rithmschool')); //7
// console.log(findLongestSubstring('thiisawesome')); //6
// console.log(findLongestSubstring('thecatinthehat')); //7
// console.log(findLongestSubstring('bbbbbb')); //1
// console.log(findLongestSubstring('longestsubstring')); //8
// console.log(findLongestSubstring('thisishowwedoit')); //6
