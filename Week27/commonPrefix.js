// Test Data
// Prepare Precaution Premature
//1. Remove first element from all the words--> p is removed from all of them
//2. Check if all the first elements are same.
//3. If first element is same then go to step-4 else return.
//4. Remove 2nd element from all the words--> r is removed from all of them
//2. Check if all the first elements are same.
//3. If first element is same then go to step-4 else return.
// recursively call the function and return the largest prefix that is pushed in the array with .join(')
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let commonPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(commonPrefix) !== 0) {
      commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);
    }
  }
  return commonPrefix;
};
const suggestedProducts = (products, searchWord) => {
  let results = [];
  let i = 0;
  while (i < products.length) {
    if (products[i].startsWith(searchWord)) {
      results.push(products[i]);
    }
    i++;
  }
  return results;
};
console.log(
  suggestedProducts(
    ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
    "mouse"
  )
);
console.log("mousepad".startsWith("mouse"));
function commonPrefixUtil(str1, str2) {
  let result = "";
  let n1 = str1.length;
  let n2 = str2.length;

  let i = 0,
    j = 0;
  let done = false;

  while (i <= n1 - 1 && j <= n2 - 1 && !done) {
    if (str1[i] != str2[j]) {
      done = true;
    } else {
      result += str1[i];
    }

    i += 1;
    j += 1;
  }

  return result;
}

function commonPrefix(arr, low, high) {
  if (low == high) {
    return arr[low];
  }

  if (high > low) {
    let mid = low + Math.floor((high - low) / 2);

    let str1 = commonPrefix(arr, low, mid);
    let str2 = commonPrefix(arr, mid + 1, high);

    return commonPrefixUtil(str1, str2);
  }
  return null;
}

// Maxsubarray problem
const maxSubarray = (arr) => {
  let max = arr[0];
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }
  return max;
};

// Activity selection Problem
function maxActivities(s, f, n) {
  let results = [];
  let i, j;
  i = 0;
  results.push(i);
  for (j = 0; j < n; j++) {
    if (s[j] >= f[i]) {
      results.push(j);
      i = j;
    }
  }
  return results;
}
let s = [1, 3, 0, 5, 8, 5];
let f = [2, 4, 6, 7, 9, 9];
let n = s.length;

console.log(maxActivities(s, f, n));
