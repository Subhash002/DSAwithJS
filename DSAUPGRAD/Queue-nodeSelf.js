class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val, null);
    if (this.size === 0) {
      this.front = newNode;
      this.rear = newNode;
      this.size++;
    } else {
      newNode.next = this.front;
      this.front = newNode;
      this.size++;
    }
  }

  dequeue() {
    if (this.size === 0) return "StackOverflow";
    else {
      this.front = this.front.next;
      this.size--;
    }
    return this.front.value;
  }
  print() {
    let holder = this.front;
    while (holder.next != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}
let q = new Queue();
q.enqueue(5);
q.enqueue(4);
q.enqueue(3);
q.enqueue(2);
q.dequeue();
q.print();
