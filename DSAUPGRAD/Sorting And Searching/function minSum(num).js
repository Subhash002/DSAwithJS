// // function minSum(num) {
// //   const count = new Array(10).fill(0); // Initialize digit count array

// //   // Count occurrences of each digit
// //   const numStr = num.toString();
// //   for (const digitChar of numStr) {
// //     const digit = parseInt(digitChar, 10);
// //     count[digit]++;
// //     console.log(count[digit]);
// //   }

// //   let new1 = 0,
// //     new2 = 0; // Initialize new1 and new2

// //   // Construct new1 and new2
// //   for (let digit = 1; digit < 10; digit++) {
// //     while (count[digit] > 0) {
// //       new1 = new1 * 10 + digit;
// //       count[digit]--;
// //       if (count.reduce((sum, val) => sum + val) > 0) {
// //         new2 = new2 * 10 + digit;
// //         count[digit]--;
// //       }
// //     }
// //   }

// //   return new1 + new2;
// // }

// // Example usage

// var minimumSum = function (num) {
//   const numArray = num
//     .toString()
//     .split("")
//     .sort((a, b) => a - b);

//   return (
//     parseInt(numArray[0] + numArray[2]) + parseInt(numArray[1] + numArray[3])
//   );
// };

// // Example usage
// const num = 2932;
// console.log(minimumSum(num)); // Output: 52
var canPlaceFlowers = function (flowerbed, n) {
  const flowerbedLength = flowerbed.filter((i) => i !== 1);
  console.log(flowerbedLength.length / 3);
  if (flowerbedLength.length / 3 === n) return true;
  return false;
};
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n));
