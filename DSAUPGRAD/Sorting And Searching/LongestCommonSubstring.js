function longestCommonSubsequence(a, b) {
  const matrix = Array(a.length)
    .fill()
    .map(() => Array(b.length) + 1)
    .fill(0);
  for (let i = 1; i < a.length; i++) {
    for (let j = 1; j < b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = 1 + matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  return matrix[a.length][b.length];
}
