class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    let index = this.values.length;
    this.values.push(val);
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (val <= this.values[parent]) break;
      [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
      index = parent;
    }
    return this.values;
  }
  //accepts a different index than max, really
  extractMax(i = 0) {
    let vals = this.values;
    if (vals.length <= 1) return vals.pop();
    const toReturn = vals[i];
    vals[i] = vals.pop();
    while (i < vals.length) {
      const ids = [i * 2 + 1, i * 2 + 2].filter(i => i < vals.length);
      const max = ids.reduce((acc, curr) => (acc === null || vals[curr] > vals[acc] ? curr : acc), null);
      if (max == null || vals[max] <= vals[i]) break;
      [vals[max], vals[i]] = [vals[i], vals[max]];
      i = max;
    }
    return toReturn;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap);
