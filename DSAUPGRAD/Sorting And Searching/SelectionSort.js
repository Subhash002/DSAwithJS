const selectionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let idxOfMin = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[idxOfMin]) idxOfMin = j;
    }
    if (idxOfMin !== i) [arr[idxOfMin], arr[i]] = [arr[i], arr[idxOfMin]];
  }
  return arr;
};
