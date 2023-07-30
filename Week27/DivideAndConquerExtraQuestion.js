function mergeAndCount(arr, l, m, r) {
  let left = [];

  for (let i = 0; i < m + 1; i++) {
    left.push(arr[i]);
  }

  let right = [];

  for (let i = m + 1; i < r + 1; i++) {
    right.push(arr[i]);
  }

  let i = 0,
    j = 0,
    k = l,
    swaps = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
      swaps += m + 1 - (l + i);
    }
  }

  while (i < left.length) {
    arr[k++] = left[i++];
  }

  while (j < right.length) {
    arr[k++] = right[j++];
  }

  return swaps;
}

function mergeSortAndCount(arr, l, r) {
  let count = 0;

  if (l < r) {
    let m = Math.floor((l + r) / 2);

    count += mergeSortAndCount(arr, l, m);

    count += mergeSortAndCount(arr, m + 1, r);

    count += mergeAndCount(arr, l, m, r);
  }

  return count;
}

let arr = new Array(1, 20, 6, 4, 5);
console.log(mergeSortAndCount(arr, 0, arr.length - 1));

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
