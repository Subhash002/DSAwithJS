const recurssiveNames = (n) => {
  if (n < 1) return 0;
  else {
    console.log("Subhash");
  }
  return recurssiveNames(n - 1);
};
recurssiveNames(4);

const basicBacktraning = (arr) => {
  let output = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      output.push(...(arr[j] + arr[i]));
    }
  }
  return output;
};
console.log(basicBacktraning([1, 2, 3]));
// function subsetSum() {
//   let array = [1, 3, 5, 6];
//   let n = array.length;
//   let ans = [];
//   let sum = 0;
//   helper(0, arr, n, ans, 0);
// }
const fib = (n) => {
  let dp = Array(n + 1).fill(-1);
  if (n < 2) return n;
  if (dp[n] !== -1) return dp[n];
  return (dp[n] = fib(n - 1) + fib(n - 2));
};
console.time("fib(5)");
const result = fib(5);
console.timeEnd("fib(5)");

console.log("Result:", result);
