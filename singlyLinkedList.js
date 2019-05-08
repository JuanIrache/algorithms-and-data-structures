class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this; ///necessary?
  }

  pop() {
    if (!this.head) return undefined;
    let pre = this.head;
    let curr = this.head;
    while (curr.next) {
      pre = curr;
      curr = curr.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return curr;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this; ///necessary?
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }

  find(val) {
    let curr = this.head;
    for (let i = 0; i < this.length; i++) {
      if (curr.val === val) return curr;
      curr = curr.next;
    }
    return undefined;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let prevNode = this.get(index - 1);
    let node = new Node(val);
    node.next = prevNode.next;
    prevNode.next = node;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(val);
    if (index === this.length - 1) return this.pop(val);
    let prevNode = this.get(index - 1);
    let node = prevNode.next;
    prevNode.next = node.next;
    this.length--;
    return node;
  }

  reverse() {
    if (!this.length) return undefined;
    const reverseRecursive = function(node, prev) {
      if (node.next) reverseRecursive(node.next, node);
      node.next = prev;
    };
    reverseRecursive(this.head);
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }

  toString() {
    let vals = [];
    let curr = this.head;
    while (curr) {
      vals.push(curr.val);
      curr = curr.next;
    }
    return `[${vals.join(',')}]`;
  }
}

let list = new SinglyLinkedList();
console.log(list.unshift(50));

console.log(list.push(10));
console.log(list.push(20));
console.log(list.push(30));
console.log(list.pop());
console.log(list.shift());
console.log(list.unshift(40));

console.log(list.get(2));
console.log(list.set(2, 60));
console.log(list.insert(1, 34));
console.log(list.remove(2));
console.log(list.toString());

console.log(list.reverse());

console.log(list.toString());

console.log(list.find(34));
