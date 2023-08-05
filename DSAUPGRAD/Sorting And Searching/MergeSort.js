function merge(a, b) {
  let arr = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] > b[0]) arr.push(a.shift());
    else arr.push(b.shift());
  }
  return arr.concat(a, b);
}

function mergeSort(arr) {
  let half = Math.floor(arr.length / 2);

  if (arr.length === 2) return arr;
  else {
    const left = arr.splice(0, half);
    const right = arr.splice(0);
    return merge(mergeSort(left), mergeSort(right));
  }
}
