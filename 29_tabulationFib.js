function fibT(n) {
  let pair = [BigInt(1), BigInt(1)];
  for (let i = 3; i <= n; i++) {
    const sum = pair[0] + pair[1];
    pair[0] = pair[1];
    pair[1] = sum;
  }
  return pair[1];
}

//shorter
function fibTShort(n) {
  let pair = [BigInt(1), BigInt(1)];
  for (let i = 3; i <= n; i++) [pair[0], pair[1]] = [pair[1], pair[0] + pair[1]];
  return pair[1];
}

console.log(fibTShort(1000));
