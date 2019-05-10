const Stack = require('./21_stack');
const Queue = require('./21_queue');

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }
  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeVertex(v) {
    while (this.adjacencyList[v].length) this.removeEdge(v, this.adjacencyList[v].pop());
    delete this.adjacencyList[v];
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1);
    if (this.adjacencyList[v2] && this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1);
  }
  dfsRecursive(v1) {
    let results = [];
    let visited = {};
    const recursion = v => {
      visited[v] = true;
      results.push(v);
      this.adjacencyList[v].forEach(e => {
        if (!visited[e]) recursion(e);
      });
    };
    recursion(v1);
    return results;
  }
  dfsIterative(v1) {
    let s = new Stack();
    let results = [];
    let visited = {};
    s.push(v1);
    while (s.size) {
      const v = s.pop();
      if (!visited[v]) {
        results.push(v);
        visited[v] = true;
        this.adjacencyList[v].forEach(e => s.push(e));
      }
    }
    return results;
  }
  bfs(v1) {
    let q = new Queue();
    let results = [];
    let visited = {};
    q.enqueue(v1);
    while (q.size) {
      const v = q.dequeue();
      if (!visited[v]) {
        results.push(v);
        visited[v] = true;
        this.adjacencyList[v].forEach(e => q.enqueue(e));
      }
    }
    return results;
  }
}

let graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Barcelona');
graph.addVertex('El Cairo');
graph.addEdge('Tokyo', 'Barcelona');
graph.addEdge('El Cairo', 'Barcelona');
graph.removeEdge('Tokyo', 'Barcelona');
graph.removeEdge('Madrid', 'Barcelona');
graph.addEdge('Moscow', 'El Cairo');
graph.addEdge('Moscow', 'Paris');
graph.addEdge('London', 'Paris');
graph.addEdge('New York', 'Paris');
graph.addEdge('Buenos Aires', 'New York');
graph.removeVertex('Paris');
graph.addEdge('Beijing', 'London');
graph.addEdge('Beijing', 'Cape Town');
graph.addEdge('Cape Town', 'El Cairo');
graph.addEdge('Buenos Aires', 'Sydney');
graph.addEdge('Buenos Aires', 'London');
console.log(graph.adjacencyList);
console.log('*************');

console.log(graph.dfsRecursive('Barcelona'));
console.log(graph.dfsIterative('Barcelona'));
console.log(graph.bfs('Barcelona'));
