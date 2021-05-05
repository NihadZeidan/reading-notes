#  Data Modeling

### Name 3 advantages to Test Driven Development:
- We will make our code more modular (because each testing unit will be based on the module)
- Makes code easier to refactor and catch bugs.
- It encourages small steps, so you will need to divide the problem into small steps to test each step, which in reverse will be beneficial for readability, maintains and clean coding.
- Catch bugs immediately.

### In what case would you need to use beforeEach() or afterEach() in a test suite?
We use it when we want to apply something to the data before each testing and after each one.

### What is one downside of Test Driven Development
- The test suit it self has to be maintained over time. (or when you make changing to the code)
- The test maybe hard to write.
-  It slows down the development process.

### What’s the primary difference between ES6 Classes and Constructor/Prototype Classes?
In classes each method will be defined as a prototype, meaning when you make instance of that class the prototype will not take from memory and will not be there unless you call it in the instance, whereas in constructors each method you define in it, and make new instance all the methods will be there and will take from the memory even if you do not call them.

“A prototype is a working object instance. Objects inherit directly from other objects.”
“Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.”

### Why REST?
Following REST guidelines and recommendations in developing our API/server will make it easier to catch bugs and maintain, more readable, more scalable (stateless and faster data interchange), and more flexible.




### Functional programming (FP):  is the programming process that compose pure functions, avoiding shared state, mutable data, and side-effects.



### Object-oriented programming (OOP): is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields, and code, in the form of procedures.



### Class: another way to write an objects (object template) that give us more flexibility and shortcuts to deal with objects (in fact it is a special functions and it has two syntax just like a normal function; expressions or declaration).



### Super: is a keyword to model and manipulate the data in the constructor classes.



### this: this refer to where ever you using it, for example if you are using it inside constructor function of class `this` will refer to this class, whereas if you use it in the document level or inside an arrow function `this` will refer to the whole document.



### Test Driven Development (TDD): it is a way to develop a software (programming) that consist of 3 activities Coding, Testing and Designing (refactor) to turn the code to testing units before full deployment.



### Jest: jest is a dependance that help us to test our code and build testing units in JS.



### Continuous Integration (CI): CI is a work flow strategy to ensure everyone's changing (new codes) will integrate to the main brach (help to reduce merge conflicts and catch bugs) and it does that by using webhooks or APIs that will take each commit and test it and back to you with a message weather passed or not.



### REST:  Representational State Transfer, it is architectural style that gives a recommendations (guidelines) when building web servers that use HTTP protocol.



### Data Model : is a way to organize elements of the data and define how these elements will relate to each other to allow us to use the data as we wanted.





Which 3 things had you heard about previously and now have better clarity on?
Data Model, REST and classes

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
classes and prototypes, FP

What are you most excited about trying to implement or see how it works?
TDD and OOP



-----------------------------------------------------------------------------

# SQL vs NoSQL

SQL : Structured Query Language, is a language we use to communicate with relational (SQL) Databases to retrive, update, create, delete and manipulate data.

SQL-DB : table based databases that has specific criteria in storing the data like the number of fields (column) for each record (row) must be the same and can create relationship between tables inside it (relational DB). it grows vertically. it is a good fit for performing complex query.


NoSQL: databases that have collection of `key-value` pair, documents, graph databases or wide-column stores which do not have standard schema definitions which it needs to adhered to. and it uses UnQl (Unstructured Query Language) to communicate with the data. (it differs form DB to another). it grows horizontally.


SQL database examples: 
MySql, Oracle, Sqlite, Postgres and MS-SQL. 

NoSQL database examples: 
MongoDB, BigTable, Redis, RavenDb, Cassandra, Hbase, Neo4j and CouchDb

Mongodb: is one of the most popular document based NoSQL database as it stores data in JSON like documents. It is non-relational database with dynamic schema.



