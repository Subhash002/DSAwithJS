function findCelebrity(mat) {
  let n = mat.length;
  let a = 0;
  let b = n - 1;
  while (a < b) {
    if (mat[a][b]) a++;
    else b--;
  }
  for (let i = 0; i < n; i++) {
    if ((a !== i && mat[a][i]) || mat[i][a]) {
      return -1;
    }
  }
  return a;
}
