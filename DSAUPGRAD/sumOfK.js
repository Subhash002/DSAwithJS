// Input: (nums = [1, 2, 3]), (k = 3);
// Output: 2;
const subarraySum = (nums, k) => {
  //1.Counter to track the total number of combinations
  let counter = 0;
  //2. use for loop to iterate over the array
  for (let i = 0; i < nums.length; i++) {
    //3. check if first number is equal to k if yes
    // then increment
    // the counter
    //5. Create other variable for sum so that we can check
    // the sum
    let sum = nums[i];
    if (nums[i] === k) counter++;
    //6. Take the first number then add other number to first
    // number to check if sum is equal to k if yes then increment
    //Other numer should start from i+1
    for (var j = i + 1; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum === k) counter++;
    }
  }
  return counter;
};
//
// HashTable

class HashTable {
  constructor(size) {
    this.size = size;
    this.values = [];
  }
  calculateHash(value) {
    return value % this.size;
  }
  add(value) {
    let hash = this.calculateHash(value);
    if (this.values[hash] === undefined) this.values[hash] = value;
    else {
      let i = 0;
      while (this.values[hash] !== undefined && i < this.size) {
        i++;
        hash++;
      }
      if (i >= this.size) throw new Error("Space is full");
      else this.values[hash] = value;
    }
  }
  contains(value) {
    const hash = this.calculateHash(value);
    if (this.values[hash] === value) return true;
    else {
      let i = 0;
      while (this.values[hash] !== undefined && i < this.size) {
        hash++;
        hash = hash % this.size;
        i++;
      }
      if (this.values[hash] === value) return true;
      else return false;
    }
  }
  print() {
    console.log(this.values);
  }
}
// let ht = new HashTable(25);
// ht.add(25);
// ht.add(23);
// ht.add(1);
// ht.add(1.5);
// for (let i = 0; i < 23; i++) {
//   ht.add(Math.floor(Math.random() * 25));
// }
// ht.contains(25);
// ht.print();

const removeDuplicates = (arr) => {
  let map = new Map();
  let i = 0;
  while (i < arr.length) {
    if (!map.has(arr[i])) map.set(arr[i], i);
    i++;
  }
  return Array.from(map.keys());
};

// console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 45, 45, 67, 67, 1, 6]));

// const returnIntercepts = (arr1, arr2) => {
//   let map = new Map(...arr1);
//   let i = 0;
//   //   while (i < arr2.length) {

//   //   }
//   return map;
// };
// console.log(returnIntercepts([1, 2, 3], [1, 2, 9]));
//BST
class Node {
  constructor() {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinarySeachTree {
  constructor() {
    this.root = null;
  }
}

const preOrder = (node) => {
  if (!node) return;
  console.log(node.value);
  preOrder(root.left);
  preOrder(root.right);
};

const postOder = (node) => {
  if (!node) return;
  postOder(root.left);
  postOder(root.right);
  console.log(node.value);
};

const inOder = (node) => {
  if (!node) return;
  inOder(root.left);
  console.log(node.value);
  inOder(root.right);
};

const levelOrder = (node) => {
  if (!node) return;
  let q = new Queue();
  q.add(node);
  while (!q.empty()) {
    let size = q.size();
    for (let i = 0; i < size; i++) {
      let ele = q.pop();
      console.log(ele.value);
      if (ele.left) q.add(ele);
      if (ele.right) q.add(ele);
    }
  }
};

const maxDeepth = (root) => {
  if (!root) return 0;

  let leftDepth = maxDeepth(root.left);
  let rightDepth = maxDeepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};

const getLargestSubtree = (node) => {
  if (!node) return 0;
  let ans = Number.MIN_VALUE;
  function maxSum(node, ans) {
    if (!node) return 0;
    let sum = node.value + maxSum(node.left, ans) + maxSum(node.right, ans);
    ans = Math.max(ans, sum);
    return sum;
  }
  maxSum(node, ans);
  return ans;
};

var inorderTraversal = function (root) {
  let result = [];

  // RECURSIVE SOLUTION

  function inorder(root) {
    // if node null, return back to the prenode (works like that with recursive functions)
    if (!root) {
      return;
    }

    inorder(root.left); // recursive call for left nodes
    result.push(root.val); // push to result
    inorder(root.right); // when its done with left, start right
  }
  // call recursive function
  inorder(root);
  return result;
};

var minDiffInBST = function (root) {
  let result = [];
  let minDiff = Infinity;
  function DFS(root) {
    if (!root) return;
    DFS(root.left);
    result.push(root.val);
    DFS(root.right);
  }
  DFS(root);
  for (let i = 1; i < result.length; i++) {
    minDiff = Math.min(minDiff, result[i] - result[i - 1]);
  }
  return minDiff;
};