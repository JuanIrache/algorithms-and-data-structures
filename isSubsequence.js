function isSubsequence(a, b) {
  let i = 0;
  let j = 0;
  for (;;) {
    if (j === b.length) return false;
    for (;;) {
      if (a[i] === b[j]) {
        j++;
        i++;
        if (i === a.length) return true;
        break;
      }
      j++;
    }
  }
}

// colt's recursive

function isSubsequenceRec(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

//colt's

function isSubsequenceColt(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false
