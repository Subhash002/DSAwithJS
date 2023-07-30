// Udemy-
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.top = newNode;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//     } else {
//       newNode.next = this.top;
//       this.top = newNode;
//     }
//     this.length += 1;
//     return this;
//   }

//   pop() {
//     if (this.length === 0) {
//       return undefined;
//     } else {
//       const temp = this.top;
//       this.top = this.top.next;
//       this.temp = null;
//       this.length -= 1;
//       return this;
//     }
//   }

//   printStack() {
//     let temp = this.top;
//     while (temp !== null) {
//       console.log(temp.value);
//       temp = temp.next;
//     }
//   }

//   getTop() {
//     if (this.top === null) {
//       console.log("Top: null");
//     } else {
//       console.log("Top: " + this.top.value);
//     }
//   }

//   getLength() {
//     console.log("Length: " + this.length);
//   }
// }

// let myStack = new Stack(7);
// myStack.push(34);
// myStack.push(14);
// myStack.push(36);
// myStack.push(32);
// myStack.push(24);
// myStack.push(39);

//UpGrad
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
    const newNode = new Node(value);
    this.top = newNode;
    this.size += 1;
  }
  pop() {
    if (this.size > 0) {
      const ref = this.top.value;
      this.top = this.top.next;
      this.size--;
      return ref;
    } else return "Stack overflow";
  }
  print() {
    const holder = this.top;
    while (holder.next !== null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
  search(value) {
    let index = -1;
    let found = false;
    let holder = this.top;
    while (!found && holder !== null) {
      if (holder.value === value) found = true;
      holder = holder.next;
      index++;
    }
    return found ? index : -1;
  }

  sort(s) {
    let tempStack = new Stack();

    while (!s.isEmpty()) {
      let value = s.pop();
      while (!tempStack.isEmpty() && tempStack.peek() > value) {
        s.push(tempStack.pop());
      }
      tempStack.push(value);
    }
    return tempStack;
  }
}

function reverseStack(s) {
  let vals = [];
  while (!s.isEmpty()) {
    vals.push(s.pop());
  }
  for (let i = 0; i < vals.length; i++) {
    s.push(vals[i]);
  }
  return s;
}

`In this exercise, we will see how to search a stack for a value. We will 
implement this as a method of the node based stack, as this is the easiest way to implement 
a search. The process of searching a stack is similar to the iteration of a stack. We will 
iterate from the top of the stack, checking for the value we need. If it is found, we return its 
index, otherwise, we return -1. The code is shown below.`;

let undoStack = new Stack();
let redoStack = new Stack();
let counter = 0;
function incrementCounter() {
  undoStack.push(counter);
  counter++;
  document.getElementById("val").value = counter;
}

function undo() {
  redoStack.push(counter);
  document.getElementById("val").value = undoStack.pop();
  console.log(redoStack, undoStack);
}

function redo() {
  undoStack.pop();
  document.getElementById("val").value = redoStack.pop();
  console.log(redoStack, undoStack);
}

// var undoStack = new Stack();
// var redoStack = new Stack();
// var counter = 0;

// function incrementCounter(){
//     undoStack.push(counter);
//     counter++;
//     document.getElementById("val").value = counter;
// }

// function undo(){
//     redoStack.push(counter);
//     counter = undoStack.pop();
//     document.getElementById("val").value = counter;
// }

// function redo(){
//     undoStack.push(counter);
//     counter = redoStack.pop();
//     document.getElementById("val").value = counter;
// }
function sortStack(s) {
  let tempStack = new Stack();
  while (!s.isEmpty()) {
    let value = s.pop();
    while (!tempStack.isEmpty() && tempStack.peek() > val) {
      s.push(value);
    }
    tempStack.push(value);
  }
  return tempStack;
}
