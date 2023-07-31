const subArraySum = (arr) => {
  let sum = 0;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    max = Math.max(max, sum);
    if (sum < 0) return (sum = 0);
  }
  return sum;
};
