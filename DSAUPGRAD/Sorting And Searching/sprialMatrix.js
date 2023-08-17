const spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  let rowBegin = 0,
    rowEnd = matrix.length - 1,
    colBegin = 0,
    colEnd = matrix[0].length - 1;
  let result = [];
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    //   we are going right
    for (let i = colBegin; i <= colEnd; i++) result.push(matrix[rowBegin][i]);
    rowBegin++;
    // we are going down
    for (let j = rowBegin; j <= rowEnd; j++) result.push(matrix[j][colEnd]);
    colEnd--;
    // we are going left
    if (rowEnd >= rowBegin) {
      for (let k = colEnd; k >= colBegin; k--) result.push(matrix[rowEnd][k]);
    }
    rowEnd--;
    // we are going up
    if (colBegin <= colEnd) {
      for (let l = rowEnd; l >= rowBegin; l--) result.push(matrix[l][colBegin]);
    }
    colBegin++;
  }
  return result;
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
var rotate = function (matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      [matrix[i][j], matrix[i][n - j - 1]] = [
        matrix[i][n - j - 1],
        matrix[i][j],
      ];
    }
  }
  return matrix;
};
console.log(rotate(matrix));

// __________________-----------------____________
// 1198. Find Smallest Common Element in All Rows
// __________________-----------------____________
function smallestCommonElement(mat) {
  let rowSize = mat.length;
  let map = {};
  let smallest = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < rowSize; i++) {
    let rowMap = {};
    for (let j = 0; j < mat[i].length; j++) {
      if (i === 0 || map[mat[i][j]]) {
        rowMap[mat[i][j]] = 1;
        if (i === rowSize - 1 && mat[i][j] <= smallest) {
          smallest = mat[i][j];
        }
      }
    }
    map = rowMap;
  }

  return smallest === Number.MAX_SAFE_INTEGER ? -1 : smallest;
}
let commat = [
  [1, 2, 3, 4, 5],
  [2, 4, 5, 8, 10],
  [3, 5, 7, 9, 11],
  [1, 3, 5, 7, 9],
];

console.log(smallestCommonElement(commat));

function commonElement(mat) {
  let rowSize = mat.length;
  let map = {};

  for (let i = 0; i < rowSize; i++) {
    let rowMap = {};
    for (let j = 0; j < mat[i].length; j++) {
      if (i === 0 || map[mat[i][j]]) {
        rowMap[mat[i][j]] = 1;
        if (i === rowSize - 1) {
          return mat[i][j];
        }
      }
    }
    map = rowMap;
  }

  return -1;
}
function commonElementSelf(mat) {
  let rowSize = mat.length;
  let map = {};
  for (let i = 0; i < rowSize; i++) {
    let tempMap = {};
    for (let j = 0; j < mat[i].length; j++) {
      if (i === 0 || map[mat[i][j]]) {
        tempMap[mat[i][j]] = 1;
        if (i === rowSize - 1) {
          return mat[i][j];
        }
      }
    }
    map = tempMap;
  }
}
