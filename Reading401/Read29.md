# Graphs

A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges

- Vertex - A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.
- Edge - An edge is a connection between two nodes.
- Neighbor - The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.
- Degree - The degree of a vertex is the number of edges connected to that vertex.

An `Undirected Graph` is a graph where each edge is undirected or bi-directional. This means that the undirected graph does not move in any direction.
`Directed Graph` also called a Digraph is a graph where every edge is directed.

Complete Graphs
A complete graph is when all nodes are connected to all other nodes.

Connected
A connected graph is graph that has all of vertices/nodes have at least one edge. A Tree is a form of a connected graph.

Disconnected
A disconnected graph is a graph where some vertices may not have edges. It is complelty possible to have standalone nodes or edges (also known as islands) in a graph data structure.

Acyclic Graph
An acyclic graph is a directed graph without cycles. A directed acyclic graph is also called a DAG. This can also be represented as what we know as a tree.

Cyclic Graphs
A Cyclic graph is a graph that has cycles.
A cycle is defined as a path of a positive length that starts and ends at the same vertex.

Adjacency Matrix
An Adjacency matrix is represented through a 2-dimensional array. If there are n vertices, then we are looking at an n x n Boolean matrix

Each Row and column represents each vertex of the data structure. The elements of both the column and the row must add up to 1 if there is an edge that connects the two, or zero if there isn’t a connection.

![](https://static.javatpoint.com/ds/images/sequential-representation.png)

a `sparse` graph is when there are very few connections. a `dense` graph is when there are many connections.

Adjacency List
An adjacency list is the most common way to represent graphs.
An adjacency list is a collection of linked lists or array that lists all of the other vertices that are connected.

---

Weighted Graphs
A weighted graph is a graph with numbers assigned to its edges. These numbers are called weights.
When representing a weighted graph in a matrix, you set the element in the 2D array to represent the actual weight between the two paths. If there is not a connection between the two vertices, you can put a 0, although it is known for some people to put the infinity sign instead.
Within adjacency lists, you must include both the weight and the name of the adjacent vertex. {vertices, weight}

---

```
ALGORITHM BreadthFirst(vertex)
    DECLARE nodes <-- new List()
    DECLARE breadth <-- new Queue()
    DECLARE visited <-- new Set()

    breadth.Enqueue(vertex)
    visited.Add(vertex)

    while (breadth is not empty)
        DECLARE front <-- breadth.Dequeue()
        nodes.Add(front)

        for each child in front.Children
            if(child is not visited)
                visited.Add(child)
                breadth.Enqueue(child)

    return nodes;
```

---

Depth First
In a depth first traversal, we approach it a bit different than the way we do when working with a depth first traversal of a tree. Similar to how the breadth-first uses a queue, we are going to use a Stack for our depth-first traversal.

The algorithm for a depth first traversal is as follows:

Push the root node into the stack
Start a while loop while the stack is not empty
Peek at the top node in the stack
If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
If the top node does not have any unvisited children, Pop that node off the stack
repeat until the stack is empty.
