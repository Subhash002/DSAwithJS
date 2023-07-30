class GraphNode {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}
class PriorityQueue {
  constructor() {
    this.item = [];
  }

  enqueue(element, weight) {
    let graphNode = new GraphNode(element, weight);
    let contain = false;
    let i = 0;
    while (i < this.item.length && !contain) {
      if (this.item[i].weight > graphNode.weight) {
        this.item.splice(i, 0, graphNode);
        contain = true;
      }
      i++;
    }
    if (!contain) {
      this.item.push(graphNode);
    }
  }
  dequeue() {
    if (this.item.length === 0) {
      throw "StackUnderflow";
    } else return this.item.shift();
  }
  print() {
    console.log(this.item);
  }
}
var pq = new PriorityQueue();
pq.enqueue(1, 10);
pq.enqueue(2, 5);
pq.enqueue(3, 0);
pq.enqueue(4, 20);
pq.print();
