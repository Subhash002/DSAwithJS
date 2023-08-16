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
  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};

var searchMatrix = function (matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1; // Start from the last column of the first row

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true; // Found the target
    } else if (matrix[row][col] > target) {
      col--; // Move left in the current row
    } else {
      row++; // Move down to the next row
    }
  }

  return false; // Target not found
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
