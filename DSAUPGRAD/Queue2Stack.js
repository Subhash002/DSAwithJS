class QueueStack {
  constructor() {
    const s1 = [];
    const s2 = [];
  }
  push(item) {
    while (!this.s1.length === 0) {
      this.s2.push(this.s1.pop());
      this.s1.pop();
    }
    this.s1.push(item);
    while (!this.s2.length === 0) {
      this.s1.push(this.s2.pop());
      this.s2.pop();
    }
  }
  pop() {
    return this.s1.pop();
  }
  peek() {
    return this.s1.pop();
  }
}
