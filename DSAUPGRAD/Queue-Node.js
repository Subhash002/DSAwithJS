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
    let newNode = new Node();
    if (this.size === 0) {
      this.rear = this.front = newNode;
    } else {
      this.front = newNode;
      this.front.next = newNode;
      this.size++;
    }
  }
  dequeue() {
    if (this.size === 0)
      return "Cant perform this action at this moment.. try adding few elements in queue";
    else {
      let value = this.front.value;
      this.rear = this.rear.next;
      this.size -= 1;
      return value;
    }
  }
  print() {
    let holder = this.front;
    while (holder.next !== null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
  isEmpty() {
    return this.size === 0;
  }
  peek() {
    if (this.size === 0) return "Stack underflow";
    else return this.front.value;
  }
  // search(value) {
  //   let found = false;
  //   let i = -1;
  //   while (!found && i < this.queue.length) {
  //     if (this.queue[i] === value) {
  //       found = true;
  //     }
  //     i++;
  //   }
  //   return found ? 1 : -1;
  // }
  max() {
    let holder = this.front;
    let maxValue = this.front.value;
    while (holder.length !== null) {
      if (holder.value > maxValue) {
        maxValue = holder.value;
      }
      holder = holder.next;
    }
    return maxValue;
  }
}
var q = new Queue();

q.enqueue(1);

q.enqueue(2);

q.enqueue(3);

// console.log(q.search(1));

// console.log(q.search(5));
console.log(q.max());

const transpose = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(matrix));

//
function printNextGreatest(arr, n) {
  let s = new Stack();
  s.push(arr[0]);
  for (let i = 1; i < n; i++) {
    if (s.length === 0) {
      s.push(arr[i]);
    } else {
      while (!s.isEmpty() && s.peek() < arr[i]) {
        console.log(s.pop() + "-->" + arr[i]);
      }
      s.push(arr[i]);
    }
  }
  while (!s.isEmpty()) {
    console.log(s.pop() + "-->" + -1);
  }
}
var arr = [11, 13, 21, 3];

var n = arr.length;

printNextGreatest(arr, n);
//Sorting the Stack
