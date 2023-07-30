function TwoStackUsingArray() {
  this.arr = [];
  this.top1 = -1;
  this.top2 = 0;
  this.size = 0;
}

TwoStackUsingArray.prototype.push1 = function (element) {
  if (this.top1 + 1 === this.top2) {
    console.log("Stack Overflow");
    return;
  }
  this.top1++;
  this.size++;
  this.arr[this.top1] = element;
};

TwoStackUsingArray.prototype.push2 = function (element) {
  if (this.top2 - 1 === this.top1) {
    console.log("Stack Overflow");
    return;
  }
  this.top2--;
  this.size++;
  this.arr[this.top2] = element;
};

TwoStackUsingArray.prototype.pop1 = function () {
  if (this.top1 === -1) {
    console.log("Stack Underflow");
    return;
  }
  let element = this.arr[this.top1];
  this.top1--;
  this.size--;
  return element;
};

TwoStackUsingArray.prototype.pop2 = function () {
  if (this.top2 === this.arr.length) {
    console.log("Stack Underflow");
    return;
  }
  let element = this.arr[this.top2];
  this.top2++;
  this.size--;
  return element;
};

TwoStackUsingArray.prototype.peek1 = function () {
  return this.arr[this.top1];
};

TwoStackUsingArray.prototype.peek2 = function () {
  return this.arr[this.top2];
};

TwoStackUsingArray.prototype.getSize = function () {
  return this.size;
};

TwoStackUsingArray.prototype.isEmpty1 = function () {
  return this.top1 === -1;
};

TwoStackUsingArray.prototype.isEmpty2 = function () {
  return this.top2 === this.arr.length;
};

TwoStackUsingArray.prototype.print = function () {
  let str = "";
  for (let i = 0; i <= this.top1; i++) {
    str += this.arr[i] + " ";
  }
  for (let i = this.top2; i < this.arr.length; i++) {
    str += this.arr[i] + " ";
  }
  return str;
};

const stack = new TwoStackUsingArray();
stack.push1(10);
stack.push2(20);
stack.push2(30);
stack.push1(40);
stack.push2(50);
console.log(stack.print());
console.log("Top element of Stack1: " + stack.peek1());
console.log("Top element of Stack2: " + stack.peek2());
console.log("Pop element from Stack1: " + stack.pop1());
console.log("Pop element from Stack2: " + stack.pop2());
console.log("After pop operation: " + stack.print());
