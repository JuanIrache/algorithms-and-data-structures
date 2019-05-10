class Node {
  constructor(val, prio) {
    this.val = val;
    this.prio = prio;
  }
}

//based on binaryHeap
// exported for use in other exercises
module.exports = class PriorityQueue {
  constructor() {
    this.values = [];
  }
  get size() {
    return this.values.length;
  }
  enqueue(val, prio) {
    const node = new Node(val, prio);
    let i = this.values.length;
    this.values.push(node);
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (node.prio >= this.values[parent].prio) break;
      [this.values[parent], this.values[i]] = [this.values[i], this.values[parent]];
      i = parent;
    }
    return this.values;
  }
  //accepts a different index than max, really
  dequeue(i = 0) {
    let vals = this.values;
    if (vals.length <= 1) return vals.pop().val;
    const toReturn = vals[i];
    vals[i] = vals.pop();
    while (i < vals.length) {
      const ids = [i * 2 + 1, i * 2 + 2].filter(i => i < vals.length);
      const max = ids.reduce((acc, curr) => (acc === null || vals[curr].prio < vals[acc].prio ? curr : acc), null);
      if (max == null || vals[max].prio >= vals[i].prio) break;
      [vals[max], vals[i]] = [vals[i], vals[max]];
      i = max;
    }
    return toReturn.val;
  }
};

//not available here when exported
// let q = new PriorityQueue();
// q.enqueue('drunk', 5);
// q.enqueue('headache', 4);
// q.enqueue('fever', 3);
// q.enqueue('broken limb', 2);
// q.enqueue('stroke', 1);
// q.enqueue('gunshot', 0);

// console.log(q.values.map(v => v.val));
// console.log(q.dequeue().val);
// console.log(q.dequeue().val);
// console.log(q.dequeue().val);
// console.log(q.dequeue().val);
// console.log(q.dequeue().val);
// console.log(q.dequeue().val);
