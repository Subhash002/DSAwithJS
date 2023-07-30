class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(data) {
    var newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  inOrderRecursive(node) {
    if (node !== null) {
      this.inOrderRecursive(node.left);
      console.log(node.data);
      this.inOrderRecursive(node.right);
    }
  }

  inOrderPrint() {
    this.inOrderRecursive(this.root);
  }

  containsRec(node, data) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.containsRec(node.left, data);
    } else if (data > node.data) {
      return this.containsRec(node.right, data);
    } else {
      return true;
    }
  }

  contains(data) {
    return this.containsRec(this.root, data);
  }

  findMinNode(node) {
    if (node.left === null) return null;
    else return this.findMinNode(node.left);
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  preOrderRecursive(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrderRecursive(node.left);

      this.preOrderRecursive(node.right);
    }
  }

  preOrderPrint() {
    this.preOrderRecursive(this.root);
  }
  postOrderRecursive(node) {
    if (node !== null) {
      this.postOrderRecursive(node.left);
      this.postOrderRecursive(node.right);
      console.log(node.data);
    }
  }

  postOrderPrint() {
    this.postOrderRecursive(this.root);
  }
  depthValues(node) {
    if (node === null) return node;
    const leftValue = this.depthValues(node.left);
    const rightValue = this.depthValues(node.right);
    return [node.data, ...leftValue, ...rightValue];
  }
}

function height(node) {}

let t = new BST();
t.insert(10);
t.insert(05);
t.insert(2);

// t.inOrderPrint();
t.contains(2);
// console.log("This is from inOrder");
// t.inOrderPrint();
// console.log("This is from preorderRecursive");
// t.preOrderPrint();
// console.log("Below is from different tree");
// t.postOrderPrint();
// This is from inOrder
// 5
// 10
// 15
// This is from preorderRecursive
// 10
// 5
// 15
// Below is from different tree
// 5
// 15
// 10

`In this exercise, we will see how to determine the height of a tree. The height of a tree
 is the maximum number of nodes between 
the root and the furthest possible child node. To do this, we can use the following steps:

If the node is null, we return -1 as there is no value
Recursively call with the left and right nodes, checking if the left or right segment is
 larger. Return the largest one as a result.
The code below shows how this is implemented. `;
function height(node) {
  if (node === null) return -1;
  else {
    let lheight = height(node.left);
    let rheight = height(node.right);
    if (lheight > rheight) return lheight + 1;
    else return rheight + 1;
  }
}
`In this exercise, we will see how to check if two trees are identical to each other. This process involves
 iterating both trees to determine if they completely match. There are a few cases to handle for this:

The base case is that both nodes are null. This indicates we have reached the end of a tree branch,
 so we can return true
The main recursive case, in which we compare the value of the current node, a recursive call to the 
left, and a recursive call to the right to verify that they all match
The case where values do not match, in which case we return false
The resulting code is shown below.`;
function isIdentical(a, b) {
  if (a === null && b === null) return true;
  if (a !== null && b !== null)
    return (
      a.data === b.data &&
      isIdentical(a.left, b.left) &&
      isIdentical(a.right, b.right)
    );
  return false;
}

`In this exercise, we will see how to mirror a tree. A mirrored tree swaps all of the left pointers with right pointers,
 and all of the right pointers with left pointers. The code for this involves iterating the left and right of the tree,
  swapping pointers as we go. The code for this is shown below.`;
function mirror(root) {
  if (node === null) return node;
  let left = node.left;
  let right = node.right;
  node.right = right;
  node.left = left;
  return node;
}

const isSymmetric = (node) => {
  if (node === null) return true;
  let left = node.left;
  let right = node.right;
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  if (left.value !== right.value) return false;
  return isSymmetric(right) && isSymmetric(left);
};

`In this exercise, we will see how to check if a tree is 
balanced. A tree is considered to be balanced if the 
difference between any two nodes heights is less than or 
equal to 1. To check this, we simply calculate the left and
 right node height, then verify if it is less than or equal
  to 1. We repeat this process, checking each of the left and
   right nodes. The code for this is shown below.`;
