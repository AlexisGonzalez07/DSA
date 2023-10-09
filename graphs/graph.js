class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.addVertex[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertexOne, vertexTwo) {
    //find the key of vertex One and push vertex 2 to the array
    this.adjacencyList[vertexOne].push(vertexTwo);
    //find vertexTwo
    this.adjacencyList[vertexTwo].push(vertexOne);
  }
  removeEdge(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
      (value) => value !== vertexTwo
    );
    this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
      (value) => value !== vertexOne
    );
  }
  removeVertex(vertex) {
    for (const key in this.adjacencyList) {
      this.removeEdge(key, vertex);
    }
    delete this.adjacencyList.vertex;
  }
  DFS(startVertex) {
    var results = [];
    var visited = {};
    const traverse = (vertex) => {
      if (!this.adjacencyList[vertex].length) {
        return;
      }
      results.push(vertex);
      visited[vertex] = true;
      var otherVertex = this.adjacencyList[vertex];
      otherVertex.forEach((element) => {
        if (!visited[element]) {
          traverse(element);
        }
      });
    };
    traverse(startVertex);
    console.log(results);
  }
  DFSIterative(startVertex) {
    var stack = [];
    var data = [];
    var visited = {};
    stack.push(startVertex);
    while (stack.length) {
      var vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        data.push(vertex);
        this.adjacencyList[vertex].forEach((element) => {
          if (!visited[element]) {
            stack.push(element);
          }
        });
      }
    }

    console.log(data);
  }
  BFS(startingVertex) {
    var queue = [startingVertex];
    var data = [];
    var visited = {};
    let vertex;
    while (queue.length) {
      vertex = queue.shift();
      data.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach((element) => {
        if (!visited[element]) {
            visited[element] = true
          queue.push(element);
        }
      });
    }
    console.log(data);
  }
}
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g);
g.DFSIterative("A");
g.BFS("A");
//         A
//     /       \
//   B           C
//   |           |
//   D --------- E
//     \       /
//         F
