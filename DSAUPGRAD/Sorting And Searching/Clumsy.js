function clumsy(n) {
  if (n <= 0) return 0;
  let stack = [n--];
  let index = 0;
  while (n > 0) {
    if (index % 4 === 0) stack.push(stack.pop() * n);
    else if (index % 4 === 1) {
      let top = stack.pop();
      stack.push(top > 0 ? Math.floor(top / n) : Math.ceil(top / n));
    } else if (index % 4 === 2) stack.push(n);
    else stack.push(-n);
    index++;
    n--;
  }
  let sum = 0;
  while (stack.length) {
    sum += stack.pop();
  }
  return sum; 
}
console.log(clumsy(4)); // Output: 7
