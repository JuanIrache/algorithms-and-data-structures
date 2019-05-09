function factorialIter(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function factorialRec(num) {
  if (num === 0) return 1;
  return num * factorialIter(num - 1);
}

console.log(factorialIter(150));
console.log(factorialRec(150));
