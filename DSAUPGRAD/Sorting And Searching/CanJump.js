var canJump = function (nums) {};
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
