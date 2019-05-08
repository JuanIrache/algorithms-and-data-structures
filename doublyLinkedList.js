class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  reverse() {
    if (!this.length) return undefined;
    let curr = this.head;
    while (curr) {
      [curr.prev, curr.next] = [curr.next, curr.prev];
      curr = curr.prev;
    }
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
    this.length--;
    return node;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let prev = this.get(index - 1);
    let node = new Node(val);
    debugger;
    node.next = prev.next;
    node.prev = prev;
    prev.next = node;
    node.next.prev = node;
    this.length++;
    return true;
  }
  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index > this.length / 2) {
      let curr = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        curr = curr.prev;
      }
      return curr;
    } else {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
      return curr;
    }
  }
  unshift(val) {
    let node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  push(val) {
    let node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;
    let node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }
  shift() {
    if (!this.length) return undefined;
    let node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      node.next = null;
      this.head.prev = null;
    }
    this.length--;
    return node;
  }
  toString() {
    let curr = this.head;
    let vals = [];
    while (curr) {
      vals.push(curr.val);
      curr = curr.next;
    }
    return vals;
  }
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
console.log(list.pop());
console.log(list.shift());
list.unshift(15);

console.log(list.toString());

list.set(0, 0);
console.log(list.get(1).val, list.get(0).val);

console.log(list.insert(1, 17));
list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list.toString());

console.log(list.remove(3));
list.reverse();
console.log(list.toString());
// var doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList
//   .push(5)
//   .push(10)
//   .push(15)
//   .push(20);
// console.log(doublyLinkedList.set(0, 10)); // true
// console.log(doublyLinkedList.length); // 4
// console.log(doublyLinkedList.head.val); // 10
// console.log(doublyLinkedList.set(10, 10)); // false
// console.log(doublyLinkedList.set(2, 100)); // true
// console.log(doublyLinkedList.head.next.next.val); // 100
