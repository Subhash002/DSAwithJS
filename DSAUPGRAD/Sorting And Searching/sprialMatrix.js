var spiralOrder = function (matrix) {
  for (const i = 0; i < matrix.length; i++) {
    for (const j = 0; i < i.length; j++) {
      console.log(matrix[i][j]);
    }
  }
};

const helperCount = (arr) => {
  let count = 0;
  for (const i of arr) {
    if (i === 1) count++;
  }
  return count;
};
const maxHelper = (arr) => Math.max(...arr);

var rowAndMaximumOnes = function (mat) {
  let result = [];
  for (const i of mat) {
    result.push(helperCount(i));
  }
  return [result.indexOf(maxHelper(result)), maxHelper(result)];
};
mat = [
  [0, 1],
  [1, 0],
];
console.log(rowAndMaximumOnes(mat));
