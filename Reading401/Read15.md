# Trees 

Trees are non-linear data structure 


* Node - A Tree node is a component which may contain it’s own values, and references to other nodes
* Root - The root is the node at the beginning of the tree
* K - A number that specifies the maximum number of children any node may have in a k-ary tree. In a binary tree, k = 2.
* Left - A reference to one child node, in a binary tree
* Right - A reference to the other child node, in a binary tree
* Edge - The edge in a tree is the link between a parent and child node
* Leaf - A leaf is a node that does not have any children
* Height - The height of a tree is the number of edges from the root to the furthest leaf

![](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/02/Tree.png?fit=768%2C600&ssl=1)



### There are two way to traverse a tree --> 


1. Depth First --> is to search in depth (tree height), we rely on `recursion` (call stack)

    - Pre-order: `root` --> `left` --> `right`

 ```
 ALGORITHM preOrder(root)

  OUTPUT <-- root.value

  if root.left is not NULL
      preOrder(root.left)

  if root.right is not NULL
      preOrder(root.right)
 ```

    - In-order: `left` --> `root` --> `right`

  ```
  ALGORITHM inOrder(root)
// INPUT <-- root node
// OUTPUT <-- in-order output of tree node's values

    if root.left is not NULL
        inOrder(root.left)

    OUTPUT <-- root.value

    if root.right is not NULL
        inOrder(root.right)
  ```


    - Post-order `left` --> `right` --> `root`

  ```
  ALGORITHM postOrder(root)
// INPUT <-- root node
// OUTPUT <-- post-order output of tree node's values

    if root.left is not NULL
        postOrder(root.left)

    if root.right is not NULL
        postOrder(root.right)

    OUTPUT <-- root.value
  ```


 2. Breadth First --> going through each level of the tree node-by-node. it uses Queue to traverse the width

   ```
   ALGORITHM breadthFirst(root)
// INPUT  <-- root node
// OUTPUT <-- front node of queue to console

  Queue breadth <-- new Queue()
  breadth.enqueue(root)

  while breadth.peek()
    node front = breadth.dequeue()
    OUTPUT <-- front.value

    if front.left is not NULL
      breadth.enqueue(front.left)

    if front.right is not NULL
      breadth.enqueue(front.right)
   ```


----------------------------------------


## K-ary Trees

tree that the nodes in it have more than two children (k = number of children)  

we traverse it useing the same Breadth first approach:

```
ALGORITHM breadthFirst(root)
// INPUT  <-- root node
// OUTPUT <-- front node of queue to console

  Queue breadth <-- new Queue()
  breadth.enqueue(root)

  while breadth.peek()
    node front = breadth.dequeue()
    OUTPUT <-- front.value

    for child in front.children
        breadth.enqueue(child)
```

------------------------------------------


### Binary Search Trees
BST has a structure, on the left of the root all the smaller values will be placed (smaller than the root), and all values that are larger than the root are placed to the right.


For searching a node in BST we compare the node we are searching for against the root of the tree or sub-tree. If the value is smaller, you only traverse the left side. If the value is larger, you only traverse the right side.The best way to approach a BST search is with a `while` loop.
 Time --> O(h) h = height of the tree (in perfect tree h = log(n))
 Space --> O(1)  we do not allocate new values while searching nodes  

 
 --------------------------------------------------


 One strategy for adding a new node to a binary tree is to fill all “child” spots from the top down. To do so, we would leverage the use of breadth first traversal. During the traversal, we find the first node that does not have all it’s children filled, and insert the new node as a child. We fill the child slots from left to right.
 Time --> O(n).
 Space --> O(w) w = width of the tree (in perfect tree w = 2^(h-1) where h is the height).

 In the event you would like to have a node placed in a specific location, you need to reference both the new node to create, and the parent node upon which the child is attached to.



[Video](https://www.youtube.com/watch?v=BHB0B1jFKQc)