class Queue {
  constructor() {
    this.queue = [];
    this.first = 0;
    this.last = 0;
  }
  enqueue(val) {
    this.queue[this.last] = val;
    this.last++;
  }

  dequeue() {
    if (this.queue.length > 0) {
      let val = this.queue[this.first];
      delete this.queue[this.first];
      this.first++;
      return val;
    } else return "Queue is empty";
  }

  peek() {
    return this.queue(this.first);
  }
  isEmpty() {
    return this.queue.length;
  }
  print() {
    console.log(this.queue);
  }
}

//
`Using only two stacks, implement a queue data structure.
Explanation:The  approach  to  this  problem  requires  some  discussion  on  the  
principles  of reversing data with stacks.
It is alreadydiscussed that when you push data onto a stack and then pop it, it is in reverse order due to last in, first out.
You can take advantage of this idea to create the first in, first out the structure of a queue as follows:1.Place all the data onto the first stack, s1. 
•At this point, the data is in last-in, first-out order.2.Then pop all data off s1 onto s2.•The data from s1 is now in reverse order, making it first-in,
 first-out.3.Now, you can pop off s2 to get the first value to remove.4.Youcan then place the remaining data back on s1, bringingit back to last in the first out 
 order.Following these ideas, the implementation is shown below:`;

class QueueFromStack {
  constructor() {
    this.s1 = Stack();
    this.s2 = Stack();
  }
  enqueueStack(val) {
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(value);
    while (!this.s2.isEmpty()) {
      this.s1.push(this.s2.pop());
    }
  }
  dequeueStack() {
    return this.s1.pop();
  }
}

`In this exercise, we will see how reverse a queue using an array acting as a stack. The main idea of this code is simple. We will iterate the queue,
removing values and placing them on our stack. We will then iterate our stack to remove the values and place them back on the queue. Since the stack
is last in first out, the values will be reversed when they are put back onto the queue. The code for this is shown below.`;
function reverseQueue(q) {
  let stack = [];
  while (!q.isEmpty()) {
    stack.push(q.dequeue());
  }
  while (stack.length > 0) {
    q.enqueue(stack.pop());
  }
  return q;
}

`In this exercise, we will see how to search a queue for a specific element. We will implement this as a method of the queue, as this is 
the easiest to implement. For this problem, if the value is found in the queue, we will return its index. Otherwise, we will return -1. 
We are using the array based queue, so the iteration is similar to iterating an array to search for a value, as shown below.`;
