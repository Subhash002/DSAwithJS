class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) temp = temp.right;
      else return true;
    }
    return false;
  }
  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  BSF() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);
    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }
  DFS_PRE() {
    let results = [];
    function transverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) transverse(currentNode.left);
      if (currentNode.right) transverse(currentNode.right);
    }
    transverse(this.root);
    return results;
  }
  invertTree(root) {
    if (root) {
      [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    }
    return root;
  }
  DFS_POST() {
    let results = [];
    function transverse(currentNode) {
      if (currentNode.left) transverse(currentNode.left);
      if (currentNode.right) transverse(currentNode.right);
      results.push(currentNode.value);
    }
    transverse(this.root);
    return results;
  }
  DFS_IN() {
    let results = [];
    function transverse(currentNode) {
      if (currentNode.left) transverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) transverse(currentNode.right);
    }
    transverse(this.root);
    return results;
  }
}

let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(27);

myTree.insert(70);
myTree.insert(18);
myTree.insert(52);
myTree.insert(82);

console.log(myTree);
console.log(myTree.contains(79));
console.log(myTree.contains(70));
console.log(myTree.minValueNode(myTree.root));
console.log(myTree.BSF());
console.log(myTree.DFS_POST());
console.log(myTree.DFS_IN());
