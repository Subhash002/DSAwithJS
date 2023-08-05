function bubbleSort(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    for (let j = 0; j < arr.length - idx - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([23, 24, 3, 4, 2, 4, 4, 56, 54, 4, 3, 3, 3]));
