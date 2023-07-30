// const readline = require("readline");

// const interface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// interface.question("Enter the Character ", (value) => {
//   interface.question("Enter the n times ", (max_num) => {
//     for (let increment = 1; increment <= max_num; increment++) {
//       console.log(" ".repeat(max_num - increment) + value.repeat(increment));
//     }
//     for (let increment = max_num; increment >= 0; increment--) {
//       console.log(" ".repeat(max_num - increment) + value.repeat(increment));
//     }
//     interface.close();
//   });
// });
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// function arrowRight(max, value) {
//   for (let increment = 1; increment <= 2 * max; increment++) {
//     if (increment < max) {
//       console.log(value.repeat(increment));
//     } else {
//       console.log(value.repeat(max - increment));
//     }
//     //     console.log(value.repeat(increment));
//     //   }
//     //   for (let increment = max - 1; increment >= 0; increment--) {
//     //     console.log(value.repeat(increment));
//     //
//   }
// }

// console.log(arrowRight(5, "*"));

function arrowRight1(max, value) {
  for (let increment = 1; increment <= 2 * max; increment++) {
    if (increment <= max) {
      console.log(value.repeat(increment));
    } else {
      console.log(value.repeat(2 * max - increment));
    }
  }
}
console.log(arrowRight1(5, "*"));

// 10
// *********
// **** ****
// ***   ***
// **     **
// *       *
// **     **
// ***   ***
// **** ****
// *********
// console.log("*********".repeat(1));
// console.log("**** ****".repeat(1));
// console.log("***   ***".repeat(1));
// console.log("**     **".repeat(1));
// console.log("*       *".repeat(1));
// console.log("**     **".repeat(1));
// console.log("***   ***".repeat(1));
// console.log("**** ****".repeat(1));
// console.log("*********".repeat(1));

function rotate(nums, times) {
  for (let index = 0; index < nums.length; index++) {
    let popped = nums.pop();
    nums = nums.shift(popped);
  }
  return nums;
}

function findMedianSortedArrays(nums1, nums2) {
  let combine = [...nums1, ...nums2].sort();
  let firstIndex = combine[0];
  let lastIndex = combine[combine.length - 1];
  const mid = firstIndex + (lastIndex - firstIndex) / 2;

  if (Number.isInteger(mid)) return "TBD";
  return mid;
}
