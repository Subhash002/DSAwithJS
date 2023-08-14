function clumsy(n) {
  if (n <= 0) {
    return 0;
  }
  let stack = [n--]; // Initialize a stack with the first number
  console.log(stack);
  let index = 0; // This index will determine which operation to perform
  while (n > 0) {
    if (index % 4 == 0) {
      // When index % 4 == 0, we perform multiplication
      // We pop the last number from the stack, multiply it with the current number, and push the result back onto the stack
      stack.push(stack.pop() * n);
    } else if (index % 4 == 1) {
      // When index % 4 == 1, we perform division
      // We pop the last number from the stack, divide it by the current number, and push the result back onto the stack
      // We use Math.floor for positive numbers and Math.ceil for negative numbers to simulate integer division
      let top = stack.pop();
      stack.push(top > 0 ? Math.floor(top / n) : Math.ceil(top / n));
    } else if (index % 4 == 2) {
      // When index % 4 == 2, we perform addition
      // We simply push the current number onto the stack
      stack.push(n);
    } else {
      // When index % 4 == 3, we perform subtraction
      // We push the negative of the current number onto the stack
      stack.push(-n);
    }
    index++; // Increment the index for the next operation
    n--; // Decrement n for the next number
  }
  let sum = 0; // Initialize a variable to hold the sum of all numbers in the stack
  while (stack.length) {
    // Pop all numbers from the stack and add them to the sum
    sum += stack.pop();
  }
  return sum; // Return the final sum
}
console.log(clumsy(4)); // Output: 7
