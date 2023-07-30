class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return "OutOfRange";
    }
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    // Add to the head
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) {
      return "OutOfRange";
    }
    let temp = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    let temp;
    if (index < 0 || index >= this.length) return undefined;
    if (index < this.length / 2) {
      temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    const newNode = new Node(value);
    let after = before.next;
    let before = this.get(index - 1);
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);
    if (index < 0 || index >= this.length) return "OutOfRange";
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    let temp = this.get(index);
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);
    if (index < 0 || index >= this.length) return "OutOfRange";
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }
  isPalindrome() {
    let frontHolder = this.head;
    let backHolder = this.tail;
    let left = 0;
    let right = this.length - 1;
    let valid = true;
    while (valid && left < right) {
      if (frontHolder.value !== backHolder.value) {
        valid = false;
      }
      left = left + 1;
      right = right - 1;
      frontHolder = frontHolder.next;
      backHolder = backHolder.prev;
    }
    return valid;
  }
  getMiddle() {
    // if (this.length % 2 === 0) {
    //   return this.get((this.length - 1) / 2);
    // } else {
    //   return this.get(this.length / 2);
    // }
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow.value);
  }
  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
  contains(val) {
    let frontHolder = this.front;
    let rearHolder = this.rear;
    let left = 0;
    let right = this.size - 1;
    let found = false;
    while (!found && left < right) {
      if (frontHolder.value === val || rearHolder === val) {
        found = true;
      }
      left++;
      right--;
      frontHolder = frontHolder.next;
      rearHolder = rearHolder.prev;
    }
    return found;
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }
}

function test() {
  let myDLL = new DoublyLinkedList(7);

  myDLL.getHead();
  myDLL.getTail();
  myDLL.getLength();
  myDLL.push(1);
  myDLL.push(2);
  myDLL.push(3);
  myDLL.push(4);
  myDLL.push(9);
  myDLL.push(6);
  myDLL.pop();
  myDLL.unshift(20);
  myDLL.shift();
  myDLL.set(2, 5);
  myDLL.set(5, 0);
  myDLL.remove(4);
  console.log(myDLL.get(1));
  myDLL.getMiddle();

  console.log("\nDoubly Linked List:");
  myDLL.printList();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 7
    Tail: 7
    Length: 1

    Doubly Linked List:
    7

*/
`In this exercise, we will see how to check if a doubly 
linked list is a palindrome. This algorithm will improve on the
 stack based algorithm we saw in the stack section. Our algorithm will 
 use a two pointer approach. One pointer will start at the rear of the list 
 and the other will start at the front of the list. On each iteration,
  we compare the front and rear pointers to determine if they are the 
  same. Once the pointers meet in the middle, we have iterated the whole list.
   If at any point, the values do not equal, the list is not a palindrome.
    // If they always equal, the list must be a palindrome.`;
// -->Updated in above class only
var list = new DoublyLinkedList();

list.unshift(1);

list.unshift(2);

list.unshift(3);

list.unshift(3);

list.unshift(2);

list.unshift(1);

console.log(list.isPalindrome());

list.unshift(1);

console.log(list.isPalindrome());
