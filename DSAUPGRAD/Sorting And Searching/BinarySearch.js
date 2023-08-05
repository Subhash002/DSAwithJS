const binarySearch = (arr, ele) => {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  let ans = -1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === ele) {
      ans = mid;
      break;
    } else if (arr[mid] > ele) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};
