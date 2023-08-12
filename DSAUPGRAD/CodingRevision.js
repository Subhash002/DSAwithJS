class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value, this.top);
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.size > 0) {
      const ref = this.top.value;
      this.top = this.top.next;
      this.size--;
      return ref;
    } else return "Stack overflow";
  }

  search(value) {
    let index = -1;
    let found = false;
    let holder = this.top;
    while (!found && holder !== null) {
      if (holder.value === value) {
        found = true;
      }
      holder = holder.next;
      index++;
    }
    return found ? index : -1;
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    return this.top.value;
  }
  reverseStack() {
    let reversedStack = new Stack();
    while (!this.isEmpty()) {
      reversedStack.push(this.pop());
    }
    this.top = reversedStack.top;
  }

  sort() {
    if (this.isEmpty() || this.top.next === null) {
      return;
    }
    let tempStack = new Stack();
    while (!this.isEmpty()) {
      const temp = this.pop();
      while (!tempStack.isEmpty() && tempStack.peek() < temp) {
        this.push(tempStack.pop());
      }
      tempStack.push(temp);
    }
    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop());
    }
  }
}
