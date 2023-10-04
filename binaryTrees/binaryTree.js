class Node {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }
}

class BinaryTree {
  constructor() {
    this.root;
  }
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    var currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
  find(value) {
    console.log("finding value: ", value);
    if (!this.root) {
      return false;
    }
    var currentNode = this.root;
    while (currentNode) {
      console.log(currentNode);
      if (currentNode.value === value) {
        console.log("Returned");
        return currentNode;
      }
      if (value < currentNode.value) {
        if (!currentNode.left) {
          return "not found";
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          return "Not Found";
        }
        currentNode = currentNode.right;
      }
    }
  }
  BFS() {
    var queue = [];
    var data = [];
    if (!this.root) {
      return data;
    }
    queue.push(this.root);
    while (queue.length) {
      console.log(queue);
      var currentNode = queue.shift();
      data.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    console.log(data);
  }
  DFSPreOrder() {
    if (!this.root) {
      return [];
    }
    var data = [];
    var traverse = (node) => {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    console.log(data);
  }
  DFSPostOrder() {
    if (!this.root) {
      return [];
    }
    var data = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    };
    traverse(this.root);
    console.log(data);
  }
  DFSInOrder() {
    if (!this.root) {
      return [];
    }
    var data = [];
    var traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
        data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root)
    console.log(data)
  }
}
//          10
//   5              13
//2     7       11      16

btList = [10, 5, 13, 2, 7, 11, 16];
const bt = new BinaryTree();
btList.forEach((number) => bt.insert(number));
bt.BFS();
bt.DFSPreOrder();
bt.DFSPostOrder();
bt.DFSInOrder()

//if I add 8 before 5
//             10
//         8       13
//     5       11     16
//  2    7
