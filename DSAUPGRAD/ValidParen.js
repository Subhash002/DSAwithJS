const validParen = (str) => {
  const open = ["(", "{", "["];
  const close = [")", "}", "]"];
  const result = [];
  if (str.length === 0 || str.length === 1) return false;
};

// Javascript implementation of the approach

// Function to return the maximum
// water that can be stored
function maxWater(arr, n) {
  // To store the maximum water
  // that can be stored
  let res = 0;

  // For every element of the array
  // except first and last element
  for (let i = 1; i < n - 1; i++) {
    // Find maximum element on its left
    let left = arr[i];
    for (let j = 0; j < i; j++) {
      left = Math.max(left, arr[j]);
    }

    // Find maximum element on its right
    let right = arr[i];
    for (let j = i + 1; j < n; j++) {
      right = Math.max(right, arr[j]);
    }

    // Update maximum water value
    res += Math.min(left, right) - arr[i];
  }
  return res;
}

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let n = arr.length;
//
// Valid brackets
const validParens = (str) => {
  const results = [];
  const size = results.length;
  for (let i = 0; i < size; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      results.push(str[i]);
    } else {
      if (size === 0) return false;
      const top = results.pop();
      if (str[i] === ")") {
        if (top != "(") {
          return false;
        }
      } else if (str[i] === "}") {
        if (top != "{") {
          return false;
        }
      } else if (str[i] === "]") {
        if (top != "[") {
          return false;
        }
      }
    }
  }
  return size > 0;
};
// Traping rain water
// Follow the steps mentioned below to implement the idea:

// Traverse the array from start to end:
// For every element:
// Traverse the array from start to that index and find the maximum height (a) and
// Traverse the array from the current index to the end, and find the maximum height (b).
// The amount of water that will be stored in this column is min(a,b) – array[i], add this value to the total amount of water stored
// Print the total amount of water stored.
const trappedWater = (height) => {
  let results = 0;
  for (let i = 0; i < height.length; i++) {
    //Right index
    let a = height[i];
    for (let j = 0; j < i; j++) {
      a = Math.max(a, height[j]);
    }
    //Left index
    let b = height[i];
    for (let j = i; j < height.length; j++) {
      b = Math.max(b, height[j]);
    }
    results = results + Math.min(a, b) - height[i];
  }
  return results;
};

// Product of array except itself
const productExceptSelf = (nums) => {
  let results = [];
  for (const i of nums) {
    let mulArray = nums.filter((e) => e != i);
    if (nums.every((el) => el === 0)) return Array(nums.length).fill(0);
    else {
      results.push(
        mulArray.reduce((acc, val) => {
          acc = acc * val;
          return acc;
        }, 1)
      );
    }
  }
  return results;
};
console.log(productExceptSelf([1, 2, 3, 4]));
//
// let counter = 0;
// let loopme = setInterval(() => {
//   console.log(`Count: ${counter}`);
//   counter++;
// }, 1000);
// setTimeout(() => {
//   clearImmediate(loopme);
//   counter = 0;
// }, 10000);
// console.log(`Timers`);
const largestArea = (arr) => {
  let n = arr.length;
  let left = [];
  let right = [];
  const myStack = [];
  const capacity = myStack.length;

  //filling the left arra
  for (let i = 0; i < n; i++) {
    if (capacity === 0) left.push(0);
    else {
    }
  }
};

//Queue
