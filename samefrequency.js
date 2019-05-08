function sameFrequency(a, b) {
  let freqs = {};
  a = a.toString();
  b = b.toString();
  if (a.length !== b.length) return false;
  for (const e of a) {
    freqs[e] = (freqs[e] || 0) + 1;
  }
  for (const e of b) {
    if (freqs[e] == null) return false;
    freqs[e] -= 1;
  }
  for (const e in freqs) {
    if (freqs[e] !== 0) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false
