const majorityElement = (nums) => {
  let arr = {};
  for (const e of nums) {
    if (!arr[e]) arr[e] = 1;
    else arr[e]++;
  }
  let majority = nums[0];
  for (const key in arr) {
    if (arr[key] > arr[majority]) {
      majority = key;
    }
  }
  return majority;
};
console.log(majorityElement([3, 2, 3]));
