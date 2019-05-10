const PriorityQueue = require('./priorityQueue');

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(v) {
    this.adjacencyList[v] = this.adjacencyList[v] || [];
  }
  addEdge(v1, v2, w) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjacencyList[v1].push({ v: v2, w });
    this.adjacencyList[v2].push({ v: v1, w });
  }
  dijkstra(start, end) {
    let q = new PriorityQueue();
    let shortest = { [start]: { dist: 0, via: null } };
    let visited = {};
    q.enqueue(start, 0);
    while (q.size) {
      const key = q.dequeue();
      if (key === end) break;
      if (!visited[key]) {
        const obj = this.adjacencyList[key];
        obj.forEach(edge => {
          const dist = shortest[key].dist + edge.w;
          if (!shortest[edge.v] || dist < shortest[edge.v].dist) {
            shortest[edge.v] = { dist, via: key };
            q.enqueue(edge.v, dist);
          }
        });
        visited[key] = true;
      }
    }
    let result = [end];
    let curr = shortest[end];
    while (curr.via != null) {
      result.unshift(curr.via);
      curr = shortest[curr.via];
    }
    return result;
  }
}

let w = new WeightedGraph();
w.addEdge('Paris', 'Rome', 5);
w.addEdge('Paris', 'El Cairo', 10);
w.addEdge('Paris', 'Cape Town', 30);
w.addEdge('Paris', 'London', 5);
w.addEdge('Paris', 'New York', 30);
w.addEdge('Rome', 'New York', 24);
w.addEdge('Rome', 'Moscow', 15);
w.addEdge('Rome', 'Cape Town', 10);
w.addEdge('El Cairo', 'Sydney', 90);
w.addEdge('Moscow', 'Sydney', 20);
w.addEdge('Buenos Aires', 'Sydney', 25);
w.addEdge('Buenos Aires', 'Cape Town', 15);
// console.log(w.adjacencyList);
console.log(w.dijkstra('Rome', 'Sydney'));
