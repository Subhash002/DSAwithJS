var canJump = function (nums) {
  let lastGoodIndex = nums.length - 1;
  for (let idx = lastGoodIndex - 1; idx >= 0; idx--) {
    if (idx + nums[idx] >= lastGoodIndex) {
      lastGoodIndex = idx;
    }
  }
  if (lastGoodIndex === 0) return true;
  return false;
};
// 1. Initialize the object
// 2. go from 1 to 2
//  3. Check if array is finished
//  4. if yes then return minium number of steps from Object.

const convertToObj = (arr) => {
  let output = [];
  arr.forEach((elems, index) => {
    if (index !== 0) {
      let obj = {};
      elems.forEach((ele) => {
        obj[arr[0][index]] = elems;
      });
      output.push(obj);
    }
  });
  return output;
};
