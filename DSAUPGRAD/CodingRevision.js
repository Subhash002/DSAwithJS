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


class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value, null);
    if (this.size === 0) {
      this.rear = this.front = newNode;
    } else {
      this.front.next = newNode;
      this.front = newNode;
      this.size++;
    }
  }

  dequeue() {
    if (this.size === 0) {
      return "Cant perform this action at this moment.. try adding few elements in queue";
    } else {
      let value = this.rear.value;
      this.rear = this.rear.next;
      this.size--;
      return value;
    }
  }

  max() {
    let holder = this.front;
    let maxValue = this.front.value;
    while (holder !== null) {
      if (holder.value > maxValue) {
        maxValue = holder.value;
      }
      holder = holder.next;
    }
    return maxValue;
  }
}

class LinkListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    const newNode = new LinkListNode(value);
    if (!this.head) this.head = newNode;
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new LinkListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insert(index, value) {
    if (index < 0 || index >= this.size) return false;
    if (index === 0) this.prepend(value);
    const newNode = new LinkListNode(value);
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
    return true;
  }
}