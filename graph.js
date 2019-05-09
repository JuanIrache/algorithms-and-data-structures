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
  //   removeVertex(v) {
  //     for (let i = this.adjacencyList[v].length - 1; i >= 0; i--) this.removeEdge(v, this.adjacencyList[v][i]);
  //     delete this.adjacencyList[v];
  //   }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1);
    if (this.adjacencyList[v2] && this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1);
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
console.log(graph);
