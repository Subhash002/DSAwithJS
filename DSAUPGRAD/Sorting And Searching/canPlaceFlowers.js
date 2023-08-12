var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || i === 0) && // Check left boundary
      (flowerbed[i + 1] === 0 || i === flowerbed.length - 1) // Check right boundary
    ) {
      flowerbed[i] = 1; // Place a flower
      n = n - 1;
    }
  }
  return n <= 0; // If n is non-positive, we've placed enough flowers
};
