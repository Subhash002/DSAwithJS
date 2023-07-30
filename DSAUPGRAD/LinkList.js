class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return "stack overflow";
    let temp = this.head;
    let previous = this.head;
    while (temp.next) {
      previous = temp;
      temp = temp.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  shift() {
    let temp;
    if (!this.head === 1) return "Stack overflow";

    temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return temp;
  }
  makeEmpty() {
    this.head = null;
    this.tail = null;
  }
  getHead() {
    return this.head.value;
  }
  getTail() {
    return this.tail.value;
  }
  getLength() {
    return this.length;
  }
  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) return "Invalid Operation";

    let holder = this.head;
    for (let index = 0; index < index; index++) {
      holder = holder.next;
    }
    return holder;
  }
  set(index, value) {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return this.shift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return "Invalid Operation";
    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.unshift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return "Invalid Operation";
    const before = this.get(index - 1);
    const remove = before.next;
    before.next = remove.next;
    remove.next = null;
    this.length--;
    return remove;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let index = 0; index < this.length; index++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

function test() {
  let myLinkedList = new LinkList(1);
  myLinkedList.makeEmpty();
  myLinkedList.push(1);
  myLinkedList.push(2);

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  console.log("\nLinked List:");
  myLinkedList.printList();
  myLinkedList.get(2);
}
test();

var reverseList = function (head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

const reverseList = (head) => {
  let current = head;
  let prev = null;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
