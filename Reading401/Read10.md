# Stack and Queues 




## Stack is data structure that following LIFO approach (LAST IN FIRST OUT)/FILO (FIRST IN LAST OUT), it consists of Nodes that have next referencing to the next node but does not reference its prev. `Top` always refer to the top of the stack


### Methods on stack:
- Push --> to put nodes O(1)

```
   ALOGORITHM push(value)
     // INPUT <-- value to add, wrapped in Node internally
     // OUTPUT <-- none
     node = new Node(value)
     node.next <-- Top
     top <-- Node
```


- Pop --> to remove nodes O(1)

```
ALGORITHM pop()
// INPUT <-- No input
// OUTPUT <-- value of top Node in stack
// EXCEPTION if stack is empty

   Node temp <-- top
   top <-- top.next
   temp.next <-- null
   return temp.value
```


- Peek --> to view the value of the top in the stack O(1)

```
ALGORITHM peek()
// INPUT <-- none
// OUTPUT <-- value of top Node in stack
// EXCEPTION if stack is empty

   return top.value
```


- isEmpty --> return true if the stack is empty O(1)

```
ALGORITHM isEmpty()
// INPUT <-- none
// OUTPUT <-- boolean

return top = NULL
```

![](data:image/png;base64,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)



## Queue is a data structure that follows FIFO (FIRST IN FIRST OUT) approach/ LILO (LAST IN LAST OUT). Front - This is the front/first Node of the queue. Rear - This is the rear/last Node of the queue.



### Methods on Queue:

Enqueue --> to add nodes to the rear of the queue O(1)

```
ALGORITHM enqueue(value)
// INPUT <-- value to add to queue (will be wrapped in Node internally)
// OUTPUT <-- none
   node = new Node(value)
   rear.next <-- node
   rear <-- node
```


Dequeue --> to remove nodes form the front of the queue O(1) 

```
ALGORITHM dequeue()
// INPUT <-- none
// OUTPUT <-- value of the removed Node
// EXCEPTION if queue is empty

   Node temp <-- front
   front <-- front.next
   temp.next <-- null

   return temp.value
```

Peek --> to check the value of the front in the queue O(1)

```
ALGORITHM peek()
// INPUT <-- none
// OUTPUT <-- value of the front Node in Queue
// EXCEPTION if Queue is empty

   return front.value
```


isEmpty --> to check if the queue is empty O(1)

```
ALGORITHM isEmpty()
// INPUT <-- none
// OUTPUT <-- boolean

return front = NULL
```
![](https://www.tutorialandexample.com/wp-content/uploads/2020/05/Queue-in-DS-1.jpg)

------------------------------------------------------------------



[Video](https://www.youtube.com/watch?v=A3ZUpyrnCbM)

#### REFERENCE : [Stack and Queues](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-10/resources/stacks_and_queues.html)