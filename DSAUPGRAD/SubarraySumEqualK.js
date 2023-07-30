// Input: (nums = [1, 2, 3]), (k = 3);
// Output: 2;
const subarraySum = (nums, k) => {
  //1.Counter to track the total number of combinations
  let counter = 0;
  //2. use for loop to iterate over the array
  for (let i = 0; i < nums.length; i++) {
    //3. check if first number is equal to k if yes
    // then increment
    // the counter
    //5. Create other variable for sum so that we can check
    // the sum
    let sum = nums[i];
    if (nums[i] === k) counter++;
    //6. Take the first number then add other number to first
    // number to check if sum is equal to k if yes then increment
    //Other numer should start from i+1
    for (var j = i + 1; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum === k) counter++;
      console.log(counter);
    }
  }
  return counter;
};

console.log(subarraySum([1, 2, 3]));
