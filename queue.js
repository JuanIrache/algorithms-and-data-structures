class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Exported for use in other algos
module.exports = class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let node = new Node(val);
    if (!this.size) this.first = node;
    else this.last.next = node;
    this.last = node;
    this.size++;
    return this.size;
  }
  dequeue() {
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
};

//Tests will not work inside this exported file

// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
