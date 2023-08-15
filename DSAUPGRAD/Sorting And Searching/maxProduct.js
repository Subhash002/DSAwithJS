var maxProduct = function (nums) {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = maxProduct;
  for (let i = 1; i < nums.length; i++) {
    let tempMax = Math.max(nums[i], maxProduct * nums[i], minProduct * nums[i]);
    minProduct = Math.min(nums[i], maxProduct * nums[i], minProduct * nums[i]);
    maxProduct = tempMax;
    result = Math.max(maxProduct, result);
  }
  return result;
};
console.log(maxProduct([2, 3, -2, 4]));
