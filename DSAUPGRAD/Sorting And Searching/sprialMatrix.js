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
// console.log(rowAndMaximumOnes(mat));


const rangeHelper = (mat, target) => {
  let range;
  for (let i = 0; i <= mat.length; i++) {
    if (mat[i][i] > target) {
      range = i;
      break;
    }
  }
  return range;
};

var searchMatrix = function (matrix, target) {
  const limit = rangeHelper(matrix, target);
  return limit;
};

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 5;

console.log(searchMatrix(matrix, target));