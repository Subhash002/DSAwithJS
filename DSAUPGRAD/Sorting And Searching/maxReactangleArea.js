function maxHist(row) {
  let result = [];
  let top_val,
    max_area = 0,
    area = 0,
    i = 0;

  while (i < row.length) {
    if (result.length == 0 || row[result[result.length - 1]] <= row[i]) {
      result.push(i++);
    } else {
      top_val = row[result.pop()];
      area = top_val * i;

      if (result.length > 0) {
        area = top_val * (i - result[result.length - 1] - 1);
      }

      max_area = Math.max(area, max_area);
    }
  }

  while (result.length > 0) {
    top_val = row[result.pop()];
    area = top_val * i;

    if (result.length > 0) {
      area = top_val * (i - result[result.length - 1] - 1);
    }

    max_area = Math.max(area, max_area);
  }

  return max_area;
}

function maxRectangle(matrix) {
  matrix = matrix.map((row) => row.map(Number));
  let result = maxHist(matrix[0]);

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 1) {
        matrix[i][j] += matrix[i - 1][j];
      }
    }

    result = Math.max(result, maxHist(matrix[i]));
  }

  return result;
}

let matrix = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];

console.log("Area of maximum rectangle is " + maxRectangle(matrix));
