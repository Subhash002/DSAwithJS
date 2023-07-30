`In this exercise, we will take a look at how to calculate exponents using a divide and 
conquer approach. The idea is that we can recursively calculate powers by dividing the exponent
by 2 each time. Once we are completed, we combine the results to get the power of the target number.
The implementation of this is shown below.`;

console.log(parseInt(7 / 2, 10));
function power(x, n) {
  if (n === 0) return 1;
  let pow = power(x, parseInt(n / 2, 10));
  if (n % 2 === 0) return pow * pow;
  else return pow * pow * x;
}
console.log(power(2, 5));

//Fibonacci function using Dynamic Programming- TOP DOWN APPROACH
const memorised = [];

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  if (memorised[n]) return memorised[n];
  memorised[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memorised[n];
}

console.log(fibonacci(8));
//Fibonacci function using Dynamic Programming- BOTTOM DOWN APPROACH
function fibonacciBT(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.log(fibonacciBT(8));
