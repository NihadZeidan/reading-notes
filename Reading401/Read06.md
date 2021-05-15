# Authentication

![](https://www.halock.com/wp-content/uploads/2015/09/Cyber-Security-Weak-Authentication.jpg)

### Explain what a “Singleton” is (in Computer Science terms) ?

Singleton: is the process of restricting class instantiating into one instance, and recalling the constructor will return the same one instance.


### Explain how the Singleton pattern can be used with Node modules, specifically with classes?

We can use it to create classes that we need it to be instantiating only once, for example to create no more than one user in the application by accident. 

The steps to create Singletons are:

1. Create a normal class.
2. Define the object settings in the a constructor as an object as you want it to be (in accordance to your needs, with the keys and values you want).
3. Make the instance of that class equal to `this` --> to refer to the same class.
4. Write if statement with the condition of (Class.instance == instanceof Class) {return Class.instance} ---> meaning each time you instanciate a new instance after the first one it will return the same class.
5. You can also freeze the settings you have created to avoid any changes by the users by `Object.freeze(this.settings)`
6. And you can freeze the whole instance by saying `Object.freeze(this)`.
7. You can create methods to get the settings out of your object with a key as a parameter.



### If you were tasked with building a middleware system like Express uses, what approach might you take to construct/operate it?

I would do this task following the Modularity approach to make every thing organized in the server, also I would use Singleton pattern to restrict some operations in the app.


--------------------------------------------------------------------



### Router Middleware:

Is a function that is bounded to the routes in the app. `const router = express.Router()`
it allows us to group the routes in certain module together. and it supports rout chaining.


### Dynamic Module Loading:
Is the process of Importing and Exporting Module dynamically instead of providing static string we can use functions and if statements the in the exporting and importing for Module. and execute and run the module functions and variables. Also unload the module from the memory.



### Singleton Pattern:
Is the process of restricting class instantiating into one instance, and recalling the constructor will return the same one instance.

### CRUD -> REST Method Matches:
CRUD meaning use HTTP methonds CREATE ---> post , READ ---> get, UPDATE ---> put and DELETE ---> delete.  and when we say REST APP or REST API we mean that we are following the RESTful standards and guidelines in creating and sending out HTTP request in the app.


### Mock Testing: 

The process of mocking the module or app you want to test by using different node packages, for example you can mock the whole app server by using `supertest` dependency, or you can mock the MongoDB by using `supergoose` dependency. 


------------------------------------------------------------------------



Which 3 things had you heard about previously and now have better clarity on?
Singleton pattern, Router middleware and CRUD apps.



Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Dynamic Modules,  Mocking the server or mock testing in general, what settings can we put in the singleton constructors.


What are you most excited about trying to implement or see how it works?
Singleton Patterns and Dynamic Modules.


### Securing Passwords with Bcrypt Hashing Function

Hashing is the greatest way for protecting passwords and considered to be pretty safe for ensuring the integrity of data or password.

Bcrypt is an adaptive hash function based on the Blowfish symmetric block cipher cryptographic algorithm and introduces a work factor (also known as security factor), which allows you to determine how expensive the hash function will be.


### Basic access authentication (BA)
basic access authentication is a method for an HTTP user agent (e.g. a web browser) to provide a user name and password when making a request. In basic HTTP authentication, a request contains a header field in the form of `Authorization: Basic <credentials>`. Authentications are encoded. we use `.set()` to pass the authentications to the HTTP header request.


Authentication: is the process of verifying that an individual, entity or website is whom it claims to be. Authentication in the context of web applications is commonly performed by submitting a username or ID and one or more items of private information that only a given user should know.

[Authentication CheatSheet ](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)



To install Bcrypt Package `npm install bcrypt`
[Bcrypt Docs](https://www.npmjs.com/package/bcrypt)


---------------------------------------------------------------------



#### Notes for me: 

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.

An Express application can use the following types of middleware:

Application-level middleware
Router-level middleware
Error-handling middleware
Built-in middleware
Third-party middleware