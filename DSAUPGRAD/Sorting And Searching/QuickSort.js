var wordBreak = function (s, wordDict) {};
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  const leftPart = quickSort(left);
  const rightPart = quickSort(right);
  return [...leftPart, pivot, ...rightPart];
}
// Divide and conquer - Majority Elements
function countOccurrences(arr, num, low, high) {
    let count=0;
    for (let i=low; i<high; i++) {
        if (arr[i]===num) count++;
    }
   return count;
}

function findMajorityElement(arr, low, high) {
   if(low===high) return arr[low];
   const mid=Math.floor((high+low)/2);

const leftMajorityElement=findMajorityElement(arr,low ,mid);
const rightMajorityElement=findMajorityElement(arr,mid+1,high);
if (leftMajorityElement === rightMajorityElement) return leftMajorityElement;

    const leftCount = countOccurrences(arr, leftMajority, low, high);
    const rightCount = countOccurrences(arr, rightMajority, low, high);

    return leftCount > rightCount ? leftMajority : rightMajority;
}

function majorityElement(arr) {
    return findMajorityElement(arr, 0, arr.length - 1);
}

// Example usage
const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log("Majority element:", majorityElement(arr)); // Output: 4
