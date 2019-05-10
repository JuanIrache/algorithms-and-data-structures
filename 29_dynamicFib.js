//simple iterative
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//dynamic
function fibD(n, memo = {}) {
  if (n <= 2) return BigInt(1); //BigInt for accuracy
  if (memo[n] != null) return memo[n];
  const result = fibD(n - 1, memo) + fibD(n - 2, memo);
  memo[n] = result;
  return result;
}
console.log(fibD(1000));
//43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n
