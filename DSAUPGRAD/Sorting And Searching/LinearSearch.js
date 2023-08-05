const linearSearch = (arr, ele) => {
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === ele) return idx;
  }
  return -1;
};
