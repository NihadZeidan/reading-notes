## Call Stack

A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function. the call stack is synchronous.



 - When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
 - Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
 - When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
 - If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.


 Example of StackOver Flow: 

 function callMyself(){
  callMyself();
}
callMyself();


The callMyself() will run until the browser throws a “Maximum call size exceeded”. And that is a stack overflow.

------------------------------


At the most basic level, a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).

Manage function invocation (call): meaning step by step OR function by function (synchronous)

------------------------
