`In this situation, we have set up a directed,
 unweighted graph. Unweighted means that the edges 
 do not have weights associated with them. The graph 
 is directed because we only add an edge from the 
 node to the adjacent node. To make an undirected 
 version, we simply apply the adjacency in both directions.
`;
class Graph {
  constructor() {
    this.adjList = new Map();
  }
  addEdge(node, adj) {
    if (this.adjList.has(node)) {
      let currentSet = this.adjList.get(node);
      currentSet.add(adj);
      this.adjList.set(node, currentSet);
    } else {
      this.adjList.set(node, new Set([adj]));
    }
  }
  addEdgeUndirectedHelper(node, adj) {
    if (this.adjList.has(node)) {
      let currentSet = this.adjList.get(node);
      currentSet.add(adj);
      this.adjList.set(node, currentSet);
    } else {
      this.adjList.set(node, new Set([adj]));
    }
  }
  addEdgeUndirected(node, adj) {
    this.addEdgeUndirectedHelper(node, adj);
    if (adj != node) this.addEdgeUndirectedHelper(adj, node);
  }
  getEdges(node) {
    return this.adjList.get(node);
  }
  print() {
    console.log(this.adjList);
  }
}
let g = new Graph();
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(4, 5);
g.print();

//Weighted Graph
class WeightedGraph {
  constructor() {
    this.adjList = new Map();
  }
  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      let currentSet = this.adjList.get(node);
      currentSet.add({ adj, weight });
      this.adjList.set(node, currentSet);
    } else {
      this.adjList.set(node, new Set([{ adj, weight }]));
    }
  }
  addEdge(node, adj, weight) {
    this.addEdgeHelper(node, adj, weight);
    if (adj != node) {
      this.addEdgeHelper(adj, node, weight);
    }
  }
  print() {
    console.log(this.adjList);
  }
}

const wg = new WeightedGraph();
wg.addEdge(1, 2, 3);
wg.addEdge(1, 3, 4);
wg.addEdge(2, 3, 5);
wg.print();

//Priority Queue

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  //Enqueue
  enqueue(item, weight) {
    let node = new WeightedGraph(item, weight);
    let contain = false;
    let i = 0;
    while (i < this.items.length && !contain) {
      if (this.items[i].weight > node.weight) {
        this.items.splice(i, 0, node);
        contain = true;
      }
      i++;
    }
    if (!contain) {
      this.items.push(node);
    }
  }
  dequeue() {
    if (this.items.length === 0) {
      throw new Error("No items here");
    } else {
      return this.items.shift();
    }
  }
}
//DK ALgorithm

function graphDegres(g) {
  let degree = new Map();
  for (const [keys, values] of g.adjList.entries()) {
    degree.set(keys, values.length);
  }
}
