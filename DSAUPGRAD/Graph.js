class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      var currSet = this.adjList.get(node);
      currSet.add({ adj, weight });
      this.adjList.set(node, currSet);
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

  getEdges(node) {
    return this.adjList.get(node);
  }

  print() {
    console.log(this.adjList);
  }
  size() {
    return this.adjList.size;
  }
}

class GraphDifferent {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(source, target) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source);
    }
    if (!this.adjacencyList[target]) {
      this.addVertex(target);
    }
    this.adjacencyList[source].push(target);
    this.adjacencyList[target].push(source);
  }
  removeEdge(source, target) {
    if (!this.adjacencyList[source] || !this.adjacencyList[source]) {
      return;
    }
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (i) => i !== target
    );
    this.adjacencyList[target] = this.adjacencyList[target].filter(
      (i) => i !== source
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }
  // function BFS
  //    Initialize an empty queue, empty 'result' array & a 'visited' map
  //    Add the starting vertex to the queue & visited map
  //    While Queue is not empty:
  //      - Dequeue and store current vertex
  //      - Push current vertex to result array
  //      - Iterate through current vertex's adjacency list:
  //        - For each adjacent vertex, if vertex is unvisited:
  //          - Add vertex to visited map
  //          - Enqueue vertex
  //    Return result array

  // BSF(start) {
  //   const queue = [start];
  //   const result = [];
  //   const visited = new Map();
  //   visited.set(start, true);
  //   let currentVertex;
  //   while (queue.length) {
  //     currentVertex = queue.pop();
  //     result.push(currentVertex);
  //     this.adjacencyList[currentVertex].forEach((adj) => {
  //       if (!visited[adj]) {
  //         visited.set(adj, true);
  //         queue.push(adj);
  //       }
  //     });
  //   }
  //   return result;
  // }
  // function DFS
  //  Initialize an empty stack, empty 'result' array & a 'visited' map
  //  Add the starting vertex to the stack & visited map
  //  While Stack is not empty:
  //    - Pop and store current vertex
  //    - Push current vertex to result array
  //    - Iterate through current vertex's adjacency list:
  //      - For each adjacent vertex, if vertex is unvisited:
  //        - Add vertex to visited map
  //        - Push vertex to stack
  //  Return result array
  // DFS() {
  //   start = this.adjacencyList;
  //   const stack = [start];
  //   const result = [];
  //   const visited = new Map();
  //   let currentVertex;
  //   while (stack.length) {
  //     currentVertex = stack.pop();
  //     result.push(currentVertex);
  //     this.adjacencyList[currentVertex].forEach((adj) => {
  //       if (!visited[adj]) {
  //         visited.set(adj, true);
  //         stack.push(adj);
  //       }
  //     });
  //   }
  //   return result;
  // }
  print() {
    console.log(this.adjacencyList);
  }
}
GraphDifferent.prototype.BFS = function (start) {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
};

GraphDifferent.prototype.DFS = function (start) {
  const result = [];
  const stack = [start];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (stack.length) {
    currentVertex = stack.pop();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return result;
};

let g = new Graph();
g.addEdge(2);
g.addEdge(3);
g.addEdge(1);
g.size();
g.print();
// g.addEdge(1, 2);
// g.addEdge(2, 3);
// g.addEdge(3, 1);
// g.print();
// console.log("This is from BFS");
// g.BFS(g);
// console.log("This is from DFS");
// g.DFS(g);
