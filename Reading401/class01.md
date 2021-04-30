## Class 01

#### `Array.map()` :
 is an array method in which allow you to loop over array's elements and do call back function for each element. It clones the original array and brings back another array with the same LENGTH. 


#### `Array.reduce()` : 
is an array method that takes in 3 parameters Accumulator, Array's element and Index, it allows you to define the accumulator as any thing you want (string, number, array, object) and returns the accumulator that you defined and give value to it in the method.



![](/Images/arrayMethod.jpeg)


-----------------------------------------

![](/Images/then.png)

--------------------------------------



#### `Promises` :
is an async function that handle resolve and reject requests, it simple will say that : 
" Hey function do you job and when you finish .then() give me the results and I will handle them. " 

---------------------------------------



#### Are all callback functions considered to be Asynchronous? Why or Why Not?

Not all callback functions considered as Async, because callbacks are simply any regular function that passed in another function's parameter and this callback not necessarily has `setTimeout()` method, meaning with out this method it is now synchronous. for example using callback function in `Array.map()` or `Array.reduce()`.

#### Asynchronous Callbacks will say : 
" Hey function do you're work and when you finish do this callback function.


