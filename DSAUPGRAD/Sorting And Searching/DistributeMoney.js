var distMoney = function (money, children) {
  if (money < children) return -1; // check if each children can get 1 dollar

  arr = new Array(children).fill(1); // children array fill with 1
  i = 0;

  money = money - children; // give 1 dollar to all children by default

  while (money) {
    // give 1 + 7 to each children (if possible)
    arr[i]++;
    money--;
    if (arr[i] >= 8 && i < children - 1) i++;
  }

  result = 0;

  for (x of arr) // count children with 8 dollars
    if (x == 8) result++;

  if (arr.at(-1) == 4) result--; // if last children has 4 dollars -> result will be less by 1

  return result;
};
var distMoney = function (money, children) {
  if (money < children) return -1;
  let array = new Array(children).fill(1);
  money = money - children;
  while (money) {
    array[i]++;
    money--;
    if (array[i] >= 8 && i < children - 1) i++;
  }
  let result = 0;
  for (let x of array) {
    if (x === 8) result += 1;
  }
  if (array.at(-1) === 4) result -= 1;
  return result;
};
