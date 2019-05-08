const Queue = require('./queue');
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      let next = this.root;
      while (next) {
        if (val === next.val) return this;
        if (val < next.val) {
          if (next.left) {
            next = next.left;
          } else {
            next.left = node;
            return this;
          }
        } else {
          if (next.right) {
            next = next.right;
          } else {
            next.right = node;
            return this;
          }
        }
      }
    }
  }
  insertR(val, where) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    if (!where) where = this.root;
    if (val === where.val) return this;
    if (val < where.val) {
      if (where.left) return this.insertR(val, where.left);
      where.left = new Node(val);
    } else {
      if (where.right) return this.insertR(val, where.right);
      where.right = new Node(val);
    }
    return this;
  }
  find(val) {
    let next = this.root;
    while (next) {
      if (val === next.val) return next;
      if (val < next.val) next = next.left;
      else next = next.right;
    }
    return undefined;
  }
  remove(val, node = this, side = 'root') {
    if (!node[side]) return false;
    const handle = function(n, s) {
      if (n[s].left && n[s].right) {
        let minRight = n[s].right;
        while (minRight.left) minRight = minRight.left;
        n[s].val = minRight.val;
        return this.remove(minRight.val, n[s], 'right');
      }
      if (n[s].left) n[s] = n[s].left;
      else if (n[s].right) n[s] = n[s].right;
      else delete n[s];
      return true;
    };
    if (val === node[side].val) return handle.call(this, node, side);
    if (val < node[side].val) return this.remove(val, node[side], 'left');
    return this.remove(val, node[side], 'right');
  }
  bfs() {
    if (!this.root) return undefined;
    let queue = new Queue();
    queue.enqueue(this.root);
    let vals = [];
    while (queue.size) {
      const node = queue.dequeue();
      vals.push(node.val);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return vals;
  }
  //depth first search pre order
  dfs(n = this.root) {
    return n ? [n.val].concat(this.dfs(n.left) || []).concat(this.dfs(n.right) || []) : undefined;
  }

  dfsPost() {
    if (!this.root) return undefined;
    let vals = [];
    const traverse = n => {
      if (n.left) traverse(n.left);
      if (n.right) traverse(n.right);
      vals.push(n.val);
    };
    traverse(this.root);
    return vals;
  }
  dfsInOrder() {
    if (!this.root) return undefined;
    let vals = [];
    const traverse = n => {
      if (n.left) traverse(n.left);
      vals.push(n.val);
      if (n.right) traverse(n.right);
    };
    traverse(this.root);
    return vals;
  }
}

// let tree = new BinarySearchTree();
// tree.insertR(10);
// tree.insertR(15);
// tree.insertR(7);
// tree.insertR(20);
// tree.insertR(1);
// tree.insertR(13);
// tree.insertR(50);
// tree.insertR(11);
// tree.insertR(16);
// console.log(tree);
// console.log(tree.find(4));
// console.log(tree.find(15));
// console.log('-');
// console.log(tree.root);

// console.log(tree.bfs());
// console.log(tree.dfs());

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.dfs());
console.log(tree.dfsPost());
console.log(tree.dfsInOrder());
tree.remove(3);
console.log(tree.dfsInOrder());
