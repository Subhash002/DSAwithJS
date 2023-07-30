class Queue {
  constructor() {
    this.items = [];
    this.capacity = 0;
    this.rear = 0;
    this.back = 0;
  }

  //Push
  push(item) {
    if (this.size() === this.capacity) throw new Error("Queue is full");
    this.items[this.rear] = item;
    this.rear++;
  }

  //pop
  pop() {
    if (this.size() === 0) throw new Error("Queue is empty");
    let popitem = this.items[this.front];
    delete this.items[this.front];
    return popitem;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.items.length;
  }
  empty() {
    return this.size() === 0;
  }
}
