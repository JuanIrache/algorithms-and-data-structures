class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.size) this.last = node;
    else node.next = this.first;
    this.first = node;
    this.size++;
    return this.size;
  }
  pop() {
    if (!this.size) return undefined;
    let node = this.first;
    if (this.first === this.last) this.last = null;
    this.first = node.next;
    this.size--;
    return node.val;
  }
  toString() {
    let curr = this.first;
    let vals = [];
    while (curr) {
      vals.push(curr.val);
      curr = curr.next;
    }
    return vals;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
