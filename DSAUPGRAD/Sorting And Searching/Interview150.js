var removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return nums;
};
var removeDuplicates = function (nums) {
  if (!nums || !nums.length) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

var removeDuplicatesR = function (nums) {
  if (!nums || nums.length <= 2) return nums.length;
  let i = 2;
  for (let j = 2; j < nums.length; j++) {
    if (nums[j] != nums[i - 2]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

var maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

const helperSetZero = (mat, row, col) => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (row.has(i) || col.has(j)) mat[i][j] = 0;
    }
  }
};
var setZeroes = function (matrix) {
  let rows = new Set();
  let column = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        column.add(j);
      }
    }
  }
  matrix = helperSetZero(matrix, rows, column);
};

var lengthOfLastWord = function (s) {
  let sArray = s.trim().split(" ");
  return sArray[sArray.length - 1].length;
};

var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((i) => i !== "")
    .reverse()
    .join(" ");
};
function maxProfit(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
}

function minJumps(nums) {
  let jumps = 0;
  let farthest = 0;
  let currentFarthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i == currentFarthest) {
      jumps++;
      currentFarthest = farthest;
    }
    if (currentFarthest >= nums.length - 1) {
      break;
    }
  }
  return jumps;
}

// I understand that the greedy approach can be a bit tricky to grasp. Let's break it down further with a simpler example:

// Consider the array nums = [2, 1, 1, 1, 4]. The numbers in the array represent the maximum number of steps that can be taken from that index.

// Here's a step-by-step walkthrough of the greedy approach:

// Initialization: We start at index 0 with nums[0] = 2. The farthest we can reach from here is index 2 (0 + nums[0] = 2). So, farthest = 2 and currentFarthest = 2. We haven't made any jumps yet, so jumps = 0.

// First Iteration (i = 1): We're at nums[1] = 1. The farthest we can reach from here is index 2 (1 + nums[1] = 2). But we already knew we could reach index 2 from the previous step, so farthest remains 2. We haven't reached the end of the current jump (i = 1 is not equal to currentFarthest = 2), so we don't increment jumps.

// Second Iteration (i = 2): We're at nums[2] = 1. The farthest we can reach from here is index 3 (2 + nums[2] = 3). So, we update farthest to 3. Now, we've reached the end of the current jump (i = 2 is equal to currentFarthest = 2), so we increment jumps to 1 and update currentFarthest to farthest = 3.

// Third Iteration (i = 3): We're at nums[3] = 1. The farthest we can reach from here is index 4 (3 + nums[3] = 4). So, we update farthest to 4. We haven't reached the end of the current jump (i = 3 is not equal to currentFarthest = 3), so we don't increment jumps.

// Fourth Iteration (i = 4): We're at the last index (nums[4] = 4). We've reached the end of the current jump (i = 4 is equal to currentFarthest = 4), so we increment jumps to 2.

// Result: We've reached the end of the array with a minimum of 2 jumps.

// The key idea of the greedy approach is to always jump to the farthest reachable index. The farthest variable keeps track of the farthest index that we can reach, while currentFarthest keeps track of the farthest index that we can reach with the current number of jumps. When we reach currentFarthest, we know we have to make another jump, so we increment jumps and update currentFarthest to farthest.

function hIndex(citations) {
  citations = citations.sort((a, b) => b - a);
  let hIndex = 0;
  console.log(citations);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) hIndex++;
    else break;
  }
  return hIndex;
}

console.log(hIndex([3, 0, 6, 1, 5]));

const productExceptSelf = (nums) => {
  let n = nums.length;
  let right = new Array(n);
  let left = new Array(n);
  let output = new Array(n);
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  right[n - 1] = 1;
  for (let j = n - 2; j >= 0; j--) {
    right[j] = right[j + 1] + nums[j + 1];
  }
  for (let k = 0; k < n; k++) {
    output[k] = right[k] * left[k];
  }
  return output;
};