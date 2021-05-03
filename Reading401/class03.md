
![](https://res.cloudinary.com/practicaldev/image/fetch/s---orRrG_---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5vzr2cps82xkoamlm9qy.png)

#### Name 3 real world use cases where you’d want to change the request with custom middleware
1. when we use the static middleWare to identify the path for the public folder that have css files
2. when we want to check/validate the user for authentications before sending him\her the data.
3. when we want to check if the user logged in before showing him/her the data.
4. when we want to handle errors and reform the error to show message as we want. 


#### True or false: The route handler is middleware?
False, the route handler is a function that define what to see after hitting a specific path. (telling the HTTP request what to do)


#### In what ways can a middleware function end the process and send data to the browser?
by using `next()` method in the middleWare to go to the next request handler function in which it handles the data.


#### At what point in the request lifecycle can you “inject” middleware?
After specifying the path, and before the call back function that will handle the response.
example = `app.use("/home", middleWare, (req, res) => {})`


#### What can cause express to error with “Request headers sent twice, cannot start a second response”
It happens when you try to make response many times in the route handler function.


----------------------------------------------

- Middleware : is like a waiter (function) in the restaurants that help (handle) the clients orders (HTTP requests) with getting the orders in the right way (cover all the gaps to get the data).


- Request Object : is an object that we use in the route handler functions or in middleWare functions that help us in getting data from the URL, or from the page it self (forms in the page). 
example of request methods:  `request.params` | `request.body` | `request.query`


- Response Object : is an object that we use in the route handler functions to send various data types, files or templates to the page.
example of response methods : `response.send` | `response.status` | `response.sendFile` | `response.render` | `response.redirect`


- Application Middleware : is a software that handle the gaps between the route and the route handlers to provide right data, we identify it by `app.use` and it is one type of the general MiddleWares.


- Routing Middleware : is a middleWare that is responsible to do various activities to the data before calling the route handler function, for example `console.log` the http requests, and checking the validity of the params or search query, checking authentication of the user ...

example : 

---------------------------
(req, res, next) => {
    console.log('REQUEST METHOD: ', req.method, "PATH: ", req.path);
    next();
}

--------------------------


- Test-Driven Development : it is a way to develop a software (programming) that consist of 3 activities Coding, Testing and Designing (refactor) to turn the code to testing units before full deployment.


- Behavioral Testing : it is part of (TDD) in which we provide human-readable description to the program tests so other users can follow it and implement the steps.





Which 3 things had you heard about previously and now have better clarity on?
Routing, MiddleWares and BDD

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Cases to change the request with middleWares!

What are you most excited about trying to implement or see how it works?
(TDD and BDD)


---------------------------------------------------------------

## Classes 

is another way to write an objects (object template) that give us more flexibility and shortcuts to deal with objects (in fact it is a special functions and it has two syntax just like a normal function; expressions or declaration).

Classes declaration do not support hoisting (meaning they do not go to the beginning when you declare them, so the ordering is important, first you should declare then call them)


Class expressions can be named or unnamed, and you access the name by (VariableName.name).

The `constructor` method in classes is a special method in which allow you to create object with properties and values, its is important to know that classes do not support more than one special method with the same name. and we use `super` keyword to call the constructor and pass to it parameters.

All the methods that created in the class are created as a prototype.

We can use `extends` keyword to create subclass from the parent class (inheritance)

#### Link to my classes demo : 
[Classes ES6](https://replit.com/@NihadZeidan/ES6-Classes#vehicles-with-classes.js)


------------------------------------------------------------------



## Routing (The new Router() in express)


the `Router()` is like mini express app only with the routing abilities. It is helpful because it gave us more flexibility in building the routs; for example:  we can use `express.Router()` many times to group routes together, apply it to a specific section in our app using `app.use()`, use route middleware to process request and check/validate the data/params, and use `app.route()` if you want to apply different requests on the same route.





###### Notes For me: 

 `header` refers to supplemental data placed at the beginning of a block of data being stored or transmitted. In data transmission, the data following the header is sometimes called the payload or body.

 function expression ---> anonymous function
 function declaration ---> when you first declare (write) the function 
 function calling or invoking ---> `functionName()`