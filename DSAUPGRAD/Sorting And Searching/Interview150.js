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

var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  let currentGas = 0;
  let currentCost = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    currentGas += gas[i];
    currentCost += cost[i];

    if (currentGas < currentCost) {
      start = i + 1;
      currentGas = 0;
      currentCost = 0;
    }
  }

  return totalGas >= totalCost ? start : -1;
};

var candy = function (ratings) {
  let n = ratings.length;
  let candies = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  return candies.reduce((a, b) => a + b, 0);
};

function trapRainWater(heights) {
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      heights[left] >= leftMax
        ? (leftMax = heights[left])
        : (trappedWater += leftMax - heights[left]);
      left++;
    } else {
      heights[right] >= rightMax
        ? (rightMax = heights[right])
        : (trappedWater += rightMax - heights[right]);
      right--;
    }
  }
  return trappedWater;
}

var trap = function (heights) {
  let n = heights.length;
  let trappedWater = 0;
  for (let i = 0; i < n; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let j = i; j < n; j++) {
      rightMax = Math.max(rightMax, heights[j]);
    }
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, heights[j]);
    }

    trappedWater += Math.min(leftMax, rightMax) - heights[i];
  }
  return trappedWater;
};


function trap(heights) {
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] > leftMax) {
        leftMax = heights[left];
      } else {
        result += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] > rightMax) {
        rightMax = heights[right];
      } else {
        result += rightMax - heights[right];
      }
      right--;
    }
  }

  return result;
}

var romanToInt = function (s) {
  let results = 0;
  let sArray = s.split("");
  let n = sArray.length;
  for (let i = n - 1; i >= 0; i--) {
    if (sArray[i] === "I") {
      if (sArray[i + 1] === "V" || sArray[i + 1] === "X") {
        results -= 1;
      } else {
        results += 1;
      }
    } else if (sArray[i] === "V") {
      results += 5;
    } else if (sArray[i] === "X") {
      if (sArray[i + 1] === "L" || sArray[i + 1] === "C") {
        results -= 10;
      } else {
        results += 10;
      }
    } else if (sArray[i] === "L") {
      results += 50;
    } else if (sArray[i] === "C") {
      if (sArray[i + 1] === "D" || sArray[i + 1] === "M") {
        results -= 100;
      } else {
        results += 100;
      }
    } else if (sArray[i] === "D") {
      results += 500;
    } else if (sArray[i] === "M") {
      results += 1000;
    }
  }
  return results;
};

var isPalindrome = function(s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Two pointers approach
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    // Compare characters at the two pointers
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++; // Move the left pointer towards the right
    right--; // Move the right pointer towards the left
  }

  return true;
};

var isSubsequence = function (s, t) {
  let first = 0;
  let second = 0;
  while (first < s.length && second < t.length) {
    if (s[first] === t[second]) first++;
    second++;
  }
  return first === s.length;
};

var twoSum = function (numbers, target) {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    let sum = numbers[low] + numbers[high];
    if (sum === target) return [low + 1, high + 1];
    else if (sum < target) low++;
    else high--;
  }
};

function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let h = Math.min(height[left], height[right]);
    let w = right - left;
    let area = h * w;
    maxArea = Math.max(maxArea, area);
    if (height[left] > height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

var plusOne = function (digits) {
  let digitArr = BigInt(digits.join("")) + BigInt(1);
  let digitSplit = digitArr.toString().split("");
  return digitSplit;
};


var trailingZeroes = function (n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};

var mySqrt = function (x) {
  if (x < 2) return x;
  let result = 0;
  let start = 1;
  let end = x / 2;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let sqr = mid * mid;
    if (sqr == x) return mid;
    else if (sqr < x) {
      start = mid + 1;
      result = mid;
    } else end = mid - 1;
  }

  return result;
};


var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid + 1]) left = mid + 1;
    else right = mid;
  }
  return left;
};

const isMirror = (x, y) => {
  if (x === null && y === null) return true;
  if (x === null || y === null) return false;
  return (
    x.val === y.val && isMirror(x.right, y.left) && isMirror(x.left, y.right)
  );
};
{
}
const isSymmetric = (root) => {
  return isMirror(root, root);
};

// class Solution {
//     public boolean isMirror(TreeNode x,TreeNode y){
//        if(x==null && y==null) return true;
//        if(x==null || y==null) return false;
//        return (x.val == y.val) && isMirror(x.right, y.left) && isMirror(x.left, y.right);
//     }
//     public boolean isSymmetric(TreeNode root) {
//         return isMirror(root,root);
//     }
// }

var climbStairs = function (n) {
  if (n === 1 || n === 0) return 1;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

function rob(nums) {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let prevMax = nums[0];
  let currentMax = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    let temp = currentMax;
    currentMax = Math.max(prevMax + nums[i], currentMax);
    prevMax = temp;
  }
  return currentMax;
}

var invertTree = function (root) {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
};

var averageOfLevels = function (root) {
  if (!root) return [];

  let results = [];
  let queue = [root];
  while (queue.length) {
    let sum = 0;
    let count = 0;
    let tempQueue = [];
    while (queue.length) {
      let node = queue.shift();
      sum += node.value;
      count++;
      if (node.left) tempQueue.push(node.left);
      if (node.right) tempQueue.push(node.right);
    }
    queue = tempQueue;
    results.push(sum / count);
  }
  return results;
};

var levelOrder = function (root) {
  if (!root) return [];

  let results = [];
  let queue = [root];
  while (queue.length) {
    let sum = [];
    let tempQueue = [];
    while (queue.length) {
      let node = queue.shift();
      sum.push(node.val);
      if (node.left) tempQueue.push(node.left);
      if (node.right) tempQueue.push(node.right);
    }
    queue = tempQueue;
    results.push(sum);
  }
  return results;
};

var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let result = [];
  let isLeftToRight = true;

  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelNode = [];
    for (let i = 0; i < levelSize; i++) {
      let currentNode;
      if (isLeftToRight) currentNode = queue.shift();
      else currentNode = queue.pop();
      levelNode.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      result.push(levelNode);
      isLeftToRight = !isLeftToRight;
    }
  }

  return result;
};
var isValidBST = function (root) {
  let prev = null;
  function transverse(currentNode) {
    if (currentNode === null) return true;
    if (!transverse(currentNode.left)) return false;

    if (prev !== null && prev.val >= currentNode.val) return false;
    prev = currentNode;

    return transverse(currentNode.right);
  }
  return transverse(root);
};

//     public boolean hasPathSum(TreeNode root, int targetSum) {
//         if(root==null) return false;
//         targetSum-=root.val;
//         if(root.left==null && root.right==null) return targetSum==0;
//         return hasPathSum(root.left,targetSum) || hasPathSum(root.right,targetSum);
//     }


