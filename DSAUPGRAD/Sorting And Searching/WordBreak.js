var wordBreak1 = function (s, wordDict) {
  for (let i of wordDict) {
    if (s.includes(i)) return true;
  }
  return false;
};

// let s = "catsandog",
//   wordDict = ["cats", "dog", "sand", "and", "cat"];

// console.log(wordBreak(s, wordDict));
// Above solution will not work

var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (dp[j] && wordDict.includes(s.substring(i, j))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

let s = "leetcode";
let wordDict = ["leet", "code"];

console.log(wordBreak(s, wordDict)); // Output: true

var longestConsecutive = function (nums) {
  nums.reduce((count, comm) => {}, 0);
};

const longgestCons = (nums) => {
  const sortNums = nums.sort();
  let count = 0;
  for (let i = 0; i < sortNums.length; i++) {
    while (count < sortNums.length) {
      if (nums[i] + 1 === nums[i + 1]) {
        count++;
      }
    }
  }
  return count;
};

// class Solution {

//     public int longestConsecutive(int[] nums) {

//         Arrays.sort(nums);

//         int count = 0;

//         int temp = 1;

//         if(nums.length == 0)

//         {

//             return 0;

//         }

//         if(nums.length == 1)

//         {

//             return 1;

//         }

//         for(int i = 0 ; i < nums.length - 1 ; i++)

//         {

//             if(nums[i] == (nums[i+1]-1))

//             {

//                 temp++;

//                 count = Math.max(count, temp);

//             }

//             else if(nums [i] == nums [i+1])

//             {

//                 count = Math.max(count, temp);

//             }

//             else

//             {

//                 temp = 1;

//                 count = Math.max(count, temp);

//             }

//         }

//         return count;

//     }

// }
